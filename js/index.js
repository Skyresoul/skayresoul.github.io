const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
	selectElement('header').classList.toggle('active');
});


selectElement('.bagUse').addEventListener('click', () => {
	const ukaz = document.querySelector('.strelka');
	const acviteP = document.querySelector('.popup-content');
	const shadow = document.querySelector('.shadowBack');
	ukaz.classList.toggle('activeS');
	acviteP.classList.toggle('activeP');
	shadow.classList.toggle('activeShadow');
});

selectElement('.shadowBack').addEventListener('click', () =>{
	const ukaz = document.querySelector('.strelka');
	const acviteP = document.querySelector('.popup-content');
	const shadow = document.querySelector('.shadowBack');
	ukaz.classList.toggle('activeS');
	acviteP.classList.toggle('activeP');
	shadow.classList.toggle('activeShadow');
});

//---------------------------------------------------------------------
// Версия Для Планшетов и Смартфонов
selectElement('.bagUseMob').addEventListener('click', () => {
	const ukaz = document.querySelector('.strelka-mob');
	const acviteP = document.querySelector('.popup-content');
	const shadow = document.querySelector('.shadowBackMob');
	ukaz.classList.toggle('activeS-mob');
	acviteP.classList.toggle('activeP');
	shadow.classList.toggle('activeShadowMob');
});

selectElement('.shadowBackMob').addEventListener('click', () =>{
	const ukaz = document.querySelector('.strelka-mob');
	const acviteP = document.querySelector('.popup-content');
	const shadow = document.querySelector('.shadowBackMob');
	ukaz.classList.toggle('activeS-mob');
	acviteP.classList.toggle('activeP');
	shadow.classList.toggle('activeShadowMob');
});