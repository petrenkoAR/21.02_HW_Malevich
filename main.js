let controller = new ScrollMagic.Controller()

let screen1 = document.querySelector('.bg-grid__scrn1')
let screen2 = document.querySelector('.bg-grid__scrn2')
let screen3 = document.querySelector('.bg-grid__scrn3')
let screen4 = document.querySelector('.bg-grid__scrn4')
let screen5 = document.querySelector('.bg-grid__scrn5')
let screen6 = document.querySelector('.bg-grid__scrn6')

let box2Animation = anime({
  targets: '.blck',
  easing: 'linear',
  autoplay: false,
})
new ScrollMagic.Scene({
  triggerElement: screen1,
  duration: screen2.getBoundingClientRect().height
})
.addTo(controller)
.setPin('.blck')
.on('progress', (event) => {
  box2Animation.seek(box2Animation.duration * event.progress)
})
