import './header.scss';
import { ReactComponent as IconGithub } from "../../../assets/images/icons/icon_github.svg";

function Header() {
    return (
        <header className="header">
            <a href="/" className="btn-home">
                <span className="" aria-hidden="true">SHIN</span>
                <span className="sr-only">홈으로 이동</span>
            </a>
            <a href="#works" className="btn-quick">Works</a>
            <a href="#contact" className="btn-quick">Contact</a>
            <a href="https://blog.example.com" target="_blank" rel="noopener noreferrer" className="btn-quick btn-git">
                <span className="sr-only">깃허브로 이동</span>
                <IconGithub />
            </a>
        </header>
    );
}

export default Header;