import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import CourseList from "../components/CoursesList";
import CourseForm from "../components/CourseForm"; 

function ViewCourses() {
  const { courses, deleteCourse, addCourse, updateCourse } = useContext(CourseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const navigate = useNavigate(); 


  const handleAddCourse = () => {
    setIsEditing(false);
    setCurrentCourse(null); 
  };

  
  const viewCourseDetails = (courseId) => {

    navigate(`/course-details/${courseId}`);
  };

 
  const handleEditCourse = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    setIsEditing(true);
    setCurrentCourse(course);
  };

  return (
    <div>
      <h2>Courses</h2>
      <button onClick={handleAddCourse}>Add New Course</button>
      {isEditing ? (
        <CourseForm course={currentCourse} onSubmit={updateCourse} />
      ) : (
        <CourseList
          courses={courses}
          deleteCourse={deleteCourse}
          viewDetails={viewCourseDetails} 
          editCourse={handleEditCourse}
        />
      )}
    </div>
  );
}

export default ViewCourses;
