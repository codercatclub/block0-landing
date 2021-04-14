const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    const obj = this.el.object3D;
    const initPosY = obj.position.y;
    this.startY = 800;
    this.endY = 4000;
    this.movement = -50;

    this.t = initPosY;

    document.addEventListener("wheel", (e) => {
      // our animation runs from 500 - 2000? scaled by screen? 
      let t = Math.min(Math.max(e.pageY, this.startY), this.endY);
      t = (t-this.startY)/(this.endY - this.startY)
      this.t = this.movement*t + initPosY;
      obj.position.set(obj.position.x, this.t, obj.position.z);
      return false;
    });
  },
  
  tick: function (time) {
    // if the scroll pos is within range, we trigger animation
    let clampT = Math.max(Math.min(this.t, -6.5), -7.5);
    window.clampT = -(clampT+ 6.5)/(-6.5 + 7.5)
  },
};
