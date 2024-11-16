// src/components/Courses.jsx
import React from 'react';

const Courses = () => {
  const courses = [
    { title: "Anatomy", description: "Study of the human body" },
    { title: "Physiology", description: "Study of body functions" },
    { title: "Biochemistry", description: "Study of chemical processes in the body" },
  ];

  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
