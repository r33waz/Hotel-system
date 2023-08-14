import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { ToastContainer } from "react-toastify";
import Booking from "./pages/booking";
import RoomBooking from "./components/roombookingscreen";
import Prolilepage from "./pages/profile";
import Adminpannel from "./pages/adminpanne";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/bookroom/:id/:checkindate/:checkoutdate"
          element={<RoomBooking />}
        />
        <Route path="/profile" element={<Prolilepage />} />
        <Route path="/admin" element={<Adminpannel />} />
      </Routes>
    </>
  );
}

export default App;
