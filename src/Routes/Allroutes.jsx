import { Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Comunity from "./Comunity";
import Footer from "./Footer";
import Health from "./Health";
import Home from "./Home";
import Membership from "./Membership";
import Passes from "./Passes";
import Programs from "./Programs";
import Signup from "./Signup";
import Store from "./Store";
import WorkOut from "./WorkOut";
import Multistep from "./Paymnet";
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hii" element={<Footer />} />
      <Route path="/workout" element={<WorkOut />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/helhty_living" element={<Health />} />
      <Route path="/comunity" element={<Comunity />} />
      <Route path="/about" element={<About />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/store" element={<Store />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/pases" element={<Passes />}></Route>
      <Route path="/payment" element={<Multistep />} />
    </Routes>
  );
};
export default AllRoute;
