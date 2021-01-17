import './styles.css';
import { ReactComponent as LinkedinIcon } from './Icons/linkedin.svg';
import { ReactComponent as YoutubeIcon } from './Icons/youtube.svg';
import { ReactComponent as InstagramIcon } from './Icons/instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Pede ai !
            <div className="footer-icons">
                <a href="#" target="_new"><YoutubeIcon /></a>
                <a href="#" target="_new"><LinkedinIcon /></a>
                <a href="#" target="_new"><InstagramIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;
