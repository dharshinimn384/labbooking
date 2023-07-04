


// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Login from './login.component'
// import SignUp from './signup.component'
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={'/sign-in'}>
//               KEC||AI
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }
// export default App

// import React from 'react';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// const App=()=>{
//   return(
//     <>
    
//     <head><link rel="stylesheet" href="./style.css"></link></head><body>
//     <div class="head"><h1><center>KEC LAB BOOKING AI</center></h1></div>
    
//     <form>
//         <label for="name">Faculty Name:</label>
//         <input type="text" id="name" name="name"></input><br></br>
//         <label for="name">Faculty Designation:</label>
//         <input type="text" id="name" name="name"></input>
//         <br></br>
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email"></input>
//         <br></br>
//         <label for="name">Course name:</label>
//         <input type="text" id="name" name="name"></input>
        
//         <div class="Hall-container">
//           <label>Choose Lab</label>
//           <select id="Hall">
//               <option value="ma">AIMLCC1</option>
//               <option value="cc">AIMLCC2</option>
//               <option value="jt">AIDSCC3</option>
//               <option value="jn">AIDSCC4</option>
//               <option value="jn">AIDSCC5</option>
              
//           </select>
//           </div>

//           <br></br>
          
//           <label for="number">Capacity:</label>
//           <input type="number" id="number" name="number"></input>
//           <br></br>
//         <label for="date">Date:</label>
//         <input type="date" id="date" name="date"></input><br></br>

//         <label for="time">Select time slot:</label>
// 		   <select id="time" name="time" required>
// 			   <option value="" selected disabled>Select time slot</option>
// 			   <option value="9am-11am">8.45am-11.35am</option>
// 			   <option value="11am-1pm">11.35am-12.30pm</option>
// 			   <option value="1pm-3pm">1.30pm-4.15pm</option>
//          <option value="1pm-3pm">1.30pm-3.15pm</option>
//          <option value="3pm-5pm">3.30pm-4.15pm</option>
// 	    	</select>
//         <br></br>

//         <label for="purpose">Purpose:</label>
//         <textarea id="purpose" name="purpose"></textarea>

//         <button type="submit">Book Lab</button>
//         </form></body>

        
//     <footer>
//       <p>&copy;   KEC CC Lab Booking (AI)</p>
//     </footer>
    
//     </>
//   )
// }
// export default App;


//new

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">KEC LAB BOOKING</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="./about.js"><b>About</b></a></li>
                        <li class="nav-item"><a class="nav-link" href="#services"><b>Services</b></a></li>
                        
                        <li class="nav-item"><a class="nav-link" href="#contact"><b>Contact</b></a></li>
                    </ul>
                </div>
            </div>
        </nav><br></br><br></br><br></br><br></br><br></br><br></br>
        <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
            <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-black font-weight-bold">WORK HARD IN SILENCE..!! LET SUCESS MAKE THE NOISE..!!</h1>
                        <hr class="divider"></hr>
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 mb-5"><b>Welcome to Kec lab Booking</b></p>
                    <a class="btn btn-primary btn-xl" href="./app1.js">BOOK NOW:)</a>
                    
                    
                    </div></div></div>
                    </header><br></br><br></br><br></br>
        
        <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center"><br></br><br></br><br></br><br></br><br></br>
                        <h2 class="text-white mt-0">ARTIFICIAL INTELLIGENCE!</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">AIML & AIDSLaboratory is used to enable the students to develop software applications using Python and Java. It provides practical exposure to the students for implementing software applications.</p>
                        <a class="btn btn-light btn-xl" href="#services">Get Started!</a><br></br><br></br><br></br><br></br>
                    </div>
                </div>
            </div>
        </section>

        {/* service */}<br></br><br></br><br></br>
        <section class="page-section" id="services"></section>
        <div class="container px-4 px-lg-5"><br></br>
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider"></hr>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">NO PREMIUM PLANS</h3>
                            <p class="text-muted mb-0">FREEE BOOKING!</p>
                        </div>
                    </div><div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">Webinars and coding competetion happening in CC.</p>
                        </div>
                    </div> 
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">INTERNET CONNECTIVITY</h3>
                            <p class="text-muted mb-0">You can use the ethernet as, or else you connect to free-wifi!</p>
                        </div>
                    </div> <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0"> The Door of opportunity is always open; you have to make us of it..!!!!</p>
                        </div>
                    </div>
                </div>
            </div><hr class="divider"></hr>
            <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                       <br></br>
                       <br></br> 
                       <br></br>
                       <br></br>
                       <br></br><h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                    </div></div>
                    <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                            <input class="form-control" id="message" type="tel" placeholder="write something" data-sb-validations="required" width="10px" />
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submited successfully!</div>
                                    
                                    <br />
                                </div>                                    
                            </div>
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                           
                            <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button></div>
                           </form>
                       
                       </div>
                       </div>
                       <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+91 9965031902</div>
                    </div>
                </div>
                       </div></section> <br></br>
                       <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">@KEC CC lab booking Booking(AI) 2023 </div></div>
        </footer>
      
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
     
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
   
        <script src="./script.js"></script>
    
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
                           
                           
        
   </>
   )
 }
 export default App;

