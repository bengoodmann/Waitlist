import axios from "axios";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import VolunteerPage from "./pages/VolunteerPage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = false;


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
    </>
  );
};

export default App;
