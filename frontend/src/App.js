import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/UpdateNote/UpdateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/createnote" Component={CreateNote} />
        <Route path="/note/:id" Component={UpdateNote} />
        <Route path="/mynotes" Component={MyNotes} />
        <Route path="/profile" Component={ProfileScreen} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
