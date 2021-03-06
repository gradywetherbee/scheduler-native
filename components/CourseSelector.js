import React, { useState } from 'react';
import { hasConflict } from '../utils/course.js';
import Course from './Course';

const CourseSelector = ({ courses, view }) => {
    const [selected, setSelected] = useState([]);

    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
        courses.map(course => (
            <Course key={course.id} course={course}
                isDisabled={hasConflict(course, selected)}
                select={toggle}
                isSelected={selected.includes(course)}
                view={view} 
            />
        ))
    );
};

export default CourseSelector;