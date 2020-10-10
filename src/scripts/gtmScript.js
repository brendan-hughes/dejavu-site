import TagManager from 'react-gtm-module';

function gtmScript() {
	window.addEventListener('scroll', () => {
		// let bandSection = document.querySelector('.bandSection');
		// if (window.innerHeight >= bandSection.getBoundingClientRect().top + 200) {
		// 	TagManager.dataLayer({
		// 		dataLayer: {
		// 			bandSection: 'true',
		// 		},
		// 	});
		// }
	});
}

export default gtmScript;
