// Scrol suave 
function initScrollSuave() {
	const menuitems = document.querySelectorAll('.menu a[href^="#"]');

	menuitems.forEach(item => {
			item.addEventListener('click', scrollToIdOnclick);
	})
	
	function scrollToIdOnclick(event) {
			event.preventDefault(); 
			const to = getScrollTopByHref(event.target) - 80; 
			scrollToPosition(to);	
	}

	function getScrollTopByHref(element) {
			const id = element.getAttribute('href');   
			return document.querySelector(id).offsetTop; 
	}

	function scrollToPosition(to) {
		smoothScrollTo(0, to);
	}
	function smoothScrollTo(endX, endY, duration) {
		const startX = window.scrollX || window.pageXOffset;
		const startY = window.scrollY || window.pageYOffset;
		const distanceX = endX - startX;
		const distanceY = endY - startY;
		const startTime = new Date().getTime();
		
		duration = typeof duration !== 'undefined' ? duration : 400;
		
		// Easing function
		const easeInOutQuart = (time, from, distance, duration) => {
			if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
			return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
		};
		
		const timer = setInterval(() => {
			const time = new Date().getTime() - startTime;
			const newX = easeInOutQuart(time, startX, distanceX, duration);
			const newY = easeInOutQuart(time, startY, distanceY, duration);
			if (time >= duration) {
			clearInterval(timer);
			}
			window.scroll(newX, newY);
		}, 1000 / 60); // 60 fps
		};
}
initScrollSuave();


function initAnimarOnScrol() {
	const animarElements = document.querySelectorAll('.js-animar');
	if (animarElements.length) {
		const windowMetade = window.innerHeight * .5;

		function animarScroll() {
			animarElements.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const isElementVisible = elementTop - windowMetade < 0; 
				if(isElementVisible) {
					element.classList.add('ativo');
				}
			}); 
		}

		window.addEventListener('scroll', animarScroll);
	}
}

initAnimarOnScrol();

function initHeadeFixed() {
	const header = document.querySelector('.header');
	window.addEventListener('scroll', fixaHeader);
	function fixaHeader(event) {
		const sobre = document.getElementById('sobre');
		if (sobre.getBoundingClientRect().top > 90) {
			header.classList.remove('fixed');
		} else {
			header.classList.add('fixed');
		}   
	}
}
initHeadeFixed();

function initMenuMobile() {
	const btnMenu = document.querySelector('.btn-menu');
	const menu = document.querySelector('.menu');

	btnMenu.addEventListener('click', handleClick);

	function handleClick(event) {
		btnMenu.classList.toggle('active');
		menu.classList.toggle('active');
	}
}
initMenuMobile();

function initHideMenuOnScroll() {
	const btnMenu = document.querySelector('.btn-menu');
	const menu = document.querySelector('.menu');
	window.addEventListener('scroll', hideMenu);
	
	function hideMenu() {
		btnMenu.classList.remove('active');
		menu.classList.remove('active');
	}

}

initHideMenuOnScroll();
