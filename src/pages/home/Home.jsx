import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
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
            <p className="total-users-active-data">0</p>
          </div>
          <div className="total-users">
            <p className="total-users-tag">TOTAL CASES TILL NOW</p>
            <p className="total-users-active-data">0</p>
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
