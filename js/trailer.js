
let unlock = true;

function toggleVideo1(){
	const trailer = document.querySelector('.trailer1');
	const video = document.querySelector('.dafpunk1');
	trailer.classList.toggle('active1');
	video.currentTime = 0;
	video.pause();
}
function toggleVideoPlay1(){
	const trailer = document.querySelector('.trailer1');
	const video = document.querySelector('.dafpunk1');
	trailer.classList.toggle('active1');
	video.play();
}

document.querySelector('.shadowBackTrailers1').addEventListener('click', function (){
	const trailer = document.querySelector('.trailer1');
	const video = document.querySelector('.dafpunk1');
	trailer.classList.remove('active1');
	video.currentTime = 0;
	video.pause();
});

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		const trailer = document.querySelector('.trailer1');
		const video = document.querySelector('.dafpunk1');
		trailer.classList.remove('active1');
		video.currentTime = 0;
		video.pause();
	}
});

// -----------------------------------------------------------------------------

function toggleVideo2(){
	const trailer = document.querySelector('.trailer2');
	const video2 = document.querySelector('.dafpunk2');
	trailer.classList.toggle('active2');
	video2.currentTime = 0;
	video2.pause();
}

function toggleVideoPlay2(){
	const trailer = document.querySelector('.trailer2');
	const video2 = document.querySelector('.dafpunk2');
	trailer.classList.toggle('active2');
	video2.play();
}

document.querySelector('.shadowBackTrailers2').addEventListener('click', function (){
	const trailer = document.querySelector('.trailer2');
	const video2 = document.querySelector('.dafpunk2');
	trailer.classList.toggle('active2');
	video2.currentTime = 0;
	video2.pause();
});

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		const trailer = document.querySelector('.trailer2');
		const video = document.querySelector('.dafpunk2');
		trailer.classList.remove('active2');
		video.currentTime = 0;
		video.pause();
	}
});

