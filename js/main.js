// 장민주 포트폴리오 - main.js

// 1. 스크롤하면 헤더에 배경 깔기
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
});

// 2. 모바일 메뉴 열기/닫기
const menuBtn = document.querySelector('.header__menu');
menuBtn.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
document.querySelectorAll('.gnb a').forEach((a) => {
  a.addEventListener('click', () => {
    header.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// 3. Archive 필터
const filterBtns = document.querySelectorAll('.filter__btn');
const cards = document.querySelectorAll('.card');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
    cards.forEach((card) => {
      card.hidden = !(cat === 'all' || card.dataset.cat === cat);
    });
  });
});

// 4. 모달 열기/닫기 + PC/Mobile 전환
const modal = document.getElementById('modal');
let lastFocus = null;

function openModal() {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('is-locked');
  modal.querySelector('.modal__close').focus();
}
function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('is-locked');
  if (lastFocus) lastFocus.focus();
}

document.querySelectorAll('[data-modal]').forEach((btn) => btn.addEventListener('click', openModal));
modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

const viewBtns = modal.querySelectorAll('[data-view]');
viewBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    viewBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
    modal.querySelectorAll('[data-frame]').forEach((f) => {
      f.hidden = f.dataset.frame !== view;
    });
  });
});
