import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import HistoryTable from "../../components/history/Historytable"

const HistoryList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <HistoryTable/>
      </div>
    </div>
  )
}

export default HistoryList