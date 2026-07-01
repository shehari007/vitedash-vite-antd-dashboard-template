import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import Home from './pages/home/Home';
import { ProtectedRoute } from './ProtectedRoute';
import Blank from './pages/blank/Blank';
import Users from './pages/users/Users';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import Forms from './pages/forms/Forms';
import Tables from './pages/tables/Tables';
import Analytics from './pages/analytics/Analytics';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/home" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="home" element={<Home />} />
        <Route path="blank" element={<Blank />} />
        <Route path="tables" element={<Tables />} />
        <Route path="forms" element={<Forms />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
