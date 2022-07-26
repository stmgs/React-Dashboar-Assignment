import React from "react";
import "./Sidebar.css";


const Sidebar = () => {
    return(

        


        <div className="Sidebar">
            <div className="Sidebar-Inner">
                <div className="Sidebar-Menu">
                   <ul className="Sidebar-List">
                       <a href="home" className="Sidebar-List-Item"> Home</a>
                       <a href="profile" className="Sidebar-List-Item">Profile</a>
                       <a href="weather" className="Sidebar-List-Item">Weather</a>
                       <a href="crypto" className="Sidebar-List-Item">Crypto Value</a>
                        <a href="news" className="Sidebar-List-Item">Top Headlines</a>

                   </ul>
                </div>
            </div>
        </div>

        
    );
}

export default Sidebar;