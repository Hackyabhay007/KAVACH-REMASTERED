import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Qrcode from "../../components/chart/Qrcode";
import Profile from "../../components/chart/Profile";
import List from "../../components/table/Table";
import firebase from 'firebase/compat/app';
import React, { useState, useEffect } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Routes, Route, useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDWOEQxB2yTDWlKII2rCHlo9nAZ6FsOgKw",
  authDomain: "kavachwomensafetyapp.firebaseapp.com",
  databaseURL: "https://kavachwomensafetyapp-default-rtdb.firebaseio.com",
  projectId: "kavachwomensafetyapp",
  storageBucket: "kavachwomensafetyapp.appspot.com",
  messagingSenderId: "1014725336085",
  appId: "1:1014725336085:web:525458803da11e6605421c",
  measurementId: "G-JFZ0D7FR5M"
};
firebase.initializeApp(firebaseConfig);

// Now you can use Firebase services
const auth = firebase.auth();


let userList = [];

const Single = () => {

  let { userId } = useParams();
  const db = firebase.firestore();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const docRef = db.collection('Users').doc(userId);
    const unsubscribe = docRef.onSnapshot((docSnapshot) => {
      if (docSnapshot.exists) {
        setUser(docSnapshot.data());
        // console.log(doc.data());
      } else {
        console.log("No such document!");
      }
    });
  
    // Call unsubscribe to detach the listener when the component is unmounted
    return unsubscribe;
  }, [userId, db]);
  if (!user) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">

            
     
            <h1 className="title">Information</h1>
            <div className="item">
      
              
           
            <div className="profile-pic">
               <Profile data={user.userPhotoLink}  size={20} />
               </div>
              <div className="details">
                <h1 className="itemTitle">{user.fullname}</h1>
            
                <div className="detailItem">
                  <span className="itemKey">Aadhaar:</span>
                  <span className="itemValue">{user.aadhar}</span>
                </div>

                
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{user.phonenumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Speed:</span>
                  <span className="itemValue">{parseFloat(user.DeviceSpeed).toFixed(2)*18/5} kmph</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Battery Status:</span>
                  <span className="itemValue">{user.BatteryStatus}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Time:</span>
                  <span className="itemValue">
                   { user.time}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date:</span>
                  <span className="itemValue">{user.date}</span>
                </div>
                

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
               
               <div className="qrcode-single">
               <Qrcode data={userId} size={150} />
               </div>

               
               
              </div>
            </div>
          </div>
          <div className="right">
            <Chart lat={user.lat} lng={user.lng}/>
          </div>
         
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;