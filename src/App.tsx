import { Route, Routes } from 'react-router-dom';
import './App.css'
import AdminDashboard from './components/Admin/Pages/AdminDashboard';
import StudentDashboard from './components/Student/Pages/StudentDashboard';
import InternalHeader from './components/Layout/InternalHeader';


function App() {

  return (
    <div className='box-border'>
      <InternalHeader />
      <Routes>
        <Route path='/' element={<StudentDashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}
export default App
