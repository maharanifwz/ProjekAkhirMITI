import React from 'react';
import { Route, Routes, Switch} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Consultation } from './pages/Consultation';
import { Community } from './pages/Community';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { DetailClinic } from './pages/DetailClinic';
import { Booking } from './pages/Booking';
import { Article } from './pages/Article';
import { DetailCommunity } from './pages/DetailCommunity'
import { AboutUs } from './pages/AboutUs';
import { ListClinic } from './pages/ListClinic';
import { PrivateRoute, RestrictedRoute } from './config/PrivateRoute';
import { AuthContext } from './config/Auth'
import { useState } from 'react';

function App () {
	//buat nulis token (yg nyambung ke api dr backend)
	//set item buat masukin tokennya
	//get item buat dapetin isi tokennya
	// const isAnyToken = JSON.parse(localStorage.getItem('token'));
	// const userId = JSON.parse(localStorage.getItem('id'));
	// const [authToken, setAuthToken] = useState(isAnyToken);
	// const [user, setUser] = useState(userId);

	// // //buat manggil fungsinya
	// const setAndGetTokens = (token, id) => {
	// 	localStorage.setItem('token', JSON.stringify(token));
	// 	localStorage.setItem('id', JSON.stringify(id));
	// 	//buat ngeupdate datanya
	// 	setAuthToken(token);
	// 	setUser(id);
	// };
  return (
    <>
		{/* <AuthContext.Provider value={{authToken, setAndGetTokens, user}}> */}
    	<Routes>
			<Route 
				exact 
				path="/" 
				element={<Homepage/>} />
			<Route 
				exact 
				path="/signin" 
				element={<Signin />} />
			<Route 
				exact 
				path="/signup" 
					element={<Signup />} />
				<Route exact path="/consultation" element={<Consultation />} />
				<Route exact path="/community" element={<Community />} />
				<Route exact path='/article' element={<Article/>} />
				<Route exact path="/aboutus" element={<AboutUs />} />
				<Route exact path="/consultation/listclinic" element={<ListClinic />} />
				<Route exact path="/consultation/detailclinic" element={<DetailClinic />} />
				<Route exact path="/community/detailcommunity" element={<DetailCommunity />} />
				<Route exact path="/consultation/detailclinic/booking" element={<Booking />} />
				<Route components={Error}/>
		</Routes>
		{/* </AuthContext.Provider> */}
  </>
  )
}

export default App