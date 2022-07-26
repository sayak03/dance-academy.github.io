const navslide = () => {
	const burgar = document.querySelector('.burgar');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burgar.addEventListener('click',()=>{
		//Toggle Nav
		nav.classList.toggle('nav-active');
		//Animate link
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation='';
			}else{
	
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
			
		});
		//Burgar Animation
		burgar.classList.toggle('toggle');

	});
}

navslide();
