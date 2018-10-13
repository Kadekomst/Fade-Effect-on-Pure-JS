class Animation {
  constructor(el) { this.el = el }

  fadeIn(delay) {
    let stageCounter = 1;
    let obj = this.el;

    let faded = setInterval(changeOpacity, Math.sqrt(delay) / 2);

    function changeOpacity() {
      let starterOpacityValue = 1;
      let endOpacityValue = 0;
      let stagesQuantity = Math.sqrt(delay) * 2;

      let opacityChange = starterOpacityValue / stagesQuantity * stageCounter;
      obj.style.opacity = opacityChange;

      stageCounter++;

      if ( opacityChange >= starterOpacityValue )
      {
        clearInterval(faded);
        obj.style.opacity = starterOpacityValue;
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

image.addEventListener('click', function()  {
  anim.fadeIn(5000);
})
