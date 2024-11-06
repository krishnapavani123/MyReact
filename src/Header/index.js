import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import './index.css'
const Header=()=>{
    return(
        <div>
        <div className='hero'>

        <div className='image'>
<Link to='/'>
            <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1518542521276-7CUFBUJM4W9PBZJJ71RX/ayres-vineyard-logo.png?format=1500w" className="img"/>
            </Link>
        </div>
    
          
        
        <div className='items'>
        <Link to='/about' className='item'><h1>About</h1></Link> 
            <Link to='/wines' className='item'><h1>Wines</h1></Link>
            <Link to='/visit' className='item'><h1>Visit</h1></Link>
            <Link to='/club' className='item'><h1 >Club</h1></Link>
            <Link to='/trade' className='item'><h1 >Trade</h1></Link>
        </div>
        <div className='cc'>
            <Link to='/contact' className='contact'><h1>Contact</h1></Link>
        </div>
        </div>
        <div className="pop">
        <div className='image1'>
<Link to='/'>
            <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1518542521276-7CUFBUJM4W9PBZJJ71RX/ayres-vineyard-logo.png?format=1500w" className="img"/>
            </Link>
        </div>
        <Popup 
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30"/>
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link className="item" to="/about" onClick={() => close()}>
                
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="item" to="/wines" onClick={() => close()}>
                 
                  <p className="nav-link-content">Wines</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="item" to="/visit" onClick={() => close()}>
                 
                  <p className="nav-link-content">visit</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="item" to="/club" onClick={() => close()}>
                 
                  <p className="nav-link-content">club</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="item" to="/trade" onClick={() => close()}>
                 
                  <p className="nav-link-content">trade</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="item" to="/contact" onClick={() => close()}>
                 
                  <p className="nav-link-content">contact</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
      </div>
        </div>
    )
}
export default Header;