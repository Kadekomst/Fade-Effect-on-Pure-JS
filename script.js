class Animation {
  constructor(el) { this.el = el }

  fadeIn(delay) {
    let stageCounter = 1;
    let el = this.el;

    let faded = setInterval(changeOpacity, Math.sqrt(delay) / 2);

    function changeOpacity() {
      let starterOpacityValue = 1;
      let endOpacityValue = 0;
      let stagesQuantity = Math.sqrt(delay) * 2;

      let opacityChange = starterOpacityValue / stagesQuantity * stageCounter;
      el.style.opacity = opacityChange;

      el.style.display = 'block';

      stageCounter++;

      if ( opacityChange >= starterOpacityValue )
      {
        clearInterval(faded);
        el.style.opacity = starterOpacityValue;
      }
    }
  }

  fadeOut(delay) {
    let stageCounter = Math.sqrt(delay) * 2;
    let el = this.el;

    let faded = setInterval(changeOpacity, Math.sqrt(delay) / 2);

    function changeOpacity() {
      let starterOpacityValue = 1;
      let endOpacityValue = 0;
      let stagesQuantity = Math.sqrt(delay) * 2;

      let opacityChange = starterOpacityValue / stagesQuantity * stageCounter;
      el.style.opacity = opacityChange;

      stageCounter--;

      if ( opacityChange <= 0 ) {
        clearInterval(faded);
        el.style.opacity = 0;
        el.style.display = 'none';
      }

     }
  }

  debugElement() {
    console.log(this.el);
  }
}

const imageWrapper = document.getElementById('image-wrapper');
const image = imageWrapper.querySelector('img');

let anim = new Animation(image);

document.getElementById('image-display').addEventListener('click', function()  {
  anim.fadeIn(500);
})

document.getElementById('image-hide').addEventListener('click', function()  {
  anim.fadeOut(500);
})
