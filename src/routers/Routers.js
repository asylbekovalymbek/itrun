
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Register from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import Profile from "../pages/ProfilePage"
import AuthGuard from "../AuthGuard/AuthGuard";
import AddPost from "../pages/AddPostForm";
const Routers = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bikes" element={<CarListing />} />
      <Route path="/bikes/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path = "/registerpage" element={<Register />} />
      <Route path = "/loginpage" element={<Login />} />
      <Route path = "/addPost" element={<AddPost />} />
      
 
      <Route path = "/profilepage" 
      element={
      <AuthGuard> 
          <Profile /> {" "}
      </AuthGuard>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;