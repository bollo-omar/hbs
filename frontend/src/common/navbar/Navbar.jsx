import {Link} from "react-router-dom";
import {useState} from "react";

export const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <header className="navbar d-flex align-items-center justify-content-between">
            <div className="logo">
                hbs
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/" onClick={() => {
                        setShow(show => !show)
                    }}>
                        Product and Services&nbsp;<em className="fa-solid fa-angle-down"></em>
                    </Link>
                    {show && <div className="dropdown">
                        <ul>
                            <li>
                                <Link to="/">guest house</Link>
                            </li>
                            <li>
                                <Link to="/">Amphitheatre/Conference</Link>
                            </li>
                            <li>
                                <Link to="/">Outdoor Space for Events</Link>
                            </li>
                            <li>
                                <Link to="/">Restaurant</Link>
                            </li>
                            <li>
                                <Link to="/">Tourism</Link>
                            </li>
                        </ul>
                    </div>
                    }
                </li>
                <li>
                    <Link to="/">Request Quote</Link>
                </li>
                <li>
                    <Link to="/">
                        <em
                            className="fa-solid fa-user bg-dark d-flex align-items-center justify-content-center"
                            style={{width: "36px", height: "36px", borderRadius: "50%"}}
                        ></em>
                        <span>&nbsp;Admin</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}