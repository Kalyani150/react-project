import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import Submit from './pages/Submit';
import Blogs from './pages/Blogs';
import BlogPostDetails from './pages/BlogPostDetails';
import TrashManager from './pages/TrashManager';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="submit" element={<Submit />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:slug" element={<BlogPostDetails />} />
        <Route path="trash" element={<TrashManager />} />
      </Routes>
    </Router>
  );
}