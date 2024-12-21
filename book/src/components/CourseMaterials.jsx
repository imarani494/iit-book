import React, { useState } from "react";
import MaterialForm from "./MaterialForm";

function CourseMaterials({ course, addMaterial, updateMaterial, deleteMaterial }) {
  const [editingMaterial, setEditingMaterial] = useState(null);

  const handleEdit = (material) => {
    setEditingMaterial(material);
  };

  const handleDelete = (materialId) => {
    deleteMaterial(materialId);
  };

  return (
    <div>
      <h2>Course Materials</h2>
      <ul>
        {course.materials.map((material) => (
          <li key={material.id}>
            <h3>{material.type}</h3>
            {material.type === "video" && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${material.url.split("v=")[1]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            )}
            {(material.type === "article" || material.type === "assessment") && (
              <p>{material.content}</p>
            )}
            {material.type === "question" && (
              <div>
                <p>{material.question}</p>
                <ul>
                  {material.options.split(",").map((option, index) => (
                    <li key={index}>{option.trim()}</li>
                  ))}
                </ul>
                <p>Correct Answer: {material.correctAnswer}</p>
              </div>
            )}
            <button onClick={() => handleEdit(material)}>Edit</button>
            <button onClick={() => handleDelete(material.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <MaterialForm
        material={editingMaterial || { type: "", content: "", url: "" }}
        saveMaterial={editingMaterial ? updateMaterial : addMaterial}
      />
    </div>
  );
}

export default CourseMaterials;
