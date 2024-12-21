import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./context/CourseContext";
import ViewCourses from "./pages/ViewCourses";
import CourseDetails from "./pages/CourseDetails"; 
import ThemeToggle from "./components/ThemeToggle";
import './index.css';

function App() {
  return (
    <Router>
      <CourseProvider>
        <div className="App">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<ViewCourses />} />
            <Route path="/course-details/:id" element={<CourseDetails />} /> 
          </Routes>
        </div>
      </CourseProvider>
    </Router>
  );
}

export default App;
