import Typed from 'typed.js'; //From Node Modules

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };