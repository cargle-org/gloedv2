import { Route, Routes } from 'react-router-dom';
import './App.css'
import AdminDashboard from './components/Admin/Pages/AdminDashboard';
import StudentDashboard from './components/Student/Pages/StudentDashboard';
import InternalHeader from './components/Layout/InternalHeader';
import CourseDetails from './components/Student/Pages/CourseDetails';
import ClassHistory from './components/Student/Pages/ClassHistory';
import AdminCourseDetails from './components/Admin/Pages/AdminCourseDetails';
import CreateCourseModule from './components/Admin/Pages/CreateCourseModule';
import ForgotPassword from './components/Admin/Auth/AdminForgotPassword';
import AdminForgotPassword from './components/Admin/Auth/AdminForgotPassword';
import AdminLogin from './components/Admin/Auth/AdminLogin';
import Login from './components/Student/Auth/Login';
import SignUp from './components/Student/Auth/SignUp';
import LandingPage from './components/Pages/LandingPage';


function App() {

  return (
    <div className='box-border'>
      <InternalHeader />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mydashboard' element={<StudentDashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/course-details' element={<CourseDetails />} />
        <Route path='/admin-course-details' element={<AdminCourseDetails />} />
        <Route path='/class-history' element={<ClassHistory />} />
        <Route path='/add-modules' element={<CreateCourseModule />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
      </Routes>
    </div>
  )
}
export default App
