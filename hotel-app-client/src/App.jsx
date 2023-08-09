import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Booking from "./pages/booking";
import RoomBooking from "./components/roombookingscreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookroom/:id" element={<RoomBooking />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
