import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default Sidebar;

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
      <div>
        <a href="d-flex align-items-center" className="text-white">
          <i className="bi bi-film fs-5 me-2"></i>
          <span className="fs-4">Cinema</span>
        </a>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-speedometer me-2 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="user" className="nav-link text-white">
              <i className="bi bi-people me-2 fs-5"></i>
              <span className="fs-5">User</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="reservation" className="nav-link text-white">
              <i className="bi bi-bag-check-fill me-2 fs-5"></i>
              <span className="fs-5">Reservation</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="theatre" className="nav-link text-white">
              <i className="bi bi-camera-reels-fill me-2 fs-5"></i>
              <span className="fs-5">Theatre</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="movie" className="nav-link text-white">
              <i className="bi bi-film me-2 fs-5"></i>
              <span className="fs-5">Movie</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-gear-fill me-2 fs-5"></i>
              <span className="fs-5">Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary " />
        <i className="bi bi-person fs-5"></i>
        <span className="fs-4">Admin</span>
      </div>
    </div>
  );
}
