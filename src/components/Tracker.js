const THREE = AFRAME.THREE;

export default {
  multiple: true,
  schema: {
    el: { type: "string" },
    offset: { type: "vec3" },
    alignH: { type: "string" },
    alignW: { type: "string" },
  },

  init: function () {
    // Set initial values
    this.px = 0;
    this.py = 0;
    this.pz = 0;

    this.target = document.getElementById(this.data.el);

    const offset = this.data.offset;

    this.pos = this.el.getAttribute("position").clone().add(offset);

    const cam = document.getElementById("camera");
    this.camera = cam.object3D.getObjectByProperty('type', 'PerspectiveCamera');

    this.target.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      transform-origin: 0px 0px 0px;
      pointer-events: all;
    `;
  },

  updateScreenPos: function () {
    this.camera.getWorldPosition()
    this.screenPos = new THREE.Vector3().copy(this.pos);
    this.screenPos.project(this.camera)

    this.px = (this.screenPos.x *  .5 + .5) * window.innerWidth;
    this.py = (this.screenPos.y * -.5 + .5) * window.innerHeight;
    this.pz = 0;

    if (this.data.alignW === 'center') {
      this.px -= this.target.offsetWidth/2
    }

    if (this.data.alignH === 'center') {
      this.py -= this.target.offsetHeight/2
    }
  },

  tick: function (time) {
    this.updateScreenPos();
    this.target.style.transform = `translate3d(${this.px}px, ${this.py}px, ${this.pz}px)`;
  },
};
