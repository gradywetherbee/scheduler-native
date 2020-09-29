import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from './firebase';
import SignInButton from './components/SignInButton';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import SignInScreen from './screens/SignInScreen';
import UserContext from './UserContext';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = snap => {
        setUser({uid: auth.uid, ...snap.val()});
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={({ navigation }) => ({
              title: "Schedule",
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
            })
            }
          />
          <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={{ title: 'Course detail' }} />
          <Stack.Screen name="CourseEditScreen" component={CourseEditScreen} options={{ title: 'Course Editor' }} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;