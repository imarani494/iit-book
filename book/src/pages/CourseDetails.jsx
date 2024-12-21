import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import "../styles/Course-details.css";

function CourseDetails() {
  const { id } = useParams(); 
  const { courses } = useContext(CourseContext);

  
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="course-details">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Materials</h3>
      <ul>
        {course.materials && course.materials.length > 0 ? (
          course.materials.map((material) => (
            <li key={material.id}>
              <p>{material.type}</p>
              {material.type === "video" && (
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/DpyMvwF4OSE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              {material.type === "article" && (
                <p>Article: {material.content}</p>
              )}
              {material.type === "assessment" && (
                <p>Assessment: {material.content}</p>
              )}
            </li>
          ))
        ) : (
          <p>No materials available</p>
        )}
      </ul>
    </div>
  );
}

export default CourseDetails;
