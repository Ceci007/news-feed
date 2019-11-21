import dayjs from 'dayjs';

const BASE_URL = 'https://api.canillitapp.com';

const getActualDate = () => dayjs().format('YYYY[-]MM[-]DD');

const api = {
	latest: async (date = getActualDate()) => {
		try {
			const response = await fetch(`${BASE_URL}/latest/${date}`);
			const data = await response.json();

			return data;
		} catch (error) {
			console.error(error);
		}
	},
	category: async categoryId => {
		return await fetch(`${BASE_URL}/news/category/${categoryId}`)
			.then(data => data.json())
			.catch(error => console.log(error));
	},
	busqueda: async searchParams => {
		return await fetch(`${BASE_URL}/search/${searchParams}`)
			.then(data => data.json())
			.catch(error => console.log(error));
	},
};

export default api;
