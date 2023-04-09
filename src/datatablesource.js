
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
 
  {
    field: "Name",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.fullname}
        </div>
      );
    }
  },

  {
    field: "Latitude",
    headerName: "Latitude",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.lat}
        </div>
      );
    }
  },

  {
    field: "Longitude",
    headerName: "Longitude",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.lng}
        </div>
      );
    }
  },
  {
    field: "Battery",
    headerName: "Battery",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.BatteryStatus}
        </div>
      );
    },
  },
  {
    field: "Date",
    headerName: "Date",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.date}
        </div>
       
      );
    }
  },
  {
    field: "Time",
    headerName: "Time",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
        
          {params.row.time}
        </div>
       
      );
    }
  },
];
