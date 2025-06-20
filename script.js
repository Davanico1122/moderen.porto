/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    document.getElementById('nav-links').classList.remove('open'); // auto-close mobile nav
  });
});

/* Header shadow */
window.addEventListener('scroll',()=>{
  const h=document.querySelector('header');
  if(window.scrollY>100){h.style.background='rgba(255,255,255,0.98)';h.style.boxShadow='0 2px 20px rgba(0,0,0,0.1)';}
  else{h.style.background='rgba(255,255,255,0.95)';h.style.boxShadow='none';}
});

/* Fade-in on scroll */
const obs=new IntersectionObserver(ent=>{ent.forEach(e=>e.isIntersecting&&e.target.classList.add('visible'));},
  {threshold:.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

/* Parallax hero */
window.addEventListener('scroll',()=>{
  const hero=document.querySelector('.hero');
  if(hero) hero.style.transform=`translateY(${window.pageYOffset*0.5}px)`;
});

/* Card float */
document.querySelectorAll('.project-card').forEach((c,i)=>{
  c.style.animationDelay=`${i*.2}s`;
  c.addEventListener('mouseenter',()=>c.style.transform='translateY(-15px) scale(1.02)');
  c.addEventListener('mouseleave',()=>c.style.transform='translateY(0) scale(1)');
});

/* Hamburger toggle */
const toggle=document.getElementById('nav-toggle');
const menu=document.getElementById('nav-links');
toggle.addEventListener('click',()=>menu.classList.toggle('open'));
