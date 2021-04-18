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
  
    this.pos = new THREE.Vector3();
    this.el.object3D.getWorldPosition(this.pos).add(this.data.offset);

    this.target = document.getElementById(this.data.el);

    const cam = document.getElementById("camera");
    this.camera = cam.object3D.getObjectByProperty("type", "PerspectiveCamera");

    this.target.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      transform-origin: 0px 0px 0px;
      pointer-events: all;
      z-index: 10;
    `;
  },

  updateScreenPos: function () {
    this.screenPos = new THREE.Vector3().copy(this.pos);
    this.screenPos.project(this.camera);

    this.px = (this.screenPos.x * 0.5 + 0.5) * window.innerWidth;
    this.py = (this.screenPos.y * -0.5 + 0.5) * window.innerHeight;
    this.pz = 0;

    if (this.data.alignW === "center") {
      this.px -= this.target.offsetWidth / 2;
    }

    if (this.data.alignH === "center") {
      this.py -= this.target.offsetHeight / 2;
    }
  },

  tick: function (time) {
    this.el.object3D.getWorldPosition( this.pos ).add(this.data.offset);

    this.updateScreenPos();
    this.target.style.transform = `translate3d(${this.px}px, ${this.py}px, ${this.pz}px)`;
  },
};
