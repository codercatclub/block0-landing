const THREE = AFRAME.THREE;

export default {
  schema: {
    pixelRatio: { type: "number", default: 1 }
  },

  init: function () {
    this.el.renderer.setPixelRatio(this.data.pixelRatio*window.devicePixelRatio);
  },
};
