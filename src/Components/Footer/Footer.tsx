import './Footer.scss'
import { FooterData } from './FooterData'

const Footer = () => {
    return (
        <footer>
            <div className="logo-links">
                <img src="/src/assets/logo.svg" alt="Website Logo" className='logo'/>
                <ul>
                    {FooterData.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='excerpt'>
                <p>
                    Audiophile is an all in one stop 
                    to fulfill your audio needs. 
                    We're a small team of music 
                    lovers and sound specialists who 
                    are devoted to helping you get 
                    the most out of personal audio. 
                    Come and visit our demo facility - 
                    we’re open 7 days a week.
                </p>
            </div>
            <div className='copyright-socials'>
                <p>Copyright 2021. All Rights Reserved</p>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/src/assets/FooterAssets/icon-facebook.svg" alt="Link to Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/src/assets/FooterAssets/icon-twitter.svg" alt="Link to Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/src/assets/FooterAssets/icon-instagram.svg" alt="Link to Instagram"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;