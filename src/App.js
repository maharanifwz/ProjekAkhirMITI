import React from 'react';
import { Route, Routes, Switch} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Consultation } from './pages/Consultation';
import { Community } from './pages/Community';
import { Signin } from './pages/Signin';
import { Grooming } from './pages/Grooming';
import { DetailClinic } from './pages/DetailClinic';

const App = () => {
  return (
    <>
		
    	<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/consultation" element={<Consultation />} />
				<Route exact path="/community" element={<Community />} />
				<Route exact path="/grooming" element={<Grooming />} />
				<Route exact path="/signin" element={<Signin />} />
				<Route exact path="/consultation/detailclinic" element={<DetailClinic />} />
				<Route components={Error}/>
		</Routes>
  </>
  )
}

export default App