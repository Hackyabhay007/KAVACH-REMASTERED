import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import React, { useRef } from 'react';
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

const Datatable = () => {
  const [data, setData] = useState([]);
  const audioRef = useRef(null);
  
  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)




    const unsub = onSnapshot(
          //yaha pe police station ki uid dalni hai
      collection(db, "8yyunIKfcgOUyUMDS84RxKJ7uFW2"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          
          if(doc.data().ACTIVE_STATUS=="UNSOLVED"){
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              audioRef.current.play();
            } 
            list.push({ id: doc.id, ...doc.data() });
           
          }
          console.log(list);
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "8yyunIKfcgOUyUMDS84RxKJ7uFW2", id));
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  
  //TO UPDATE DATA AS SOLVED

  const handleDelete = async (email) => {
    const updateUser = async () => {
      const userRef = query(collection(db, "8yyunIKfcgOUyUMDS84RxKJ7uFW2"), where("email", "==", email));
      const findUsers = await getDocs(userRef);
      findUsers.forEach( async (user) => {
       const getUser = doc(db, 'Users', user.id);
       await updateDoc(getUser, {
        ACTIVE_STATUS: "SOLVED" 
       });
      });
     }
     
  };

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        var dA = params.row.lat;
  var sA = dA + '';
  var dnA = parseFloat(sA);
        console.log(params);
        return (
          <div className="cellAction">
     
            <Link to={params.row.id+"/"+params.row.fullname+"/"+params.row.email+"/"+dnA} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.email)}
            >
              SOLVED
            </div>
            <div>
      <audio ref={audioRef} src="beep-02.wav" />
      <p>Danger</p>
    </div>
          </div>
          
        );
      },
    },
  ];
  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;
