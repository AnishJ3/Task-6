
import './footer.css'
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import instagram  from '../../assets/instagram.png';

const Footer = () =>
{
    return(
        <footer className='footer'>

            <div className='sc'>
                <ul>
                    <li className='social-link'><a href="#"><img src={twitter} /></a></li>
                    <li className='social-link'><a href="#"><img src={facebook} /></a></li>
                    <li className='social-link'><a href="#"><img src={instagram} /></a></li>
                    <li className='social-link'><a href="#"><img src={youtube} /></a></li>
                </ul>

            </div>

            <span>Copyright &#169; 2023 Anish Joshi. All rights reserved.</span>
        </footer>
    )
}

export default Footer;