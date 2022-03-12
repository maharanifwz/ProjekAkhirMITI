import axios from 'axios';

export const petmateAPI = axios.create({
	baseURL: 'http://intern-7.eba-27tmcxsh.ap-southeast-1.elasticbeanstalk.com/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
	},
});
