import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserComponent from "./Components/Users/UserComponent";
import TodoComponent from "./Components/Todos/TodoComponent";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<UserComponent />} />
          <Route path="/todos" element={<TodoComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;