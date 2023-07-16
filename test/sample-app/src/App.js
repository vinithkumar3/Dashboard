
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from "./login";
import Dashboard from "./Dasboard";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import StudentDataClassComponent from "./StudentDataClassComponent";
function App() {
  return ( (<Router>
      <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/StudentDataClass" element={<StudentDataClassComponent/>}/>
          <Route path="/navigation" element={<Navigation/>}/>
          <Route path="/dashboard"  element={<Dashboard/>} />
          <Route path="/productlist" element={<ProductList />} />
      </Routes>
  </Router>)
  );
}

export default App;
