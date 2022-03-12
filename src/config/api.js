import axios from 'axios';

export const petmateAPI = axios.create({
	baseURL: 'https://2977-118-99-76-148.ngrok.io',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
	},
});
