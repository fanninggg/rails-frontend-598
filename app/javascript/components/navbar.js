const	initUpdateNavbarOnScroll = () => {
	console.log('triggered');
	const navbar = document.getElementById('navbar');
	document.addEventListener('scroll', (e) => {
		if (window.scrollY >= window.innerHeight) {
			navbar.classList.add('navbar-lewagon-white')
		} else {
			navbar.classList.remove('navbar-lewagon-white')
		}
	})
}

export { initUpdateNavbarOnScroll }