import React from "react";
import "./Dashboard.css"
import "../../src/App.css"
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="dash-container">
            <Sidebar />
                <div className="dash-content flex">
                    <div className="dash-row1 flex">
                        <Outlet />
                    </div>
                </div>
        </div>
    );
};

export default Dashboard