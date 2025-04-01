import { useSelector } from "react-redux";
import './CourseList.css'
import { unenrollCourse } from "../store/EnrollSlice";
import { useDispatch } from "react-redux";

const EnrolledCourses = () => {
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  console.log("length:" + enrolledCourses.length);
  const dispatch=useDispatch();

  const handleUnenroll = (id) => {
    dispatch(unenrollCourse(id));
  };

  return (
    <div>
      <h2>My Enrolled Courses</h2>
      <div className="course-container">
      {enrolledCourses.length > 0 ? (
        enrolledCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <iframe
              width="100%"
              height="200"
              src={course.video}
              title={course.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={() => handleUnenroll(course.id)}>UnEnroll</button>
          </div>
        ))
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
    </div>
  );
};

export default EnrolledCourses;
