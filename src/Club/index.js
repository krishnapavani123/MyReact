import {Link} from 'react-router-dom'
import Header from '../Header'

import Footer from '../Footer'
import './index.css'



const Club=()=>{
    return(
        <div>
            <Header />
            <div className='cbg'>
            
            </div>
            <div className='c-1'>
                


                <h1 className='para1'>CASE CLUB</h1>
                <h1 className='head1'>Welcome to the Club!<br/>
              </h1>
              <div className='para11'>
              <span>Our unique approach to a wine club puts you in full</span>
              <span>control of what goes in your cellar.</span>
              </div>
                
                </div>
                <div className='sub-m'>
                <h1 className='main-h'>“Why do we love our club? We love how creative it is: The customer has full control of the wines they want, when they want them, at the price they choose. How easy is that?”
                </h1>
                <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1522865252438-EBHCU7P2RTSZDGMUHRUU/ayres-vineyard-kathleen-co-owner-script.png?format=500w" className='img-m'/>
            </div>
            <div className='foot'>
            <p className='foot-p'>As a member of our case club, you will receive:</p>
               <ul className='lists'>
                <li className='item1'>A 15 percent discount with your initial case (12 bottle) purchase

                   </li>
                   <li className='item1'>A 20 percent discount on any additional purchases within 12 months of your initial case purchase</li>
           <li className='item1'>
           Complimentary tastings at our winery for you and your guests by appointment or during Open House weekends
           </li>
           <li className='item1'>First opportunity to purchase the limited Pinot Blanc and Rosé of Pinot Noir releases each year</li>
             <li className='item1'>First opportunity to purchase new release and limited release wines

                </li>
             </ul>
<p className='para1'>Take a look at <Link to='/wines' className='span'>our selections </Link>or mix and match bottles to create your own case.</p>

<div className='foot-b'><h1 className='foot-h'>Still Have Questions?</h1>
<Link to='/contact'><button className='btn'>Ask Away!</button></Link>

</div>


            </div>

            <Footer />
        </div>
    )

}
export default Club