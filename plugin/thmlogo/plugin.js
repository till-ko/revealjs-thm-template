/*!
 * reveal.js THM Logo plugin
 */

var printMode = (/print-pdf/gi).test(window.location.search);
var scrollMode = (/scroll/gi).test(window.location.search);

function initializeTHMPrint() {
	//return;
	//console.log("initializePrint", document.querySelectorAll(".pdf-page").length);
	if (!document.querySelectorAll(".pdf-page").length) {
		// wait for pdf pages to be created
		setTimeout(initializeTHMPrint, 500);
		return;
	}
	createTHMPrintout();
}

function initializeTHMScroll() {
	//return;
	// console.log("initializeScroll", document.querySelectorAll(".scroll-page-content").length);
	if (!document.querySelectorAll(".scroll-page-content").length) {
		// wait for pdf pages to be created
		setTimeout(initializeTHMScroll, 500);
		return;
	}
	createTHMScrollview();
}

// Enum for differnt logos
const LogosEnum = {
	// CF = Campus Friedberg, CG = Campus Giessen
	THM: 'thmlogo',
	STUDIUM_PLUS: 'studpluslogo',
	ITI: 'itilogo',
	MNI_CG: 'mnicglogo',
	ITI_MNI_CG: 'itimnicglogo',
	IEM_CF: 'iemcflogo',
	M_CF: "mcflogo",
	MND_CF: "mndcflogo",
	WI_CF: "wicflogo",
	MUK_CF: "mukcflogo",
	BAU_CG: "baucglogo",
	EI_CG: "eicglogo",
	ME_CG: "mecglogo",
	LES_CG: "lescglogo",
	GES_CG: "gescglogo",
	WIRTSCHAFT_CG: "wirtschaftcglogo",
	MUK_CG: "mukcglogo"
};

const RevealLogosPlugin = (function () {

	function initLogos(config) {
		const revealElement = document.querySelector('.reveal');

		// add theme "on top" of all the slides if no special mode is activated
		if (!printMode && !scrollMode) {
			// check config and create logo accordingly
			if (config.logo) {
				const logoDiv = document.createElement('div');
				logoDiv.classList.add(LogosEnum[config.logo]);
				revealElement.appendChild(logoDiv);
			}

			// check weather an additional logo is in config and create logo accordingly
			if (config.logo_addition) {
				const fbLogoDiv = document.createElement('div');
				fbLogoDiv.classList.add(LogosEnum[config.logo_addition]);
				revealElement.appendChild(fbLogoDiv);
			}

			// add footer element
			const footerDiv = document.createElement('div');
			footerDiv.classList.add('footer');
			revealElement.appendChild(footerDiv);

			const footerLeftDiv = document.createElement('div');
			footerLeftDiv.classList.add('footer-left');
			footerLeftDiv.innerText = 'UNIVERSITY OF APPLIED SCIENCES';
			revealElement.appendChild(footerLeftDiv);
		}
	}

	return {
		id: 'reveal-logos-plugin',
		init: function (deck) {
			const config = deck.getConfig().thmlogos || {};
			initLogos(config);
		}
	};
})();


function createTHMPrintout() {
	// add theme to every printed page
	var pages = document.querySelectorAll(".pdf-page");
	const config = Reveal.getConfig().thmlogos;
	// console.log(pages)
	// console.log(this.Reveal.getTotalSlides())
	for (var i = 0; i < pages.length; i++) {

		// check config and create logo accordingly
		if (config.logo) {
			const logoDiv = document.createElement('div');
			logoDiv.classList.add(LogosEnum[config.logo]);
			pages[i].appendChild(logoDiv);
		}

		// check weather an additional logo is in config and create logo accordingly
		if (config.logo_addition) {
			const fbLogoDiv = document.createElement('div');
			fbLogoDiv.classList.add(LogosEnum[config.logo_addition]);
			pages[i].appendChild(fbLogoDiv);
		}

		// add footer element
		const footerDiv = document.createElement('div');
		footerDiv.classList.add('footer');
		pages[i].appendChild(footerDiv);

		const footerLeftDiv = document.createElement('div');
		footerLeftDiv.classList.add('footer-left');
		footerLeftDiv.innerText = 'UNIVERSITY OF APPLIED SCIENCES';
		pages[i].appendChild(footerLeftDiv);
	}
}

function createTHMScrollview() {
	// add theme to every printed page
	var pages = document.querySelectorAll(".scroll-page-content");
	const config = Reveal.getConfig().thmlogos;
	// console.log(pages)
	// console.log(this.Reveal.getTotalSlides())
	for (var i = 0; i < pages.length; i++) {

		// check config and create logo accordingly
		if (config.logo) {
			const logoDiv = document.createElement('div');
			logoDiv.classList.add(LogosEnum[config.logo]);
			pages[i].appendChild(logoDiv);
		}

		// check weather an additional logo is in config and create logo accordingly
		if (config.logo_addition) {
			const fbLogoDiv = document.createElement('div');
			fbLogoDiv.classList.add(LogosEnum[config.logo_addition]);
			pages[i].appendChild(fbLogoDiv);
		}

		// add footer element
		const footerDiv = document.createElement('div');
		footerDiv.classList.add('footer');
		pages[i].appendChild(footerDiv);

		const footerLeftDiv = document.createElement('div');
		footerLeftDiv.classList.add('footer-left');
		footerLeftDiv.innerText = 'UNIVERSITY OF APPLIED SCIENCES';
		pages[i].appendChild(footerLeftDiv);
	}
	// For this to work from here the Scroll view would have to be static, so we will have to live with changes in the source on this one.
	//
	// const slideSize = this.Reveal.getComputedSlideSize( window.innerWidth, window.innerHeight );
	// var pages = document.querySelectorAll(".scroll-page");
	// for (var i=0; i<pages.length; i++) {
	// 	if (pages[i].querySelector( '.scroll-page-content div[data-background-slide-name="thm-title-slide-1"]')!==null) {
	// 		// This is a THM Title slide and therefore needs the wohle page and no auto height to be displayed correctly
		
	// 		// pages[i].style['--slide-height'] = '1028 px';
	// 		// pages[i].style['--slide-height'] = slideSize.height + 'px';
	// 		pages[i].style.setProperty( '--slide-height', slideSize.height + 'px !important');
	// 		console.log(pages[i]);
	// 	} else {
	// 		pages[i].style.setProperty( '--slide-height', 'auto');
	// 	}
	// }
}

// reveal plugin registration
Reveal.registerPlugin('logos', RevealLogosPlugin);

Reveal.addEventListener('ready', function (event) {

	if (printMode) {
		initializeTHMPrint();
		return;
	}
	if (scrollMode) {
		initializeTHMScroll();
		return;
	}
});