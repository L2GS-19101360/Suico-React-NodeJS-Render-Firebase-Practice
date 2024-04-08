import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ClockComponent from '../src/components/ClockComponent.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import StudentDashboard from './pages/students/StudentDashboard.jsx'
import TeacherDashboard from './pages/teachers/TeacherDashboard.jsx'
import AdminDashboard from './pages/admins/AdminDashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/LoginPage' component={LoginPage} />
      <Route path='/RegisterPage' component={RegisterPage} />

      <Route path='/StudentDashboard' component={StudentDashboard} />
      <Route path='/TeacherDashboard' component={TeacherDashboard} />
      <Route path='/AdminDashboard' component={AdminDashboard} />
    </Router>
  </div>
)
