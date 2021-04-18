const THREE = AFRAME.THREE;

export default {
  schema: {},

  init: function () {
    //   const obj = this.el.object3D;
    //   const initPosY = obj.position.y;
    //   this.totalTravel = -40;
    //   this.totalScroll = 5000;
    //   this.t = initPosY;
    //   this.pageY = 0;
    //   this.curve = new THREE.SplineCurve( [new THREE.Vector2(0,0),new THREE.Vector2(0.059523809523809534,0.12229806598407289),new THREE.Vector2(0.3322172619047619,0.3521046643913539),new THREE.Vector2(0.5,0.5),new THREE.Vector2(0.6666666666666667,0.6666666666666667),new THREE.Vector2(0.8333333333333333,0.8333333333333333),new THREE.Vector2(1,1)] )

    //   document.addEventListener("wheel", (e) => {
    //     this.pageY += parseInt(e.deltaY);
    //     this.pageY = Math.max(this.pageY, 0);

    //    // our animation runs from 500 - 2000? scaled by screen?
    //    let t = Math.max(this.pageY, 0)/this.totalScroll;
    //    let finalY = 0
    //    if(t <= 1) {
    //      finalY = this.totalTravel*this.curve.getPointAt(t).y;
    //    } else {
    //      //we have passed animation apply constant curve
    //      finalY = this.totalTravel + -33*(t - 1);
    //    }
    //     this.t = finalY + initPosY;
    //     obj.position.set(obj.position.x, this.t, obj.position.z);
    //     return false;
    //   });
    // },
    
    const cam = document.querySelector("a-camera");

    if (!("scroll" in cam.components)) {
      console.log('[-] Missing requred scroll component on', cam);
      return
    }

    this.motion = cam.components.scroll.motion;
  },

  tick: function (time) {
    this.el.object3D.position.set(this.el.object3D.position.x, -this.motion.current * 0.02, this.el.object3D.position.z);
    // // if the scroll pos is within range, we trigger animation
    // let clampT = Math.max(Math.min(this.t, -6.5), -7.5);
    // window.clampT = -(clampT+ 6.5)/(-6.5 + 7.5)
    // window.clampTY = this.el.object3D.position.y
    // let clampM = Math.max(Math.min(this.t, -6.5), -9);
    // window.clampM = -(clampM+ 6.5)/(-6.5 + 9)
    // let clampG = Math.max(Math.min(this.t, -35.29), -36.6);
    // window.clampG = -(clampG+ 35.29)/(-35.29 + 36.6)
    // let clampS = Math.max(Math.min(this.t, -36.0), -38.6);
    // window.clampS = -(clampS+ 36.0)/(-36.0 + 38.6)
  },
};
