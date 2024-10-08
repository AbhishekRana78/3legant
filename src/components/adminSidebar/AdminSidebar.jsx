/**
 * AdminSidebar component
 *
 * A React component that renders the admin sidebar with navigation links and a logout button.
 *
 * @returns {React.ReactElement} The admin sidebar component
 */

import "./AdminSidebar.scss";

import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment } from "react";

import createImg from "../../assets/admin/a1.svg";
import leftImg from "../../assets/admin/left.svg";
import { logout } from "../../context/slices/authSlices";
import logoutImg from "../../assets/admin/logout.svg";
import manageImg from "../../assets/admin/a2.svg";
import { useDispatch } from "react-redux";

const AdminSidebar = () => {
  /**
   * Navigate function from react-router-dom
   */
  const navigate = useNavigate();
  /**
   * Dispatch function from react-redux
   */
  const dispatch = useDispatch();
  /**
   * Handle logout function
   *
   * Dispatches the logout action and navigates to the root route
   */
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Fragment>
      <div className="admin__sidebar">
        <h2 className="admin__sidebar__logo">
          <NavLink to={"/login"}><img src={leftImg} alt="left.svg" />
          Admin Dashboard
          </NavLink>
        </h2>
        <ul className="admin__sidebar__list">
          <li className="admin__sidebar__list__item">
            <NavLink to={"create-product"}>
              <img src={createImg} alt="create.scv" />
              <span>Create product</span>
            </NavLink>
          </li>
          <li className="admin__sidebar__list__item">
            <NavLink to={"manage-product"}>
              <img src={manageImg} alt="manage.svg" />
              <span>Manage product</span>
            </NavLink>
          </li>
          <li className="admin__sidebar__list__item">
            <NavLink to={"create-category"}>
              <img src={createImg} alt="create.svg" />
              <span>Create Category</span>
            </NavLink>
          </li>
          <li className="admin__sidebar__list__item">
            <NavLink to={"manage-category"}>
              <img src={manageImg} alt="manage.svg" />
              <span>Manage Category</span>
            </NavLink>
          </li>
        </ul>
        <div onClick={handleLogOut} className="admin__sidebar__logout">
          <img src={logoutImg} alt="logout.svg" />
          <span>Log out</span>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
