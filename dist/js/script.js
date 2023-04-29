//navbar
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#toTop');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});
    
//click diluar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden');
    }
});

// darkmode

const darkTogle = document.querySelector('#dark-togle');
const html = document.querySelector('html');

darkTogle.addEventListener('click', function(){
  if (darkTogle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light'
  }
});

// pindahkan togle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkTogle.checked = true;
  } else {
    darkTogle.checked = false;
  }