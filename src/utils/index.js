
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

export {
	convertDate,
	convertMinutes,
	addMinutes
}