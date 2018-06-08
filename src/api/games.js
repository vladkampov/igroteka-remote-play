import axios from 'axios';
import config from '../config';

const CORE_END_POINT_URL = `${config('CORE_API_DOMAIN')}/games`;

/**
 * Fetch list of applications
 * @returns {Promise}
 */
export function getGames() {
	return axios.get(`${CORE_END_POINT_URL}/games.mock.json`)
		.then(({ data }) => data)
		.catch(function (error) {
			console.log(error);
		});
}

export function getGame(id) {
	return axios.get(`${CORE_END_POINT_URL}/game-${id}.mock.json`)
		.catch(function (error) {
			console.log(error);
		});
}
