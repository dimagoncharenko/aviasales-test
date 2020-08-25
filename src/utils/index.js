
const convertDate = (dateString) => {
	const date = new Date(dateString);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
};

const convertMinutes = (num) => {
	const hours = Math.floor(num / 60);
	const minutes = num % 60;
	return `${hours}ч ${minutes}м`;
};

const addMinutes = (leaveTime, duration) => {
	const data = new Date(leaveTime);
	return new Date(data.getTime() + duration * 60000);
};

const transfromStops = (count) => {
	switch (count) {
		case 0:
			return 'noStops'
		case 1:
			return 'oneStops'
		case 2:
			return 'twoStops'
		case 3:
			return 'threeStops'
		default:
			break;
	}
};

export {
	convertDate,
	convertMinutes,
	addMinutes,
	transfromStops
}