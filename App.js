import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const schedule = {
  title: "CS Courses for 2018-2019"
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} > { schedule.title } </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#888',
    fontSize: 32,
  }
});

export default App;
