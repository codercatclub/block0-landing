const THREE = AFRAME.THREE;

export default {
  multiple: true,
  schema: {
    el: { type: "string" },
    offset: { type: "vec3" },
  },

  init: function () {
    this.target = document.getElementById(this.data.el);
    const offset = this.data.offset;
    this.pos = this.el.getAttribute("position").clone().add(offset);

    let cam = document.getElementById("camera");
    this.camera = cam.object3D.children[0];

    this.target.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      transform-origin: 0px 0px 0px;
      display: block;
      pointer-events: all;
    `;

    console.log("[D] el:", this.target, this.screenPos);
  },

  updateScreenPos: function() {
    this.camera.getWorldPosition()
    this.screenPos = new THREE.Vector3().copy(this.pos);
    this.screenPos.project(this.camera)

    this.px = (this.screenPos.x *  .5 + .5) * window.innerWidth;
    this.py = (this.screenPos.y * -.5 + .5) * window.innerHeight;
    this.pz = 0;

    //TODO: auto scale
    this.scale = 1;

  },

  tick: function (time) {
    this.updateScreenPos();
    this.target.style.transform = `translate3d(${this.px}px, ${this.py}px, ${this.pz}px) scale(${this.scale})`;
  },
};
