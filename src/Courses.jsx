// src/components/Courses.jsx
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState(''); // Filter state for categories

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesList = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    const courseRef = doc(db, 'courses', courseId);
    await updateDoc(courseRef, {
      enrolledStudents: ["userId"] // Add the user ID to the enrolledStudents array
    });
    alert('Enrolled Successfully');
  };

  return (
    <div>
      <h2>Available Courses</h2>
      <input
        type="text"
        placeholder="Filter courses by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {courses
          .filter((course) =>
            course.category.toLowerCase().includes(filter.toLowerCase())
          )
          .map((course) => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Category: {course.category}</p>
              <p>Duration: {course.duration}</p>
              <button onClick={() => handleEnroll(course.id)}>Enroll</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Courses;
