import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            < Avatar />
                <div className="sidebar__headerRight">
                 
                 <IconButton>
                    <DonutLargeIcon />
                 </IconButton>
                 <IconButton>
                    <ChatIcon />
                 </IconButton>
                 <IconButton>
                    <MoreVertIcon/>
                 </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    < SearchIcon />
                    <input placeholder="search or start new chat" type="text" />
                </div>
            </div>
         </div>
    )
    
}

export default Sidebar
