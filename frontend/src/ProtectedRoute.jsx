import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, role, ...rest }) => (
    <Route {...rest} render={(props) => {
        const userRole = sessionStorage.getItem('role');
        if (userRole === role) {
            return <Component {...props} />;
        } else {
            switch (userRole) {
                case 'student':
                    return <Redirect to='/StudentDashboard' />;
                case 'teacher':
                    return <Redirect to='/TeacherDashboard' />;
                case 'admin':
                    return <Redirect to='/AdminDashboard' />;
                default:
                    return <Redirect to='/LoginPage' />;
            }
        }
    }} />
);

export default ProtectedRoute;
