import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import CategoryNavbar from './components/CategoryNavbar.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import CourseList from './components/CourseList.jsx'
import { Provider } from "react-redux";
import { Routes,Route } from 'react-router-dom'
import store from './store/store.js'
import CourseNavbar from './components/CourseNavbar.jsx'
import EnrolledCourses from './components/EnrolledCourses.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const categoryToFile = {
    "Business": "business.json",
    "Development": "development.json",
    "Data Science": "dataScience.json",
    "Cloud Computing": "cloudComputing.json",
    "Cyber Security": "cyberSecurity.json",
    "Math & Logic": "mathLogic.json",
    "Personal Development": "personalDevelopment.json",
    "Economics": "economics.json",
    "Data Structures & Algorithms": "dsa.json"
  };


  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedCategory === "All Courses") {
        console.log("you are inside all courses");
        // Load all courses from all JSON files
        let allCourses = [];
        for (const file of Object.values(categoryToFile)) {
          const response = await fetch(`/data/${file}`);
          const data = await response.json();
          allCourses = [...allCourses, ...data];
        }
        setCourses(allCourses);
      } else {
        // Load only the selected category
        const file = categoryToFile[selectedCategory];
        console.log(`you are inside ${file}`);

        if (file) {
          const response = await fetch(`/data/${file}`);
          const data = await response.json();
          setCourses(data);
        }
      }
    };

    fetchCourses();
  }, [selectedCategory]);

  

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<><Navbar></Navbar> <Home/> <Footer/></>}/>
          <Route path='/course' element={<><CourseNavbar/> <CategoryNavbar setSelectedCategory={setSelectedCategory} /><CourseList courses={courses}/><Footer/></>}/>
          <Route path='/mylearning' element={<><CourseNavbar/><EnrolledCourses/><Footer/></>}/>
        </Routes>
        {/* <Footer/> */}
      </Provider>
      
     
    </>
  )
}

export default App
