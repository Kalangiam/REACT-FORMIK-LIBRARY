import Login from './Login'
import './sb-admin-2.css'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import Dashboard from './Dashboard'
import BlogListing from './BlogListing'
import BlogCreate from './BlogCreate'
import BlogEdit from './BlogEdit'
import Portal from './Portal'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/portal" element={<Portal />}>
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<BlogListing />} />
            <Route path="create-blog" element={<BlogCreate />} />
            <Route path="edit-blog/:id" element={<BlogEdit />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
