const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    const obj = this.el.object3D;
    const initPosY = obj.position.y;
    this.startY = 0;
    this.endY = 2000;
    this.totalMovement = -50;
    this.t = initPosY;
    this.pageY = 0;

    document.addEventListener("wheel", (e) => {
      this.pageY += parseInt(e.deltaY);
      this.pageY = Math.max(this.pageY, 0);

      // our animation runs from 500 - 2000? scaled by screen? 
      let t = Math.min(Math.max(this.pageY, this.startY), this.endY);
      t = (t-this.startY)/(this.endY - this.startY)
      t = 1 - Math.pow(1 - t, 1.2)
      this.t = this.totalMovement*t + initPosY;
      obj.position.set(obj.position.x, this.t, obj.position.z);
      return false;
    });
  },
  
  tick: function (time) {
    // if the scroll pos is within range, we trigger animation
    let clampT = Math.max(Math.min(this.t, -6.5), -7.5);
    window.clampT = -(clampT+ 6.5)/(-6.5 + 7.5)
    window.clampTY = this.el.object3D.position.y
    let clampG = Math.max(Math.min(this.t, -35.29), -36.6);
    window.clampG = -(clampG+ 35.29)/(-35.29 + 36.6)
  },
};
