import TagManager from 'react-gtm-module';

function gtmScript() {
	let bandSection = document.querySelector('.bandSection');
	let musicSection = document.querySelector('.musicSection');
	let showsSection = document.querySelector('.showsSection');
	let contactSection = document.querySelector('.contactSection');
	let triggerImage = document.querySelector('.takeATripTriggerImageContainer');

	let triggerOnce = false;
	let bandOnce = false;
	let musicOnce = false;
	let showsOnce = false;
	let contactOnce = false;

	triggerImage.addEventListener('click', () => {
		if (!triggerOnce) {
			TagManager.dataLayer({
				dataLayer: {
					trigger: 'true',
				},
			});
		}
	});

	window.addEventListener('scroll', () => {
		if (window.innerHeight >= bandSection.getBoundingClientRect().top) {
			if (!bandOnce) {
				TagManager.dataLayer({
					dataLayer: {
						section: 'band',
					},
				});
			}
		}
		if (window.innerHeight >= musicSection.getBoundingClientRect().top) {
			if (!musicOnce) {
				TagManager.dataLayer({
					dataLayer: {
						section: 'music',
					},
				});
			}
		}
		if (window.innerHeight >= showsSection.getBoundingClientRect().top) {
			if (!showsOnce) {
				TagManager.dataLayer({
					dataLayer: {
						section: 'shows',
					},
				});
			}
		}
		if (window.innerHeight >= contactSection.getBoundingClientRect().top) {
			if (!contactOnce) {
				TagManager.dataLayer({
					dataLayer: {
						section: 'contact',
					},
				});
			}
		}
	});
}

export default gtmScript;
