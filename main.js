let controller = new ScrollMagic.Controller()

let screen1 = document.querySelector('.bg-grid__scrn1')
let screen2 = document.querySelector('.bg-grid__scrn2')
let screen3 = document.querySelector('.bg-grid__scrn3')
let screen4 = document.querySelector('.bg-grid__scrn4')
let screen5 = document.querySelector('.bg-grid__scrn5')
let screen6 = document.querySelector('.bg-grid__scrn6')

let targsAnimation01 = anime({
  targets: '.blck',
  rotate: '+=10turn',
  easing: 'linear',
  autoplay: false,
})
new ScrollMagic.Scene({
  triggerElement: screen2,
  triggerHook: 'onEnter',
})
.addTo(controller)
.on('enter', function(){ //.on('enter', () => boxAnimation.play())
  targsAnimation01.play()
})

let targsAnimation02 = anime({
  targets: '.second',
  autoplay: false,
})
let targsBtn02 = document.getElementById('scnd')
targsBtn02.onclick = targsAnimation02.play

let targsAnimation03 = anime({
  targets: '.third',
  autoplay: false,
})
let targsBtn03 = document.getElementById('thrd')
targsBtn03.onclick = targsAnimation03.play


let targsAnimation04 = anime({
  targets: '.fourth',
  autoplay: false,
})
let targsBtn04 = document.getElementById('frth')
targsBtn04.onmouseover = targsAnimation04.play


let targsAnimation05 = anime({
  targets: '.fifth',
  autoplay: false,
})
let targsBtn05 = document.getElementById('ffth')
targsBtn05.onmouseover = targsAnimation05.play


let targsAnimation06 = anime({
  targets: '.sixth',
  autoplay: false,
})
let targsBtn06 = document.getElementById('sxth')
targsBtn06.onmouseover = targsAnimation06.play


let targsAnimation07 = anime({
  targets: '.seventh',
  autoplay: false,
})
let targsBtn07 = document.getElementById('svnth')
targsBtn07.onmouseover = targsAnimation07.play


let targsAnimation08 = anime({
  targets: '.eight',
  autoplay: false,
})
let targsBtn08 = document.getElementById('ght')
targsBtn08.onmouseover = targsAnimation08.play


let targsAnimation09 = anime({
  targets: '.nine',
  autoplay: false,
})
let targsBtn09 = document.getElementById('nn')
targsBtn09.onmouseover = targsAnimation09.play


let targsAnimation10 = anime({
  targets: '.ten',
  autoplay: false,
})
let targsBtn10 = document.getElementById('tn')
targsBtn10.onmouseover = targsAnimation10.play
