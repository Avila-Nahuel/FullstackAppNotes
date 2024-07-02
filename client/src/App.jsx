import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage"
import TasksFormPage from "./pages/TaskFormPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"

import ProtectedRoute from "./ProtectedRoute"
import { TaskProvider } from "./context/TasksContext"
import Navbar from "./components/Navbar"



function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
        <main className="container mx-auto px-10">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>

        <Route element={<ProtectedRoute/>}>
          <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
            <Route path="/add-task" element={<TasksFormPage></TasksFormPage>}></Route>
            <Route path="/tasks/:id" element={<TasksFormPage></TasksFormPage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          </Route>
        </Routes>
        </main>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App