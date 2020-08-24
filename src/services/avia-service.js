export default class AviaService {
	_apiBase = 'https://front-test.beta.aviasales.ru';

	getId = async () => {
		const res = await fetch(`${this._apiBase}/search`);
		return await res.json();
	};

	getTicket = async () => {
		const { searchId } = await this.getId();
		return fetch(`${this._apiBase}/tickets?searchId=${searchId}`);
	};
}