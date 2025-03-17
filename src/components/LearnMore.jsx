import React from 'react'
import './LearnMore.css'

// import image from asserts
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import user from '../assets/user.jpg'
const LearnMore = () => {
  return (
    <div className='container mt-5 py-5' data-aos="fade-up">
        <div className='Learn-flex'>
            <div>
                <h1 className='learn-h1'><b>Learn More About Our Work And <br />Our Cultural Activities</b></h1>
                <p className='learn-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br />amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br />duo justo magna dolore erat amet</p>
                <p className='learn-p'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est <br />diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit <br />at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et <br />dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                <div className='learn-flex'>
                    <button className='learn-btn'>Read More</button>
                    <div className='learn-flex-2'>
                        <img src={user} alt="" className='img3'/>
                        <div className='mm'>
                          <h6 className='learn-h6'>John Doe</h6>
                          <p className='learn-pp'>CEO & Founder</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='img-style'>
                  <img src={about1} alt="" className='img1'/>
                </div>
                <div className='img-flex'>
                    <div className='img-2-style'><img src={about2} alt="" className='img2'/></div>
                    <div className='img-2-style'><img src={about3} alt="" className='img2'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearnMore