import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar"; 

const GlobalLayout = () => {
	return (
		<div>
			<NavBar/>
			<Outlet/>
		</div>
	)
}

export default GlobalLayout