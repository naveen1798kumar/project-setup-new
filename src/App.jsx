import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// import About from "./pages/About";
import About from "./pages/About"
// AboutSection
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

import Contact from "./pages/Contact";
import OnlineCourses from "./pages/OnlineCourses";
import NotFound from "./pages/NotFound"; // 404 Page
import Loading from "./components/elementComponents/Loading"; // Loading Component

// 
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSection from "./components/homecomponents/AboutSection";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  // Show the Loading screen until the app is ready
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />  {/* Home as default (index) */}
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:category/:title" element={<CourseDetail />} />


          <Route path="/contact" element={<Contact />} />
          <Route path="/courses-online" element={<OnlineCourses />} />
          <Route path="*" element={<NotFound />} /> 404 Route 
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
