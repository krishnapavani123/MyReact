import Header from '../Header'
import Footer from '../Footer'
import './index.css'
const Wines=()=>{
    return(
        <div>
<Header />
<div className='wbg'>

</div>
<div className='w-11'>
                


                <h1 className='para1'>WINES</h1>
                <h1 className='whead1'>Current Offerings
                   
              </h1>
              <div className='wpara11'>
                <span>We believe our wine guides us as much as we guide our wine. It’s arelationship that begins in the vineyard, from the first sign of bud break to</span>
                <span>the last cluster harvested. Our line of Pinot Noirs represents an increasingly </span>
                <span>narrowing snapshot of our vineyard’s special location. The Perspective Pinot  </span>
                <span>Noir is a symphony of estate fruit and neighboring farms; the Lewis Rogers  </span>
              <span>Lane Pinot Noir is produced from estate fruit only; the Pioneer Pinot Noir is</span>
               <span>produced from a single clone (clone 667); and One Pinot Noir is bottled from </span>
               <span>a single fermenter. We also produce a Pinot Blanc and Rosé of Pinot Noir </span>
               <span>seasonally, a Gamay Noir, and a Willamette Valley Pinot Noir</span>
               
              </div>
             
              </div>
              <div className='wcard'>

                    <ul className='wp'>

              <li>Due to extraordinary demand, we are offering current releases by phone only. We invite you to inquire about</li>
             <li>our current releases and we look forward to assisting you with your selection.</li>
</ul>
              </div>
              <div className='Wines'>

                <div className='wine-1'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1600271767585-12AWBZXYEYZ2JPIETCGH/ayres-vineyard-wines-small-rose-pinot-noir-b.jpg?format=750w" className='wimg'  alt="imagew"/>
                    <h1 className='w-h'>Rosé of Pinot Noir</h1>
                    <p className='w-p'>View Details</p>
                </div>
                <div className='wine-1'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1600206348347-VNBUJE4965SJXRK6OISC/ayres-vineyard-wines-small-perspective-2019.jpg?format=750w" className='wimg'  alt="imagew"/>
                    <h1 className='w-h'>Perspective Pinot Noir</h1>
                    <p className='w-p'>View Details</p>
                </div>
                <div className='wine-1'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1600206977198-U5BW2T554L7MCXQ2EU8H/ayres-vineyard-wines-small-lewis-rogers-2018.jpg?format=750w" className='wimg'  alt="imagew"/>
                    <h1 className='w-h'>Lewis Rogers Lane
                    Pinot Noir</h1>
                    <p className='w-p'>View Details</p>
                </div>
                <div className='wine-1'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1600271127817-3UI5OA8BWGDXKPHTUI5I/ayres-vineyard-wines-small-pioneer-2018-resized.jpg?format=750w" className='wimg'  alt="imagew"/>
                    <h1 className='w-h'>Pioneer Pinot Noir</h1>
                    <p className='w-p'>View Details</p>
                </div>
                <div className='wine-1'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1600207625255-FHNVOEMEY2CI4W49Y1XS/ayres-vineyard-wines-small-one-2018.jpg?format=750w" className='wimg'  alt="imagew"/>
                    <h1 className='w-h'>One Pinot Noir</h1>
                    <p className='w-p'>View Details</p>
                </div>
              </div>
<Footer/>
        </div>

    )
}
export default Wines
