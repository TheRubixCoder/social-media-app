import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="left">
                <Link to={"/"} style={{textDecoration:"none"}}>
                    <span>elitesden</span>
                </Link>
                <HomeOutlinedIcon />
                <NightsStayOutlinedIcon />
                <WidgetsOutlinedIcon />
                <div className="search">
                    <PersonSearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src="" alt="" />
                    <span>Akilan</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar