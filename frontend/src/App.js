import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <Router>
      <Header setSearch={setSearch} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/note/:id" element={<SingleNote />} />
        <Route path="/mynotes" element={<MyNotes search={search} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
