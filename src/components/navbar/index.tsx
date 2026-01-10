import './styles.css'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/whitepaper'>Whitepaper</Link></li>
        <li><Link to='/developer'>Developers</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/swag'>Swag</Link></li>
      </ul>
    </div>
  );
};
