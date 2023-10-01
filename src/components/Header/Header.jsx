import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between mx-10 my-5">
            <img className="w-32 bg-green-500 px-3 py-2 rounded" src="/Firebase-2.png" alt="" />
            <nav className="flex text-lg font-semibold">
                <ul className="mx-10">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul className="mx-10">
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
                <ul className="mx-10">
                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;