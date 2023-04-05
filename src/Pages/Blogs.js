import { useState, useEffect } from "react";
import axios from "axios";
import BlogCards from "../Components/BlogCards";
import Pagination from "../Components/Pagination";

export default function Blogs() {
  return (
    <div className="container mt-5">
      <h1 className="blogHeadTitle">Blogs</h1>
      <BlogCards />
    </div>
  );
}
