import React from "react";
import './CourseList.css'
import { useDispatch } from "react-redux";
import { enrollCourse } from "../store/EnrollSlice";


const CourseList = ({ courses }) => {
  const dispatch = useDispatch();

  const handleEnroll = (course) => {
    dispatch(enrollCourse(course)); // Dispatch enroll action
    alert(`Enrolled in ${course.title}!`);
  };

  return (
    <div className="course-container">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <iframe
              width="100%"
              height="200"
              src={course.video}
              title={course.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={() => handleEnroll(course)}>Enroll</button>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default CourseList;
