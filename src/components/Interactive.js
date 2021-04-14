const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {

    this.el.addEventListener("object3dset", () => {
      const mesh = this.el.getObject3D("mesh");
      const scaleFactor = 0.1;

      this.el.addEventListener('mouseenter', (evt) => {
        // evt.detail.intersection.point
        mesh.scale.multiplyScalar(1 + scaleFactor);
      });
  
      this.el.addEventListener('mouseleave', (evt) => {
        mesh.scale.multiplyScalar(1 - scaleFactor);
      });
    })

    
  },
  
  tick: function (time) {
    
  },
};
