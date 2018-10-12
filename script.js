class Animation {
  constructor(el) { this.el = el }

  fadeIn(delay) {
    let stageCounter = 1;
    let obj = this.el;

    let changeOpacity = setInterval(function() {
      let starterOpacityValue = 1;
      let endOpacityValue = 0;
      let stagesQuantity = Math.sqrt(delay) * 2;

      let opacityChange = starterOpacityValue / stagesQuantity * stageCounter;
      obj.style.opacity = opacityChange;

      stageCounter++;

      if ( stageCounter >= stagesQuantity ) obj.style.opacity = 1;

    }, Math.sqrt(delay) / 2);

  }

  debugElement() {
    console.log(this.el);
  }
}

const imageWrapper = document.getElementById('image-wrapper');
const image = imageWrapper.querySelector('img');

let anim = new Animation(image);

anim.fadeIn(3000);
