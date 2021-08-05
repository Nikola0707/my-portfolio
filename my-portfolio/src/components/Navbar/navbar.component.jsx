import {Link} from 'react-scroll'

const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li className="navbar-li"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                <li className="navbar-li"><Link  to="about" spy={true} smooth={true}>About</Link></li>
                <li className="navbar-li"><Link  to="skills" spy={true} smooth={true}>Skills</Link></li>
                <li className="navbar-li"><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
                {/* <li className="navbar-li"><Link  to="education" spy={true} smooth={true}>Education</Link></li> */}
                <li className="navbar-li"><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;