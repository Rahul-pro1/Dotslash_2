
import Layout from "./pages/Layout.jsx"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Chat from "./pages/Chat.jsx";
import Quiz from "./pages/Quiz.jsx"
import Blogs from "./pages/Blogs.jsx";
import Yoga from "./pages/blogs/Yoga.jsx";
import Exercise from "./pages/blogs/Exercise.jsx";
import Social from "./pages/blogs/Social.jsx";
import Meditation from "./pages/blogs/Meditation.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Layout />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="chat" element={<Chat />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="yoga" element={<Yoga />} />
            <Route path="exercise" element={<Exercise />} />
            <Route path="social" element={<Social />} />
            <Route path="meditation" element={<Meditation />} />






          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
