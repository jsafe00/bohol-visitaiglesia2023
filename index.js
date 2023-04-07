const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const load_more = document.querySelector('#load-more');
const more_pics = document.querySelector('#more-pics');
const more_pics2 = document.querySelector('#more-pics2');



burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});

load_more.addEventListener('click', (e) => {
    if (more_pics.classList.contains('hidden')) {
        more_pics.classList.remove('hidden');
        more_pics2.classList.remove('hidden');
        load_more.classList.remove('cursor-pointer');
        load_more.classList.add('hidden');
    } else {
        more_pics.classList.add('hidden');
        more_pics2.classList.add('hidden');
        load_more.classList.add('cursor-pointer');
    }
  });
