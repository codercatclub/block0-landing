const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    const obj = this.el.object3D;
    const initPosY = obj.position.y;
    this.startY = 100;
    this.endY = 2080;
    this.speed = -0.033;
    window.scrollTo(0, 0);

    this.pageY = 0;

    document.addEventListener("wheel", (e) => {

      this.pageY += parseInt(e.deltaY);
      this.pageY = Math.max(this.pageY, 0);

      // our animation runs from 500 - 2000? scaled by screen? 
      let t = Math.max(this.pageY - this.startY, 0);
      obj.position.set(obj.position.x, this.speed*t + initPosY, obj.position.z);
      return false;
    });
  },
  
  tick: function (time) {
    
  },
};
