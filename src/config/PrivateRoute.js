import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth';

//kalo user udah login, baru bisa akses halaman home
/*children yg di maksud adalah tag yang ada diantara komponen PrivateRoute
  contoh:
  <PrivateRoute>
  </Home>
  </PrivateRoute>
  nah home itu childnya*/
export const PrivateRoute = ({ children }) => {
	const { authToken } = useAuth();

	return authToken ? children : <Navigate to="/signin" />;
};


//kebalikannya, kalo ini kita tendang user kalo berusaha ke page lain lewat search bar
export const RestrictedRoute = ({ children }) => {
	const { authToken } = useAuth();
	//-1 maksudnya balik ke page sebelum dia maksa buat pindah page
	return authToken ? <Navigate to={-1} /> : children;
};