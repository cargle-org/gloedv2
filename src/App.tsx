import { Route, Routes } from 'react-router-dom';
import './App.css'
import AdminDashboard from './components/Admin/Pages/AdminDashboard';
import StudentDashboard from './components/Student/Pages/StudentDashboard';
import InternalHeader from './components/Layout/InternalHeader';
import CourseDetails from './components/Student/Pages/CourseDetails';
import ClassHistory from './components/Student/Pages/ClassHistory';
import AdminCourseDetails from './components/Admin/Pages/AdminCourseDetails';
import CreateCourseModule from './components/Admin/Pages/CreateCourseModule';


function App() {

  return (
    <div className='box-border'>
      <InternalHeader />
      <Routes>
        <Route path='/' element={<StudentDashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/course-details' element={<CourseDetails />} />
        <Route path='/admin-course-details' element={<AdminCourseDetails />} />
        <Route path='/class-history' element={<ClassHistory />} />
        <Route path='/add-modules' element={<CreateCourseModule />} />
      </Routes>
    </div>
  )
}
export default App
