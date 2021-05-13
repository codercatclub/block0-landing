const THREE = AFRAME.THREE;
import NormalizeWheel from "normalize-wheel";
import { lerp } from "../utils";

export default {
  schema: {},

  init: function () {
    this.cam = this.el.object3D;
    this.camP = this.cam.position;
    this.initPosY = this.camP.y;
    this.isDown = false;
    this.touchStart = 0;

    this.endingT = 1.22;
    this.scrollClamp = 1.331;

    this.motion = {
      ease: 0.1,
      current: 0,
      target: 0,
    };

    document.addEventListener("wheel", (event) => {
      const normalized = NormalizeWheel(event);
      const speed = normalized.pixelY;

      this.motion.target += speed;
      this.motion.target = Math.max(this.motion.target, 0);
      this.motion.target = Math.min(
        this.motion.target,
        this.scrollClamp * this.totalScroll
      );
    });

    document.addEventListener("touchstart", (event) => {
      this.isDown = true;

      this.motion.position = this.motion.current;
      this.touchStart = event.touches
        ? event.touches[0].clientY
        : event.clientY;
    });

    document.addEventListener("touchmove", (event) => {
      if (!this.isDown) return;

      const y = event.touches ? event.touches[0].clientY : event.clientY;
      const distance = (this.touchStart - y) * 2;

      this.motion.target = this.motion.position + distance;
      this.motion.target = Math.max(this.motion.target, 0);
      this.motion.target = Math.min(
        this.motion.target,
        this.scrollClamp * this.totalScroll
      );
    });

    document.addEventListener("touchend", () => {
      this.isDown = false;
    });

    this.totalTravel = -40;
    this.totalScroll = 5000;
    window.scrollTo(0, 0);

    this.curve = new THREE.SplineCurve([
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.1488095238095238, 0.052332195676905724),
      new THREE.Vector2(0.2540922619047619, 0.30432309442548355),
      new THREE.Vector2(0.5, 0.5),
      new THREE.Vector2(0.6666666666666667, 0.6666666666666667),
      new THREE.Vector2(0.8333333333333333, 0.8333333333333333),
      new THREE.Vector2(1, 1),
    ]);

    let mql = window.matchMedia("(max-width: 768px)");

    if (mql.matches) {
      this.totalScroll = 1500;
      this.scrollClamp = 1.543;
      this.endingT = 1.42;
    }
  },

  scrollToAbout: function() {
    let aboutScrollPos = 4100;

    const mql = window.matchMedia("(max-width: 768px)");

    if (mql.matches) {
      aboutScrollPos = 1300;
    }

    this.motion.target = aboutScrollPos;
  },

  tick: function (time) {
    this.motion.current = lerp(
      this.motion.current,
      this.motion.target,
      this.motion.ease
    );

    let t = this.motion.current / this.totalScroll;

    let finalY = 0;

    if (t <= 1) {
      finalY = this.totalTravel * this.curve.getPointAt(t).y;
    } else if (t < this.endingT) {
      //we have passed animation apply constant curve
      finalY = this.totalTravel + -33 * (t - 1);
    } else {
      finalY = this.totalTravel + -33 * (this.endingT - 1);
    }

    this.cam.position.set(this.camP.x, finalY + this.initPosY, this.camP.z);
  },
};
