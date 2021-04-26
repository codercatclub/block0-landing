const THREE = AFRAME.THREE;

export default {
  schema: {
    pixelRatio: { type: "number", default: 1 },
  },

  init: function () {
    this.el.renderer.setPixelRatio(
      this.data.pixelRatio * window.devicePixelRatio
    );

    // NOTE (Kirill): Handle about scroll when navigating from another page.
    // This should not be here but whatever 😛
    const section = location.hash.split("=").pop();

    if (section === "about") {
      const cam = document.querySelector("a-camera");
      const aboutScrollPos = 4100;

      cam.components["scroll"].motion.target = aboutScrollPos;
    }
  },
};
