
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
const Contact=()=>{
    return(
        <div>
       <Header />
       <div className='Cbg'>


       </div>
       <div className='ccontact'>

        <div className='top'>

            <h1>Ayres Vineyard
            & Winery</h1>
            <p>17971 NE Lewis Rogers</p>
            <p>Lane,</p>
            <p>Newberg, OR 97132</p>
            <div>
                <h1>
                PHONE
                </h1>
                <p> 503.710.1128</p>
            </div>
            <div>
                <h1>SOCIAL</h1>
                <p>Connect with us on social media. </p>
                <div>
       <FaFacebookF className="icons"/>
       <FaXTwitter className="icons"/>
       < FaInstagram className="icons"/>
       </div>
            </div>
        </div>
        <div className='c-11'>
                


                <h1 className='para1'>CONTACT US</h1>
                <h1 className='chead1'>Let's Talk Pinot Noir<br/>
              </h1>
              <div className='cpara11'>
              <span>Before you reach out, please note that we are sold out </span>
                <span>of our current releases, but we would love for you to try our library </span>
                <span>selections. Our spring and summer tasting appointments are</span>
                <span> available on a limited basis and will feature our collection of library wines.</span>
              <span>control of what goes in your cellar.</span>

              </div>
              <form className='form'>

<p className='f-p'>Name(required)</p>
       <div className='textt'>

          <div>
          <label className='f-l' htmlFor='id'>First Name</label>
               <br/>
                   <input type='text' id="id" className='Input'/>
          </div>
          
          <div>
          <label  className='f-l'>Last Name</label>
               <br/>
                   <input type="text"/>
          </div>

</div>
<label>Email Address(required)</label>
<br/>
<input type="email" className='e-i'/>
<br/>
<label>Message(required)</label>
<br/>
<input type='text' className='msg'/>
<br/>
<button type="submit" className='btn'>SUBMIT</button>
</form>
                </div>
                
        <div>


        </div>
       </div>
       <Footer />

        </div>
    )
}
export default Contact