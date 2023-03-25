document.querySelector('.play_btn').addEventListener('click', function(e) {
  e.target.closest('.play_btn').classList.toggle('play_btn--toggle');
})
let menuBtn = document.querySelector('.play_btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})
