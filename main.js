let targsAnimation01 = anime({
  targets: '.first',
  translateX: 500,
  translateY: 200,
  rotate: ['-15deg', '375deg'],
  easing: 'steps(5)',
  direction: 'alternate',
  borderRadius: ['0%', '50%'],
  height: [343, 31],
  autoplay: false,
})
let targsBtn01 = document.getElementById('frst')
targsBtn01.onmouseover = targsAnimation01.play

let targsAnimation02 = anime({
  targets: '.second',
  translateX: 300,
  rotate: ['-15deg', '-375deg'],
  easing: 'steps(10)',
  direction: 'alternate',
  autoplay: false,
})
let targsBtn02 = document.getElementById('scnd')
targsBtn02.onmouseover = targsAnimation02.play

let targsAnimation03 = anime({
  targets: '.third',
  rotate: ['-15deg', '720deg'],
  easing: 'steps(10)',
  translateY: -400,
  height: '100vw',
  direction: 'alternate',
  autoplay: false,
})
let targsBtn03 = document.getElementById('thrd')
targsBtn03.onmouseover = targsAnimation03.play
