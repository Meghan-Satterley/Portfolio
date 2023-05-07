/* MENU DISPLAY */

const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

	/* SHOW */
	
	if(navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu')
		})
	}

	/* HIDE */

	if(navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu')
		})
	}


/* REMOVE MENU MOBILE */

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
	const navMenu = document.getElememntById('nav_menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* BLUR */

const blurHeader = () => {
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('blur-header')
					   : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* EMAIL SCRIPT */

const contactForm = document.getElementById('contact-form')
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
	e.preventDefault()

	//serviceID service_cvdu746 - templateID - #form - publickey
	emailjs.sendForm('service_cvdu746', 'template_987l34r', '#contact-form', '1-6N-wEZTpdX5mMEo')
		.then(() => {
			contactMessage.textContent = 'Message sent successfully ✓'

			setTimeout(() => {
				contactMessage.textContent = ''
			}, 5000)

			contactForm.reset()

		}, () => {
			contactMessage.textContent = 'Message not sent (service error)'
        })
}

contactForm.addEventListener('submit', sendEmail)

/* SCROLL UP */

const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		}
		else {
			sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* SCROLL REVEAL */

