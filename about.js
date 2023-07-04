import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  return(
    <>
    
    <head><link rel="stylesheet" href="./style.css"></link></head><body>
    <div class="head"><h1><center>KEC LAB BOOKING AI</center></h1></div>
    
    <form>
        <label for="name">Faculty Name:</label>
        <input type="text" id="name" name="name"></input><br></br>
        <label for="name">Faculty Designation:</label>
        <input type="text" id="name" name="name"></input>
        <br></br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input>
        <br></br>
        <label for="name">Course name:</label>
        <input type="text" id="name" name="name"></input>
        
        <div class="Hall-container">
          <label>Choose Lab</label>
          <select id="Hall">
              <option value="ma">AIMLCC1</option>
              <option value="cc">AIMLCC2</option>
              <option value="jt">AIDSCC3</option>
              <option value="jn">AIDSCC4</option>
              <option value="jn">AIDSCC5</option>
              
          </select>
          </div>

          <br></br>
          
          <label for="number">Capacity:</label>
          <input type="number" id="number" name="number"></input>
          <br></br>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date"></input><br></br>

        <label for="time">Select time slot:</label>
		   <select id="time" name="time" required>
			   <option value="" selected disabled>Select time slot</option>
			   <option value="9am-11am">8.45am-11.35am</option>
			   <option value="11am-1pm">11.35am-12.30pm</option>
			   <option value="1pm-3pm">1.30pm-4.15pm</option>
         <option value="1pm-3pm">1.30pm-3.15pm</option>
         <option value="3pm-5pm">3.30pm-4.15pm</option>
	    	</select>
        <br></br>

        <label for="purpose">Purpose:</label>
        <textarea id="purpose" name="purpose"></textarea>

        <button type="submit">Book Lab</button>
        </form></body>

        
    <footer>
      <p>&copy;   KEC CC Lab Booking (AI)</p>
    </footer>
    
    </>
  )
}
export default App;


