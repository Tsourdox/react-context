import { CSSProperties } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header style={rootStyle}>
            <Link to="/" style={linkStyle}>
                <h1>Home</h1>
            </Link>
            <Link to="/profile" style={linkStyle}>
                Profile
            </Link>
        </header>
    );
};

const rootStyle: CSSProperties = {
    // width: '100%',
    // boxSizing: 'border-box',
    height: '5rem',
    background: '#101010',
    
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#ECECEC',
}

export default Header;