const THREE = AFRAME.THREE;

export default {
  schema: {},

  init: function () {
      const obj = this.el.object3D;
      this.initPosY = obj.position.y;
      this.totalTravel = -40;
      this.totalScroll = 5000;
      this.t = this.initPosY;
      this.pageY = 0;
      this.curve = new THREE.SplineCurve( [new THREE.Vector2(0,0),new THREE.Vector2(0.059523809523809534,0.12229806598407289),new THREE.Vector2(0.3322172619047619,0.3521046643913539),new THREE.Vector2(0.5,0.5),new THREE.Vector2(0.6666666666666667,0.6666666666666667),new THREE.Vector2(0.8333333333333333,0.8333333333333333),new THREE.Vector2(1,1)] )


    
    const cam = document.querySelector("a-camera");

    if (!("scroll" in cam.components)) {
      console.log('[-] Missing requred scroll component on', cam);
      return
    }

    this.motion = cam.components.scroll.motion;
  },

  tick: function (time) {
      // our animation runs from 500 - 2000? scaled by screen?
      const t = this.motion.current / this.totalScroll;
      let finalY = 0
      if(t <= 1) {
        finalY = this.totalTravel*this.curve.getPointAt(t).y;
      } else {
        //we have passed animation apply constant curve
        finalY = this.totalTravel + -33*(t - 1);
      }
      this.t = finalY + this.initPosY;
      this.el.object3D.position.set(this.el.object3D.position.x, this.t, this.el.object3D.position.z);
    // // if the scroll pos is within range, we trigger animation

  },
};
