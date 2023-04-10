import React, { useState } from 'react'
// import logandsignup from '../css/cssforlogandsignup/logandsignup.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import getLocation from "../../components/getLocation"
// import { useNavigate } from 'react-router-dom';

function New(props) {
  

  

  const [location, setLocation] = useState(null);
  const [Locationfb, setLocationfb] = useState(null);



        const [err,setErr] = useState(false);
        // const navigate = useNavigate();
        const handleSubmit = async (e) => {
        e.preventDefault();
        const stationName=e.target[0].value;
        const email=e.target[1].value;
        const phonenumber=e.target[2].value;
        const city=e.target[3].value;
        const state=e.target[4].value;
        const pincode=e.target[5].value;
        const password=e.target[6].value;
        const location=Locationfb;
        console.log(email);
        console.log(pincode);
        try{
       if(location!=null)
       {
      
        const res = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db,'Policedb',res.user.uid),{
          uid:res.user.uid,
          stationName,
          email,
          phonenumber,
          city,
          state,
          pincode,
          location,
        }); 
       }
       else{
        alert("Allow Location permission and Wait for 5 seconds")
       }
        }
        catch(error){
          setErr(true);
          console.log(error);
        }
        // navigate("/");
   }
  
   const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
        const geopoint = new firebase.firestore.GeoPoint(position.coords.latitude,position.coords.longitude);
        setLocationfb(geopoint);
        console.log(geopoint);
      });
     
    } else {
      alert("Geolocation is not supported by this browser.");
    }
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
              <input  ut type="text" id="state" placeholder="STATE" /></div>
                  </div>

                  <button onClick={handleGetLocation}>Get Location</button>
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          
        </div>
      )}
                  <div className="info_blocks"/>
            {/* <button > + Location </button> */}
            
                      <div>
              <div>
              <input type="password" name="pincode" id="pincode" placeholder="PASSWORD" /></div>
                  </div>
              <input   placeholder="pincode" id="password" name="password" />
              <button  className="buttonforregis" type="submit">REGISTER</button>
          </form>
          <button className="link-btn" >Already have an account? <br/> Login here.</button>
          {err && <span >Somthing Went Wrong..!</span>}
              </div>
         


  </>
  )
}

export default New
