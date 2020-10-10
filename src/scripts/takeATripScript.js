function takeATripScript() {
	const triggerContainer = document.querySelector(
		'.takeATripTriggerImageContainer'
	);

	const redcircle1 = document.querySelectorAll('.redcircle-1');
	const redcircle2 = document.querySelectorAll('.redcircle-2');
	const redcircle3 = document.querySelectorAll('.redcircle-3');
	const homeHeader = document.querySelector('.dejaVuHeader');
	const homeTagline = document.querySelectorAll('.dejaVuTagline');
	const homeBackground = document.querySelector('.homeBackground');
	const normalVan = document.querySelector('.normalVan');
	const trippyVan = document.querySelector('.trippyVan');
	const bandSection = document.querySelector('.bandSection');
	const takeATripTriggerText = document.querySelector('.takeATripTriggerText');
	const nav = document.querySelector('nav');
	const dot = document.querySelector('.outerDotContainer');
	const dividerABackground = document.querySelectorAll('.dividerABackground');
	const footer = document.querySelector('footer');
	const theBandHeader = document.querySelector('.bandHeader');
	const bandBackground = document.querySelectorAll('.bandHeaderBackground');
	const theMusicHeader = document.querySelector('.musicHeader');
	const musicBackground = document.querySelectorAll('.musicHeaderBackground');
	const theShowsHeader = document.querySelector('.showsHeader');
	const showsBackground = document.querySelectorAll('.showsHeaderBackground');
	const getInTouchHeader = document.querySelector('.getInTouchHeader');
	const getInTouchBackground = document.querySelectorAll(
		'.contactHeaderBackground'
	);
	const innerBand = document.querySelectorAll('.innerBand');
	const bandBorderTop = document.querySelector('.bandBorderTop');
	const bandBorderBottom = document.querySelector('.bandBorderBottom');
	const normalBandBorder = document.querySelector('.normalBandBorder');
	const musicCards = document.querySelectorAll('.musicCard');
	const decoContainers = document.querySelectorAll('.decoContainer');
	const showsContainer = document.querySelector('.showTextContainer');
	const showsText = document.querySelector('.showsParagraph');
	const trippyShowsBackground = document.querySelector('.trippyShows ');
	const normalShows = document.querySelector('.normalShows ');
	const albumArt = document.querySelectorAll('.albumArt');
	const getInTouchBox = document.querySelector('.getInTouchBox');
	const getInTouchText = document.querySelector('.getInTouchText');
	const getInTouchInput = document.querySelectorAll('.getInTouchInput');
	const getInTouchButton = document.querySelector('.getInTouchButton');
	const takeATripTriggerImageContainer = document.querySelector(
		'.takeATripTriggerImageContainer'
	);
	const deco6Container = document.querySelector('.deco6Container');
	const meetTheBand = document.querySelector('.meetTheBand');

	normalVan.addEventListener('mouseover', () => {
		normalVan.classList.add('triggerHover');
	});
	normalVan.addEventListener('mouseout', () => {
		normalVan.classList.remove('triggerHover');
	});
	trippyVan.addEventListener('mouseover', () => {
		trippyVan.classList.add('triggerHover');
	});
	trippyVan.addEventListener('mouseout', () => {
		trippyVan.classList.remove('triggerHover');
	});

	normalVan.addEventListener('click', () => {
		normalVan.classList.add('zoomOff');
		dot.classList.add('activeDot');
		setTimeout(() => {
			normalVan.classList.add('inactiveTriggerImage');
			normalVan.classList.remove('zoomOff');
			normalVan.classList.remove('activeTriggerImage');
			trippyVan.classList.remove('inactiveTriggerImage');
			trippyVan.classList.add('activeTriggerImage');
		}, 1000);
		nav.classList.add('trippynav');

		redcircle1.forEach((circle) => {
			circle.classList.add('trippyCircle1');
		});
		redcircle2.forEach((circle) => {
			circle.classList.add('trippyCircle2');
		});
		redcircle3.forEach((circle) => {
			circle.classList.add('trippyCircle3');
		});
		homeHeader.classList.add('dejaVuHeaderTrippy');
		homeTagline.forEach((tag) => {
			tag.classList.add('dejaVuTaglineTrippy');
		});
		homeBackground.classList.add('trippyBackground');
		takeATripTriggerText.classList.add('trippyTriggerText');
		dividerABackground.forEach((background) => {
			background.classList.add('addTrippyEffect');
		});
		footer.classList.add('trippyfooter');
		theBandHeader.classList.add('trippyBandHeader');
		theMusicHeader.classList.add('trippyMusicHeader');
		theShowsHeader.classList.add('trippyShowsHeader');
		getInTouchHeader.classList.add('trippyContactHeader');
		bandBackground.forEach((background) => {
			background.classList.add('addBandTrippyEffect');
		});
		musicBackground.forEach((background) => {
			background.classList.add('addMusicTrippyEffect');
		});
		showsBackground.forEach((background) => {
			background.classList.add('addShowsTrippyEffect');
		});
		getInTouchBackground.forEach((background) => {
			background.classList.add('addContactTrippyEffect');
		});
		innerBand.forEach((band) => {
			band.classList.add('trippyCardBackground');
		});
		bandBorderTop.classList.add('visibleBorder');
		bandBorderBottom.classList.add('visibleBorder');
		normalBandBorder.classList.remove('visibleBorder');
		musicCards.forEach((card) => {
			card.classList.add('trippyMusicCard');
		});
		decoContainers.forEach((container) => {
			container.classList.add('visibleDeco');
		});
		showsContainer.classList.add('trippyShowsTextContainer');
		trippyShowsBackground.classList.add('makeVisible');
		showsText.classList.add('makeTextTrippy');
		normalShows.classList.add('makeInvisible');
		albumArt.forEach((art) => {
			art.classList.add('albumArtPsyc');
		});
		getInTouchBox.classList.add('trippyContactBox');
		getInTouchText.classList.add('trippyGetInTouchText');
		getInTouchInput.forEach((input) => {
			input.classList.add('trippyContactInput');
		});
		getInTouchButton.classList.add('trippyContactButton');
		meetTheBand.classList.add('meetTheBandTrippy');
	});
	trippyVan.addEventListener('click', () => {
		trippyVan.classList.add('zoomOff');
		dot.classList.remove('activeDot');
		setTimeout(() => {
			trippyVan.classList.add('inactiveTriggerImage');
			trippyVan.classList.remove('zoomOff');
			trippyVan.classList.remove('activeTriggerImage');
			normalVan.classList.remove('inactiveTriggerImage');
			normalVan.classList.add('activeTriggerImage');
		}, 1000);

		redcircle1.forEach((circle) => {
			circle.classList.remove('trippyCircle1');
		});
		redcircle2.forEach((circle) => {
			circle.classList.remove('trippyCircle2');
		});
		redcircle3.forEach((circle) => {
			circle.classList.remove('trippyCircle3');
		});
		homeHeader.classList.remove('dejaVuHeaderTrippy');
		homeTagline.forEach((tag) => {
			tag.classList.remove('dejaVuTaglineTrippy');
		});
		homeBackground.classList.remove('trippyBackground');
		takeATripTriggerText.classList.remove('trippyTriggerText');
		nav.classList.remove('trippynav');
		dividerABackground.forEach((background) => {
			background.classList.remove('addTrippyEffect');
		});
		footer.classList.remove('trippyfooter');
		theBandHeader.classList.remove('trippyBandHeader');
		theMusicHeader.classList.remove('trippyMusicHeader');
		theShowsHeader.classList.remove('trippyShowsHeader');
		getInTouchHeader.classList.remove('trippyContactHeader');
		bandBackground.forEach((background) => {
			background.classList.remove('addBandTrippyEffect');
		});
		musicBackground.forEach((background) => {
			background.classList.remove('addMusicTrippyEffect');
		});
		showsBackground.forEach((background) => {
			background.classList.remove('addShowsTrippyEffect');
		});
		getInTouchBackground.forEach((background) => {
			background.classList.remove('addContactTrippyEffect');
		});
		innerBand.forEach((band) => {
			band.classList.remove('trippyCardBackground');
		});
		bandBorderTop.classList.remove('visibleBorder');
		bandBorderBottom.classList.remove('visibleBorder');
		normalBandBorder.classList.add('visibleBorder');
		musicCards.forEach((card) => {
			card.classList.remove('trippyMusicCard');
		});
		decoContainers.forEach((container) => {
			container.classList.remove('visibleDeco');
		});
		showsContainer.classList.remove('trippyShowsTextContainer');
		trippyShowsBackground.classList.remove('makeVisible');
		showsText.classList.remove('makeTextTrippy');
		normalShows.classList.remove('makeInvisible');
		albumArt.forEach((art) => {
			art.classList.remove('albumArtPsyc');
		});
		getInTouchBox.classList.remove('trippyContactBox');
		getInTouchText.classList.remove('trippyGetInTouchText');
		getInTouchInput.forEach((input) => {
			input.classList.remove('trippyContactInput');
		});
		getInTouchButton.classList.remove('trippyContactButton');
		meetTheBand.classList.remove('meetTheBandTrippy');
	});
	window.addEventListener('scroll', () => {
		if (window.innerHeight >= bandSection.getBoundingClientRect().top + 200) {
			triggerContainer.classList.add('cornerTriggerImageContainer');
			normalVan.classList.add('cornerTriggerImage');
			trippyVan.classList.add('cornerTriggerImage');
			deco6Container.classList.add('smallTouchIcon');
		} else {
			if (triggerContainer.classList.contains('cornerTriggerImageContainer')) {
				triggerContainer.classList.remove('cornerTriggerImageContainer');
				normalVan.classList.remove('cornerTriggerImage');
				trippyVan.classList.remove('cornerTriggerImage');
				deco6Container.classList.remove('smallTouchIcon');
			}
		}
	});
}

export default takeATripScript;
