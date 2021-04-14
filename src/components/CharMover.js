const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    const obj = this.el.object3D;
    const initPosY = obj.position.y;
    console.log(obj.position.y)
    this.startY = 800;
    this.endY = 4000;
    this.movement = -50;

    document.addEventListener("wheel", (e) => {
      // our animation runs from 500 - 2000? scaled by screen? 
      let t = Math.min(Math.max(e.pageY, this.startY), this.endY);
      t = (t-this.startY)/(this.endY - this.startY)
      console.log(this.movement*t + initPosY)
      obj.position.set(obj.position.x, this.movement*t + initPosY, obj.position.z);
      return false;
    });
  },
  
  tick: function (time) {
    // if the scroll pos is within range, we trigger animation
  },
};
