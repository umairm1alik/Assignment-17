// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import ListSection from "./components/ListSection/ListSection";
import Routing from "./Routing/Routing";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ListSection/> */}
      <ListSection/>
    </div>
  );
}

export default App;
