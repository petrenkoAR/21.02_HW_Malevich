let targsAnimation01 = anime({
  targets: '.first',
  translateX: -300,
  translateY: -200,
  rotate: ['-15deg', '375deg'],
  loop: true,
  easing: 'steps(10)',
  direction: 'alternate',
  height: [343, 31],
  backgroundColor: '#000',
  autoplay: false,
})
let targsBtn01 = document.getElementById('frst')
targsBtn01.onclick = targsAnimation01.play

let targsAnimation02 = anime({
  targets: '.second',
  translateX: 300,
  rotate: ['-15deg', '-375deg'],
  loop: true,
  easing: 'steps(10)',
  direction: 'alternate',
  autoplay: false,
})
let targsBtn02 = document.getElementById('scnd')
targsBtn02.onclick = targsAnimation02.play

let targsAnimation03 = anime({
  targets: '.third',
  rotate: ['-15deg', '720deg'],
  easing: 'steps(10)',
  translateY: -400,
  height: '100vw',
  loop: true,
  direction: 'alternate',
  autoplay: false,
})
let targsBtn03 = document.getElementById('thrd')
targsBtn03.onclick = targsAnimation03.play


let targsAnimation04 = anime({
  targets: '.fourth',
  rotate: ['-15deg', '720deg'],
  easing: 'steps(10)',
  height: '100vw',
  loop: true,
  direction: 'alternate',
  autoplay: false,
})
let targsBtn04 = document.getElementById('frth')
targsBtn04.onclick = targsAnimation04.play


let targsAnimation05 = anime({
  targets: '.nine',
  rotate: ['-95deg', '360deg'],
  easing: 'steps(10)',
  translateX: '25vw',
  translateY: '-25vw',
  height: '30vw',
  width: '30vw',
  direction: 'alternate',
  loop: true,
  autoplay: false,
})
let targsBtn05 = document.getElementById('nn')
targsBtn05.onclick = targsAnimation05.play

let targsAnimation06 = anime({
  targets: '.same',
  rotate: ['75deg', '-75deg'],
  easing: 'steps(10)',
  width: '10vw',
  height: '10vw',
  direction: 'alternate',
  loop: true,
  autoplay: false,
})
let targsBtn06 = document.getElementById('sm')
targsBtn06.onclick = targsAnimation06.play


let targsAnimation07 = anime({
  targets: '.other',
  rotate: ['-15deg', '345deg'],
  easing: 'steps(10)',
  loop: true,
  direction: 'alternate',
  autoplay: false,
})
let targsBtn07 = document.getElementById('oth')
targsBtn07.onclick = targsAnimation07.play
