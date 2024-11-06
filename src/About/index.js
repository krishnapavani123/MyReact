import Header from '../Header'
import Footer from '../Footer'
import './index.css'
const About=()=>{
    return(

        <div>

            <Header />
            <div className='abg'>

            </div>
            <div className='a-1'>
                


                <h1 className='para1'>RIBBON BRIDGE</h1>
                <div className='Ahead1'>
                    <span>Oregon's Smallest</span>
                <br/>
                    <span>AVA</span>
              </div>
              <div className='Apara11'>
              <span>The ancient, well-weathered, and finely structured soils of the Ribbon Ridge </span>
              <span>AVA produce wines with elegance, balance, and notes of earth and dark</span>
              <span>fruit. The region’s microclimates provide consistently mild temperatures </span>
              <span>fruit. The region’s microclimates provide consistently mild temperatures,</span>
              <span>creating an ideal climate for Pinot Noir</span>
              </div>
                
                </div>
                <div className='sub-m'>
                <h1 className='main-h'>“Ribbon Ridge chose us. I knew this was the right place within 45 seconds of arriving on the property. We were not only looking for a great place to grow grapes – which it is – but also for a great place to call home. Three generations call Ayres vineyard home. This corner of the earth has treated us right, so we do everything we can to treat it with the utmost respect.”
                </h1>
                <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1522864067155-JTJW6AK3C7TQB1LZZ3OT/ayres-vineyard-brad-winemaker-script-750.png?format=500w" className='img-m'/>
            </div>
       
            <div className='a-card'>
           <span >Since 2006, Ayres has been a proud member of Ribbon Ridge, the newest</span><span>and smallest Willamette Valley sub-AVA.
            </span> 
            </div>
            <div className='a-f'>

                <div className='a-11'>
                <h1>AYRES WINERY</h1>
                </div>
                <div className='a-2'>
                <h1>WINEMAKER</h1>
                </div>
                <div className='a-3'>
                <h1>VINEYARD</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About;