import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import User from './user';
import '../css/body.css';
import showTime from './script';
import itsShowTime from './script';

class Body extends Component {

    render() {
    
    return(
        <div id="login-box">
          <div className="left-box">
            <h1>Fill me up yo!</h1>
              <label for="Name">Name</label>
                 <input type="text" name="name" id="name"/><br></br>
                 <label for="Age">Age</label>
                <input type="number" name="age" id="age"/><br></br>
                <label>Gender</label><br></br>
                  <input type="radio" name="gender" id="gender1"
                    value="Female"/><label for="Female">Female</label>
                   <input type="radio" name="gender" id="gender2" value="Male"/><label for="Male">Male</label><br></br><br></br>
            <input type="submit" class="btn" value="Submit" onClick={showTime} />
            
            

             </div>        
           <div className="right-box">    
            <h2>Your submitted details here.</h2>
            <br></br><br></br>
            <label>  Name:</label> <span id='Name'></span><br></br><br></br>
            <label>Age:</label> <span id='Age'></span><br></br><br></br>
              <label>  Gender: </label><span id='Gender'></span><br></br><br></br>
              </div></div>  

   );
    }
}
    export default Body;