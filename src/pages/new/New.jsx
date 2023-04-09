import React, { useState } from 'react'
// import logandsignup from '../css/cssforlogandsignup/logandsignup.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { useNavigate } from 'react-router-dom';

function New(props) {
  
  let latitude = props.lat;
  let longitude = props.lng;
  
  function addLocation(latitude, longitude) {
  let location = new firebase.firestore.GeoPoint(latitude,longitude);
  return location;
  
  }
 
  // let lastloc=addLocation(latitude,longitude);
  
  
        const [err,setErr] = useState(false);
        // const navigate = useNavigate();
        const handleSubmit = async (e) => {
        e.preventDefault();
        const stationName=e.target[0].value;
        const email=e.target[1].value;
        const phonenumber=e.target[2].value;
        const city=e.target[3].value;
        const state=e.target[4].value;
        // const location='fsdfsdfsd';
        const pincode=e.target[6].value;
        const password=e.target[7].value;
        try{
          const res = await createUserWithEmailAndPassword(auth, email, password)
          await setDoc(doc(db,'Policedb',res.user.uid),{
            uid:res.user.uid,
            stationName,
            email,
            phonenumber,
            city,
            state,
            // location,
            pincode,
          }); 
        }
        catch(error){
          setErr(true);
          console.log(error);
        }
        // navigate("/");
   }
    
  return (
  <>
     
    <div className="navbar">
        <img src="" alt="LOGO" />
      </div>
          <div className='auth-form-container'>
              <div className="heading">
                      <div>
                          <img className="img2" src="" alt="LOGO" />
                      </div>
                      <div>
                          <h2>REGISTRATION</h2>
                      </div>
                  </div>
              <form onSubmit={handleSubmit} className="register-form"  >
                  <div className="info_blocks">
                  <div>
                  <input type="text" name="name" id="name" placeholder="STATION NAME" />
                  </div>
                  <div>
                  <input type="email" placeholder="ADMIN EMAIL" id="email" name="email" /></div>
                  </div>
                  <div>
                  <input type="phone" maxLength='10' placeholder="ADMIN PhoneNumber" id="phone" name="phone" /></div>
                 
                 
                  <div className="info_blocks">
                      <div>
              <input  type="text" id="city" placeholder="CITY" /></div>
              <div>
              <input type="text" id="state" placeholder="STATE" /></div>
                  </div>
                  <div className="info_blocks"/>
            <button > + Location </button>
    
                      <div>
              <div>
              <input name="pincode" id="pincode" placeholder="PINCODE" /></div>
                  </div>
              <input  type="password" placeholder="PASSWORD" id="password" name="password" />
              <button className="buttonforregis" type="submit">REGISTER</button>
          </form>
          <button className="link-btn" >Already have an account? <br/> Login here.</button>
          {err && <span >Somthing Went Wrong..!</span>}
              </div>
         


  </>
  )
}

export default New
