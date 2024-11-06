
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
const Visit=()=>{
    return(
        <div className='Visit'>
<Header />
<div className='vbg'>

</div>
<div className='v-11'>
                


                <h1 className='para1'>VISIT US</h1>
                <h1 className='vhead1'>Let Us Fill Your Glass!
                   
              </h1>
              <div className='vpara11'>
                <p>We invite you to join us in the cellar at Ayres for an intimate tasting with Brad McLeroy, our winemaker. </p>
              <span>For indoor tastings, we are open by appointment only, and tastings are</span>
                <span>scheduled between 10:00 a.m. and 3:00 p.m. We will be accepting limited  </span>
                <span>appointments from May until the onset of Harvest. Please note that if you </span>
                <span>are a smaller tasting party, you may be paired with another group to </span>
              <span>accommodate requests</span>
               <p>All members in the tasting party must choose the same tasting menu.</p>
               <p>At this time we are not allowing children on site to keep numbers low and accommodate as many groups as possible. We are not allowing off-site food in order to keep the focus on the wine tasting. Dogs are limited to service animals only.</p>
               <p>We do not serve food or offer picnic facilities, but we would be happy to recommend some great food options nearby!</p>
               
              </div>
             
              </div>
              <div className='sub-v'>
                <h1 className='main-h'>“Tasting at Ayres is like coming home. Literally. Everyone who tastes here gets a sneak peek into our daily life. You see our vines, our garden, our son likely practicing baseball on his own field of dreams. Once you enter our underground winery, Brad greets you with a smile, pours you a taste, and shares a story or two. Year after year, guests are surprised by what’s happening on the family farm. Many guests take the time to tell us it was the highlight of their trip.”
                </h1>
                <img src="https://images.squarespace-cdn.com/content/v1/5a8207ded0e628cdcc5112d7/1522864905223-TFJP48B3QRQZM216X5IV/ayres-vineyard-kathleen-co-owner-script.png?format=500w" className='img-m'/>
            </div>
            <div >

                
                <form className='vform'>
                <h1 className='vhead1'>Book A Tasting</h1>
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
<input type="email" className='e-i'/>
<br/>
<label>Number of Guests(required)</label>
<input type='text' className='e-i'/>
<br/>
<label>Preferred Date & Time</label>
<input type='text' className='e-i'/>
<button type="submit" className='btn'>SUBMIT</button>
</form>
            </div>
        <div>
        <Footer />
        </div>
        </div>
        
    )
}
export default Visit