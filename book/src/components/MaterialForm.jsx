import React, { useState } from "react";

function MaterialForm({ material, saveMaterial }) {
  const [formData, setFormData] = useState(material);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMaterial(formData);
    setFormData({ type: "", content: "", url: "", questions: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="material-form">
      <label>
        Type:
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="video">Video</option>
          <option value="article">Article</option>
          <option value="assessment">Assessment</option>
        </select>
      </label>

      {formData.type === "video" && (
        <label>
          YouTube Video URL:
          <input
            type="url"
            name="url"
            value={formData.url || ""}
            onChange={handleChange}
            required
          />
        </label>
      )}

      {formData.type === "article" && (
        <label>
          Article (Markdown):
          <textarea
            name="content"
            value={formData.content || ""}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      )}

      {formData.type === "assessment" && (
        <label>
          Assessment (Markdown):
          <textarea
            name="content"
            value={formData.content || ""}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      )}

      <button type="submit" className="btn">
        {material.id ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default MaterialForm;
