/* ===== Smooth scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(anchor.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

/* ===== Header shadow ===== */
window.addEventListener('scroll',()=>{
  const header=document.querySelector('header');
  if(window.scrollY>100){
    header.style.background='rgba(255,255,255,0.98)';
    header.style.boxShadow='0 2px 20px rgba(0,0,0,0.1)';
  }else{
    header.style.background='rgba(255,255,255,0.95)';
    header.style.boxShadow='none';
  }
});

/* ===== Fade-in on scroll ===== */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

/* ===== Parallax hero ===== */
window.addEventListener('scroll',()=>{
  const hero=document.querySelector('.hero');
  if(hero) hero.style.transform=`translateY(${window.pageYOffset*0.5}px)`;
});

/* ===== Card hover float ===== */
document.querySelectorAll('.project-card').forEach((card,i)=>{
  card.style.animationDelay=`${i*0.2}s`;
  card.addEventListener('mouseenter',()=>card.style.transform='translateY(-15px) scale(1.02)');
  card.addEventListener('mouseleave',()=>card.style.transform='translateY(0) scale(1)');
});

/* ===== Hamburger toggle ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu= document.getElementById('mobileMenu');

hamburger.addEventListener('click',()=>{
  mobileMenu.classList.toggle('open');
});

/* Tutup panel setelah link diklik */
mobileMenu.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>mobileMenu.classList.remove('open'));
});

const burger   = document.getElementById('hamburger');
const mobile   = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobile.classList.toggle('open');
});

mobile.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => mobile.classList.remove('open'))
);
