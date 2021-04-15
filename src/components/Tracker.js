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
    this.pos = this.el.getAttribute("position");

    this.px = 0;
    this.py = 0;
    this.pz = 0;

    this.target.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      transform-origin: 0px 0px 0px;
      display: block;
      pointer-events: all;
    `;

    console.log("[D] el:", this.target, pos);
  },

  tick: function (time) {
    this.py += 0.1;

    // TODO: Snays magic happens here and this.pos transforms to pixel position on the screen :)

    this.target.style.transform = `translate3d(${this.px}px, ${this.py}px, ${this.pz}px) scale(1)`;
  },
};
