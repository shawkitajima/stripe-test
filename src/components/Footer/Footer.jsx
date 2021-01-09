import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='terms'>Terms of Service</Link>
            <Link to='privacy'>Privacy Policy</Link>
        </div>
    )
}

export default Footer;