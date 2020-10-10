import TagManager from 'react-gtm-module';

function gtmScript() {
	let bandSection = document.querySelector('.bandSection');
	let musicSection = document.querySelector('.musicSection');
	let showsSection = document.querySelector('.showsSection');
	let contactSection = document.querySelector('.contactSection');
	let triggerImage = document.querySelector('.takeATripTriggerImageContainer');

	triggerImage.addEventListener('click', () => {
		TagManager.dataLayer({
			dataLayer: {
				trigger: 'true',
			},
		});
	});

	window.addEventListener('scroll', () => {
		if (window.innerHeight >= bandSection.getBoundingClientRect().top) {
			TagManager.dataLayer({
				dataLayer: {
					section: 'band',
				},
			});
		}
		if (window.innerHeight >= musicSection.getBoundingClientRect().top) {
			TagManager.dataLayer({
				dataLayer: {
					section: 'music',
				},
			});
		}
		if (window.innerHeight >= showsSection.getBoundingClientRect().top) {
			TagManager.dataLayer({
				dataLayer: {
					section: 'shows',
				},
			});
		}
		if (window.innerHeight >= contactSection.getBoundingClientRect().top) {
			TagManager.dataLayer({
				dataLayer: {
					section: 'contact',
				},
			});
		}
	});
}

export default gtmScript;
