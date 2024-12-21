import React, { useState, useEffect } from "react";
import '../styles/Courseform.css'; 

function CourseForm({ course, onSubmit }) {
  const [title, setTitle] = useState(course ? course.title : "");
  const [description, setDescription] = useState(course ? course.description : "");

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: course ? course.id : Date.now(),
      title,
      description,
    };
    onSubmit(newCourse);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <label>Course Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter course title"
      />
      <label>Course Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        placeholder="Enter course description"
      />
      <button type="submit" className="submit-btn">
        {course ? "Update Course" : "Add Course"}
      </button>
    </form>
  );
}

export default CourseForm;
