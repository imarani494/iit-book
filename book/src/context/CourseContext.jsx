import React, { createContext, useState } from "react";


const initialCourses = [
  {
    id: 1,
    title: "Blade Runner",
    description: "Do Androids Dream of Electric Sheep",
    materials: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/watch?v=y2wx42dVKzo",
      },
      {
        id: 2,
        type: "Flow My Tears, the Policeman Said",
        content: "Jason Taverner woke up one morning to find himself completely unknown. The night before he had been the top-rated television star with millions of devoted watchers. The next day he was just an unidentified walking object",
      },
    ],
  },
  {
    id: 2,
    title: "Philip K. Dick",
    description: "Philip K. Dick was born in Chicago in 1928 and lived most of his life in California. In 1952",
    materials: [
      {
        id: 3,
        type: "assessment",
        content: "What is the difference between `var`, `let`, and `const`?",
      },
    ],
  },
];

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourses);

  const addCourse = (course) => {
    setCourses([...courses, { ...course, id: Date.now() }]);
  };

  const updateCourse = (updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const addMaterialToCourse = (courseId, material) => {
    setCourses(
      courses.map((course) =>
        course.id === courseId
          ? { ...course, materials: [...course.materials, material] }
          : course
      )
    );
  };

  const updateMaterialInCourse = (courseId, updatedMaterial) => {
    setCourses(
      courses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              materials: course.materials.map((material) =>
                material.id === updatedMaterial.id ? updatedMaterial : material
              ),
            }
          : course
      )
    );
  };

  const deleteMaterialFromCourse = (courseId, materialId) => {
    setCourses(
      courses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              materials: course.materials.filter(
                (material) => material.id !== materialId
              ),
            }
          : course
      )
    );
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        addMaterialToCourse,
        updateMaterialInCourse,
        deleteMaterialFromCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
