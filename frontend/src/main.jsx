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
import ProtectedRoute from './ProtectedRoute.jsx'
import StudentSetting from './pages/students/StudentSetting.jsx'
import TeacherSetting from './pages/teachers/TeacherSetting.jsx'
import AdminSetting from './pages/admins/AdminSetting.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/LoginPage' component={LoginPage} />
      <Route path='/RegisterPage' component={RegisterPage} />

      <ProtectedRoute path='/StudentDashboard' component={StudentDashboard} role='student' />
      <ProtectedRoute path='/TeacherDashboard' component={TeacherDashboard} role='teacher' />
      <ProtectedRoute path='/AdminDashboard' component={AdminDashboard} role='admin' />

      <ProtectedRoute path='/StudentSetting' component={StudentSetting} role='student' />
      <ProtectedRoute path='/TeacherSetting' component={TeacherSetting} role='teacher' />
      <ProtectedRoute path='/AdminSetting' component={AdminSetting} role='admin' />
    </Router>
  </div>
)
