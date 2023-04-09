import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  query, where,
  updateDoc ,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Routes, Route, useParams } from 'react-router-dom';

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

const Home = () => {


  const [users, setUsers] = useState([]);
  const [solved, setSolved] = useState([]);
// Now you can use Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
  useEffect(() => {

    
    const docRef = db.collection('8yyunIKfcgOUyUMDS84RxKJ7uFW2');
    const unsubscribe = docRef.onSnapshot((querySnapshot) => {
      const usersData = [];
      const solveddata = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
        if(doc.data().ACTIVE_STATUS=="UNSOLVED")
        {
          usersData.push(doc.data());
        }
        else if(doc.data().ACTIVE_STATUS=="SOLVED"){
          solveddata.push(doc.data());
        }
         console.log(usersData);
        
        } else {
          console.log("No such document!");
        }
      });
      setUsers(usersData);
      setSolved(solveddata);
    });
    return unsubscribe;
  }, []);
  



  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
         
          {/* <Widget type="order" />
          <Widget type="earning" /> */}
        </div>
        {/* <div className="charts">
          <Featured />
      
        </div> */}

        <Chart lat={30.268575} lng={77.993426}/>
        
       <div className="bottom-menu">
          <div className="total-users">
            <p className="total-users-tag">USERS ACTIVE</p>
            <p className="total-users-active-data">{users.length}</p>
          </div>
          <div className="total-users">
            <p className="total-users-tag">TOTAL CASES TILL NOW</p>
            <p className="total-users-active-data">{solved.length}</p>
          </div>
       </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
     
      </div>
      
    </div>
  );
};

export default Home;
