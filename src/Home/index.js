import Footer from '../Footer'
import './index.css'

import Header from '../Header'
const Home=()=>{
    return(
        <div>
            <Header/>
            <div className='bg'>
                <div className='hlo'>

                <h1 className='heading'>Welcome to Ayres</h1>
                </div>
          
                
            </div>
            <div className='card-1'>
                <div className='card-11'>
                    <h1 className='head-1'>Our Wine</h1>
                    <p className='para-1'>Focused & Expressive</p>
                    <p className='para-11'>Our wines give a voice to the soil and our vineyard’s special location on Ribbon Ridge. We offer a line of Pinot Noirs, a Gamay Noir, and, seasonally, a Pinot Blanc and Rosé of Pinot Noir.</p>
                <p className='sub-1'>VIEW CURRENT RELEASES</p>
                </div>
                <div className='wineimg'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1518799351961-TRPZ2DUG7U64TUO104EO/ayres-vineyard-home-wine-collection-callout.jpg?format=1000w" className='img1'  alt="imagehh"/>
                </div>
            </div>
            <div className='card-2'>
            <div className='wineimg'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1518799762142-JJK6Q13O38BWMH1UXM4S/ayres-vineyard-home-visit-callout-b.jpg?format=1000w" className='img1'  alt="imagehh"/>
                </div>
                <div className='card-12'>
                    <h1 className='head-1'>Our Winery</h1>
                    <p className='para-1'>Visit Us</p>
                    <p className='para-11'>We’d love to fill your glass! We invite you to join us in Newberg for a tasting of our current releases with our winemaker, Brad.</p>
                <p className='sub-1'>REQUEST APPOINTMENT</p>
                </div>
              
            </div>
            <div className='card-1'>
                <div className='card-11'>
                    <h1 className='head-1'>Our Winemaker</h1>
                    <p className='para-1'>Brad McLeroy</p>
                    <p className='para-11'>Brad honed his winemaking skills at the famed Domaine Drouhin Oregon under the direction of Véronique Drouhin. Bringing a wealth of knowledge from his experience working as a wine retailer, distributor, and now producer of wines, Brad creates expressive wines with soul. Open a bottle and it shows.</p>
                <p className='sub-1'>LEARN MORE</p>
                </div>
                <div className='wineimg'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1554415630777-CFAM5BSK895LLYU58A4W/ayres-vineyard-home-callout-winemaker-updated.jpg?format=1000w" className='img1'  alt="imagehh"/>
                </div>
            </div>
            <div className='card-2'>
            <div className='wineimg'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1519238206498-C344YB04NUSTW0TR5UBX/ayres-vineyard-home-about-vineyard-callout-d.jpg?format=1000w" className='img1'  alt="imagehh"/>
                </div>
                <div className='card-12'>
                    <h1 className='head-1'>Our Vineyard</h1>
                    <p className='para-1'>36,000 Vines</p>
                    <p className='para-11'>We grow 18 acres of Pinot Noir in predominantly Willakenzie soils on our southeastern-facing slope of Ribbon Ridge. We are committed to sustainable growing practices, prioritizing our health, our earth’s health, and the health of the plant.</p>
                <p className='sub-1'>VIEW PHOTO TOUR</p>
                </div>
              
            </div>
            <div className='sub-m'>
                <h1 className='main-h'>“Visiting vineyards and wineries around the world allowed me to experience the lifestyle of working with a living thing. I’ve always been entrepreneurial by nature – it’s in my DNA, thanks to my very hardworking father and grandfathers – somehow I pulled the long straw and connected all the dots to make a life on a vineyard.”
                </h1>
                <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1519247122052-7B4112599ZKY95VOT6M4/ayres-vineyard-brad-winemaker-script-750.png?format=500w" className='img-m'  alt="imageb"/>
            </div>


           

           <Footer />
        </div>
    )
}
export default Home
