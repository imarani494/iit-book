import React from "react";
import '../styles/CourseList.css'; 

function CourseList({ courses, deleteCourse, viewDetails, editCourse }) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course.id} className="course-item">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div className="button-container">
            <button onClick={() => viewDetails(course.id)}>View Details</button>
            <button onClick={() => editCourse(course.id)}>Edit</button>
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
