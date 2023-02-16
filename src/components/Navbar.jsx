import React from "react";
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

function Navbar(){
    return (
        <nav className="navbar">
            <PublicOutlinedIcon style={{color:"white"}}/>
            <p>my travel journal</p>
        </nav>
    )
}

export default Navbar