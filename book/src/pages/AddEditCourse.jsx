import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import CourseForm from "../components/CourseForm";

function AddEditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { courses, addCourse, updateCourse } = useContext(CourseContext);

  const isEdit = id !== "new";
  const course = isEdit ? courses.find((c) => c.id === parseInt(id)) : null;

  const saveCourse = (course) => {
    if (isEdit) {
      updateCourse(parseInt(id), course);
    } else {
      addCourse(course);
    }
    navigate("/");
  };

  return (
    <div className="container">
      <CourseForm course={course || { title: "", description: "", materials: [] }} saveCourse={saveCourse} />
    </div>
  );
}

export default AddEditCourse;
