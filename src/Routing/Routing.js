import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import AssignedToMe from "../components/AssignedToMe/AssignedToMe";
import FlaggedEmail from "../components/FlaggedEmail/FlaggedEmail";
import Important from "../components/Important/Important";
import Planned from "../components/Planned/Planned";
import Tasks from "../components/Tasks/Tasks";
import ListSection from "../components/ListSection/ListSection";
import Header from "../components/Header/Header";
import ToDoLogic from "../components/ToDoLogic/ToDoLogic";
import RouteLink from "../components/RouteLink/RouteLink";

 export default function Routing(){
    return(
        <Router>
            {/* <Header/> */}
            <RouteLink/>
            <Routes>
                <Route path="/assignedToMe" element={<AssignedToMe/>}/>
                <Route path="/flaggedEmail" element={<FlaggedEmail/>}/>
                <Route path="/important" element={<Important/>}/>
                <Route path="/planned" element={ <Planned/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/" element={<ToDoLogic/>}/>
            </Routes>
        </Router>
    );
 } 