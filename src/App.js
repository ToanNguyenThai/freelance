import Login from "./component/Login/Login";
import MainLayout from "./component/mainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './global.css'
import List from "./component/List/List";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/MainLayout" element={<MainLayout />}></Route>
				<Route path="/List" element={<List />}></Route>
			</Routes>

		</BrowserRouter>
		/*  <div className="App">
			<div className="wrap">
				<Login></Login>
				<List></List>
			</div>

		</div>  */
	);
}

export default App;
