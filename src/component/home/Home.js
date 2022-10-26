import { useEffect } from "react";
import styles from "./styles.module.css";
import {useNavigate} from 'react-router-dom'


const Main = () => {
	// const navigate = useNavigate() you get new token on every login
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		// navigate('/')
	};

	//if token not present redirect to login page same as above thing
	
	// useEffect(() =>{
	// 	if(!localStorage.getItem("token")){
	// 		navigate('/')
	// 	}
	// },[])


	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;