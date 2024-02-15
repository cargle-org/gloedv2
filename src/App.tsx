import { Route, Routes } from 'react-router-dom';
import './App.css'
import StudentDashboard from './components/Student/Pages/StudentDashboard';


function App() {

  return (
    <div className='box-border'>
      <Routes>
        <Route path='/' element={<StudentDashboard />} />
      </Routes>
    </div>
  )
}
export default App
