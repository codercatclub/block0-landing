const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    this.lerpT = 0;

    this.el.addEventListener("object3dset", () => {
      const mesh = this.el.getObject3D("mesh");
      this.largeScale = new THREE.Vector3().copy(mesh.scale).multiplyScalar(1.1)
      this.originalScale = new THREE.Vector3().copy(mesh.scale)
      this.mesh = mesh;
      this.mouseInside = false;
      this.el.addEventListener('click', (evt) => {
        window.open("https://github.com", '_blank');
      });

      this.el.addEventListener('mouseenter', (evt) => {
        this.mouseInside = true
      });
      this.el.addEventListener('mouseleave', (evt) => {
        this.mouseInside = false
      });
    })

    
  },
  
  tick: function (time, dt) {
    if(this.mouseInside) {
      this.lerpT = Math.min(this.lerpT + dt/50, 1.0)
    } else {
      this.lerpT = Math.max(this.lerpT - dt/50, 0.0);
    }
    if(this.mesh) {
      this.mesh.scale.copy(this.originalScale).lerp(this.largeScale, this.lerpT);
    }
  },
};
