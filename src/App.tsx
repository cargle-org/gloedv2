import { Route, Routes, useLocation } from 'react-router-dom';
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
import PageNotFound from './components/Pages/PageNotFound';
import AuthorsNote from './components/Student/Pages/AuthorsNote';
import AuthorsProfile from './components/Student/Pages/AuthorsProfile';
import CourseRequirements from './components/Student/Pages/CourseRequirements';
import TutorialView from './components/Pages/TutorialView';


function App() {
  // Check for exact root path
  const { pathname } = useLocation();
  const isLandingPage = pathname === '/';

  return (
    <div className='box-border'>
      {!isLandingPage && <InternalHeader />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/mydashboard' element={<StudentDashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/course-details' element={<CourseDetails />} />
        <Route path='/authors-note' element={<AuthorsNote />} />
        <Route path='/authors-profile' element={<AuthorsProfile />} />
        <Route path='/course-requirements' element={<CourseRequirements />} />
        <Route path='/admin-course-details' element={<AdminCourseDetails />} />
        <Route path='/class-history' element={<ClassHistory />} />
        <Route path='/add-modules' element={<CreateCourseModule />} />
        <Route path='/view-tutorial' element={<TutorialView />} />
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
