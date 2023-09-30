import React from "react";
import "./Navigation.css";
import "../Header.css";
import "../../../App.css";
import { Link } from "react-scroll";

interface Navigator {
    className: string;
    content: string;
}

const navigatorData: Navigator[] = [
    {className: 'home', content: 'Home'},
    {className: 'about', content: 'About'},
    {className: 'content', content: 'Skills'},
    {className: 'resume', content: 'Resume'},
    {className: 'portfolio', content: 'Portfolio'},
]

const Navigation:React.FC = () => { 

    return (
        <nav className="navigate">
            <ul className="find-content column">
                {navigatorData.map((data) => (
                    <Link key="{data.content}" to="{data.content}" className="{data.className}">{ data.content }</Link>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation;