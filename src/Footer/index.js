
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import './index.css'

const Footer=()=>{
return(
    <div className='footer'>
<div>
                <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1518806146541-I856ERJ1XO0YXE0H1SNQ/ayres-vineyard-home-illustration-trees.png?format=1500w" className='img-mm'  alt="imagef"/>
            </div>
            <div className="ff">
    <div className='botom'>
        <h1 className='b-h'>LOCATION</h1>
        <p className='b-p'>17971 NE Lewis Rogers Lane
          <br/>
      Newberg, OR 97132</p>
    </div>
    <div className='botom'>
        <h1 className='b-h'>CONTACT</h1>
        <p className='b-p'>503.710.1128
   <br/>
   Contact Form
       </p>
    </div>
    <div className='botom'>
        <h1 className='b-h'>CHECK OUT</h1>
        <p className='b-p'>Case Club
<br/>
Ayres News
 </p>
    </div>
    
    <div className='botom'>
        <h1 className='b-h'>FOLLOW</h1>
       <div>
       <FaFacebookF className="icons"/>
       <FaXTwitter className="icons"/>
       < FaInstagram className="icons"/>
       </div>
    </div>
</div>
</div>
)
}
export default Footer
