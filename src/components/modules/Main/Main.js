import './main.scss';
import Star from "../../atoms/icon/Star";
import helloVideo from "../../../assets/images/hello.mp4";
import { ReactComponent as IconHtml } from "../../../assets/images/icons/icon_html.svg";
import { ReactComponent as IconCSS } from "../../../assets/images/icons/icon_css.svg";
import { ReactComponent as IconSASS } from "../../../assets/images/icons/icon_sass.svg";
import { ReactComponent as IconTailwind } from "../../../assets/images/icons/icon_tailwind.svg";
import { ReactComponent as IconBootstrap } from "../../../assets/images/icons/icon_bootstrap.svg";
import { ReactComponent as IconJS } from "../../../assets/images/icons/icon_js.svg";
import { ReactComponent as IconJquery } from "../../../assets/images/icons/icon_jquery.svg";
import { ReactComponent as IconReact } from "../../../assets/images/icons/icon_react.svg";
import { ReactComponent as IconNPM } from "../../../assets/images/icons/icon_npm.svg";
import { ReactComponent as IconGit } from "../../../assets/images/icons/icon_git.svg";

function Main() {
    return (
        <div className="main-container">
            <h1 className="sr-only">안녕하세요, 퍼블리셔 이신입니다.</h1>
            <div className="main-title" aria-hidden="true">
                Hello.
            </div>
            <video 
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                aria-hidden="true"
            >
                <source src={helloVideo} type="video/mp4" />
            </video>
            <div className="main-title" aria-hidden="true">
                I am Lee-Shin,
                <i className="icon circle" />
                <Star className="rotate" />
                <i className="icon circle" />
                a Web Publisher.
            </div>
            <div className="main-desc">
                <p>
                    함께 만드는 과정에서 더 나은 결과가 나온다고 믿는 퍼블리셔 이신입니다.<br/>
                    협업과 소통을 중요하게 생각하며, 팀 안에서 자연스럽게 녹아드는 것을 지향합니다.
                </p>
                <div className="main-skills">
                    <h2>사용 기술스택</h2>
                    <ul>
                        <li>
                            <span className="sr-only">HTML5</span>
                            <IconHtml />
                        </li>
                        <li>
                            <span className="sr-only">CSS3</span>
                            <IconCSS />
                        </li>
                        <li>
                            <span className="sr-only">SASS</span>
                            <IconSASS />
                        </li>
                        <li>
                            <span className="sr-only">Bootstrap</span>
                            <IconBootstrap />
                        </li>
                        <li>
                            <span className="sr-only">Tailwind CSS</span>
                            <IconTailwind />
                        </li>
                        <li>
                            <span className="sr-only">JavaScript</span>
                            <IconJS />
                        </li>
                        <li>
                            <span className="sr-only">jQuery</span>
                            <IconJquery />
                        </li>
                        <li>
                            <span className="sr-only">React</span>
                            <IconReact />
                        </li>
                        <li>
                            <span className="sr-only">NPM</span>
                            <IconNPM />
                        </li>
                        <li>
                            <span className="sr-only">Git</span>
                            <IconGit />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;
