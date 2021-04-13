const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    const obj = this.el.object3D;

    document.addEventListener("wheel", (e) => {
      const delta = parseInt(e.deltaY);
      let newPosY = obj.position.y - Math.sign(delta);

      if (initPosY < obj.position.y) {
        newPosY = initPosY;
      }

      obj.position.set(obj.position.x, newPosY, obj.position.z);
      return false;
    });
  },
  
  tick: function (time) {
    
  },
};
