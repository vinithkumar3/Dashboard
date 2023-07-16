import './App.css';
import Header from"./header";
import Footer from"./footer";
import Navigation from './Navigation';
import Main from './main';
const Dashboard=()=> {
    return (
      <div> 
        
      <Header dashboardName={"Dashboard"} accountName={"AccountName"}  isSearchVisible={true}/>
       <div class="main">
      <Navigation/>
      <Main/>
      </div>
      <Footer/>
  
      
      </div>
    );
}
export default Dashboard;