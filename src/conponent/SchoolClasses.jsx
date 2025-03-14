import React from 'react'
import './SchoolClasses.css'

// import classes from asserts
import classes1 from '../assets/classes-1.jpg'
import classes2 from '../assets/classes-2.jpg'
import classes3 from '../assets/classes-3.jpg'
import classes4 from '../assets/classes-4.jpg'
import classes5 from '../assets/classes-5.jpg'
import classes6 from '../assets/classes-6.jpg'
import user from '../assets/user.jpg'
const SchoolClasses = () => {
  return (
    <div className="container mt-5 py-5 text-center">
        <h1 className='school-h4'><b>School Classes</b></h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        <div className="classes-flex">
            <div>
                <div className='school-style'><img src={classes1} alt="" className='img5'/></div>
                <div className='school-text'>
                    <h4 className='school-h4'><b>Art & Drawing</b></h4>
                    <div  className='middle-flex'>
                        <div className='d-flex gap-3'>
                            <img src={user} alt="" className='img3'/>
                            <div className='john'>
                              <h6>Jhon Doe</h6>
                              <p>Teacher</p>
                            </div>
                        </div>
                        <div className='b-btn'>
                           <b> $99</b>
                        </div>
                    </div>
                    <div id='middle-flex'>
                        <div>
                            <div className='red'></div>
                            <p className='age'><b>Age</b> :</p>
                            <span>3-5 Years</span>
                        </div>
                        <div>
                            <div className='green'></div>
                            <p className='time'><b>Time</b></p>
                            <span>9-10AM</span>
                        </div>
                        <div>
                        <div className='yellow'></div>
                            <p className='capacity'><b>Capacity</b></p>
                            <span>30Kids</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div  className='school-style'><img src={classes2} alt="" className='img5'/></div>
                <div className='school-text'>
                    <h4 className='school-h4'><b>Color Management</b></h4>
                    <div className='middle-flex'>
                        <div className='d-flex gap-3'>
                            <img src={user} alt="" className='img3'/>
                            <div className='john'>
                              <h6>Jhon Doe</h6>
                              <p>Teacher</p>
                            </div>
                        </div>
                        <div className='b-btn'>
                           <b> $99</b>
                        </div>
                    </div>
                    <div id='middle-flex'>
                        <div>
                            <div className='red'></div>
                            <p className='age'><b>Age</b> :</p>
                            <span>3-5 Years</span>
                        </div>
                        <div>
                            <div className='green'></div>
                            <p className='time'><b>Time</b></p>
                            <span>9-10AM</span>
                        </div>
                        <div>
                        <div className='yellow'></div>
                            <p className='capacity'><b>Capacity</b></p>
                            <span>30Kids</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div  className='school-style'><img src={classes3} alt="" className='img5'/></div>
                <div className='school-text'>
                    <h4 className='school-h4'><b>Athletic & Dance</b></h4>
                    <div className='middle-flex'>
                        <div className='d-flex gap-3'>
                            <img src={user} alt="" className='img3'/>
                            <div className='john'>
                              <h6>Jhon Doe</h6>
                              <p>Teacher</p>
                            </div>
                        </div>
                        <div className='b-btn'>
                           <b> $99</b>
                        </div>
                    </div>
                    <div id='middle-flex'>
                        <div>
                            <div className='red'></div>
                            <p className='age'><b>Age</b> :</p>
                            <span>3-5 Years</span>
                        </div>
                        <div>
                            <div className='green'></div>
                            <p className='time'><b>Time</b></p>
                            <span>9-10AM</span>
                        </div>
                        <div>
                        <div className='yellow'></div>
                            <p className='capacity'><b>Capacity</b></p>
                            <span>30Kids</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="classes-flex">
            <div>
                <div className='school-style'><img src={classes4} alt="" className='img5'/></div>
                <div className='school-text'>
                    <h4 className='school-h4'><b>Language & Speaking</b></h4>
                    <div  className='middle-flex'>
                        <div className='d-flex gap-3'>
                            <img src={user} alt="" className='img3'/>
                            <div className='john'>
                              <h6>Jhon Doe</h6>
                              <p>Teacher</p>
                            </div>
                        </div>
                        <div className='b-btn'>
                           <b> $99</b>
                        </div>
                    </div>
                    <div id='middle-flex'>
                        <div>
                            <div className='red'></div>
                            <p className='age'><b>Age</b> :</p>
                            <span>3-5 Years</span>
                        </div>
                        <div>
                            <div className='green'></div>
                            <p className='time'><b>Time</b></p>
                            <span>9-10AM</span>
                        </div>
                        <div>
                        <div className='yellow'></div>
                            <p className='capacity'><b>Capacity</b></p>
                            <span>30Kids</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div  className='school-style'><img src={classes5} alt="" className='img5'/></div>
                <div className='school-text'>
                    <h4 className='school-h4'><b>Religion & History</b></h4>
                    <div className='middle-flex'>
                        <div className='d-flex gap-3'>
                            <img src={user} alt="" className='img3'/>
                            <div className='john'>
                              <h6>Jhon Doe</h6>
                              <p>Teacher</p>
                            </div>
                        </div>
                        <div className='b-btn'>
                           <b> $99</b>
                        </div>
                    </div>
                    <div id='middle-flex'>
                        <div>
                            <div className='red'></div>
                            <p className='age'><b>Age</b> :</p>
                            <span>3-5 Years</span>
                        </div>
                        <div>
                            <div className='green'></div>
                            <p className='time'><b>Time</b></p>
                            <span>9-10AM</span>
                        </div>
                        <div>
                        <div className='yellow'></div>
                            <p className='capacity'><b>Capacity</b></p>
                            <span>30Kids</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div  className='school-style'><img src={classes6} alt="" className='img5'/></div>
                <div className='school-text'>
                    <h4 className='school-h4'><b>General Knowledge</b></h4>
                    <div className='middle-flex'>
                        <div className='d-flex gap-3'>
                            <img src={user} alt="" className='img3'/>
                            <div className='john'>
                              <h6>Jhon Doe</h6>
                              <p>Teacher</p>
                            </div>
                        </div>
                        <div className='b-btn'>
                           <b> $99</b>
                        </div>
                    </div>
                    <div id='middle-flex'>
                        <div>
                            <div className='red'></div>
                            <p className='age'><b>Age</b> :</p>
                            <span>3-5 Years</span>
                        </div>
                        <div>
                            <div className='green'></div>
                            <p className='time'><b>Time</b></p>
                            <span>9-10AM</span>
                        </div>
                        <div>
                        <div className='yellow'></div>
                            <p className='capacity'><b>Capacity</b></p>
                            <span>30Kids</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolClasses