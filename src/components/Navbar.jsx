"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  console.log(user)
  return (
    <div className="navbar flex items-center justify-between top-0 left-0 z-10 p-4">
      <div>
        <ul className="flex gap-5">
          <li>
            <a href="/reports" className="hover:text-blue-500">
              Reports
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-blue-500 hover:bg-primary">
              Create a report
            </a>
          </li>
          <li>
            {user ? (
              <a href="/api/auth/logout" className="hover:text-blue-500 hover:bg-primary">
                Logout
              </a>
            ) : (
              <a href="/api/auth/login" className="hover:text-blue-500 hover:bg-primary">
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
      <div>
        <p>{user ? user.email: ""}</p>
      </div>
    </div>
  );
};

export default Navbar;
