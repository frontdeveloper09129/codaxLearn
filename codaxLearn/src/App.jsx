import './App.css'
import HomePage from "../pages/homepage"
import Login from '../pages/login'
import { Routes, Route } from "react-router-dom";
import Register from '../pages/rigester';
import DashBoard from '../pages/dashBoard';
import SoftwereEngineer from '../pages/softwereEngineer';
import SoftwereDeveloper from '../pages/softwereDeveloper';
import SoftwareEngineerQuiz from '../pages/softwareEngineer_quiz-page';
import SoftwareDeveloperQuiz from '../pages/softwareDeveloper_quiz';
import FullStackDeveloper from '../pages/fullstack_developer';
import FullStackDeveloperQuiz from '../pages/fullstack_developer_quiz';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dash_board' element={<DashBoard />} />
        <Route path='/category/software-engineer' element={<SoftwereEngineer />} />
        <Route path='/category/software-developer' element={<SoftwereDeveloper />} />
        <Route path={'/software-engineer-quiz-page'} element={<SoftwareEngineerQuiz />} />
        <Route path='/software-developer-quiz' element={<SoftwareDeveloperQuiz />} />
        <Route path="/category/full-stack-developer" element={<FullStackDeveloper />} />
        <Route path='/quiz/fullstack-developer-quiz' element={<FullStackDeveloperQuiz />} />
      </Routes>
    </>
  )
}

export default App
