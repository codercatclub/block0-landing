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
    this.curve = new THREE.SplineCurve([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.059523809523809534, 0.12229806598407289),
      new THREE.Vector2(0.3322172619047619, 0.3521046643913539),
      new THREE.Vector2(0.5, 0.5),
      new THREE.Vector2(0.6666666666666667, 0.6666666666666667),
      new THREE.Vector2(0.8333333333333333, 0.8333333333333333),
      new THREE.Vector2(1, 1),
    ]);

    let mql = window.matchMedia("(max-width: 768px)");

    if (mql.matches) {
      this.totalTravel = -44.8;
    }

    const cam = document.querySelector("a-camera");

    if (!("scroll" in cam.components)) {
      console.log("[-] Missing requred scroll component on", cam);
      return;
    }

    this.motion = cam.components.scroll.motion;
    this.startingScale = this.el.object3D.scale.x;
  },

  tick: function (time) {
    // our animation runs from 500 - 2000? scaled by screen?
    let t = this.motion.current / this.totalScroll;
    const c = this.el.object3D.position.y;
    let startTransition = 1.18;
    let endTransition = 1.331;

    let finalY = 0;
    if (t <= 1) {
      finalY = this.totalTravel * this.curve.getPointAt(t).y;
    } else if (t < startTransition) {
      //we have passed animation apply constant curve
      finalY = this.totalTravel + -33 * (t - 1);
    } else if (t < endTransition) {
      //between start and end transition
      finalY = this.totalTravel + -33 * (t - 1);
      // do some scaling
      let midT = 1.0 - (endTransition - t) / (endTransition - startTransition);
      let scaleT = (1.0 + 1.8 * midT) * this.startingScale;
      this.el.object3D.scale.set(scaleT, scaleT, scaleT);
      this.el.object3D.rotation.z = -(Math.PI / 2) * midT;
      this.el.object3D.rotation.y = -(Math.PI / 2) * midT;
      this.el.object3D.position.x = 0.45 * midT;
    } else {
      // stop
      finalY = this.totalTravel + -33 * (endTransition - 1);
    }
    this.t = finalY + this.initPosY;
    this.el.object3D.position.set(
      this.el.object3D.position.x,
      this.t,
      this.el.object3D.position.z
    );
    // // if the scroll pos is within range, we trigger animation
  },
};
