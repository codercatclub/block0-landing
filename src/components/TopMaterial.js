import AFRAME from "aframe";
const THREE = AFRAME.THREE;

import TopVert from "../shaders/TopVert.glsl";
import TopFrag from "../shaders/TopFrag.glsl";

export default {
  schema: {
    offset: { type: "vec2", default: [-2.63, 1.2] },
    timeMsec: { default: 1 },
    progress: { default: 1 },
    progressY: { default: 1 },
    progressM: { default: 1 },
    center: { default: 0 },
    alpha: { default: 1 },
    base: { default: 0 },
  },

  init: function () {
    this.uniforms = this.initVariables(this.data);

    this.materialOptions = {
      transparent: this.data.alpha < 1.0,
      side: this.data.alpha < 1.0 ? THREE.FrontSide : THREE.DoubleSide,
    };

    //push atleast one
    let mat = this.createMaterial(this.materialOptions);

    this.basicMats = [mat];
    this.materialShaders = [];

    // Set materials on default primitives
    this.setChildMaterials();

    this.el.addEventListener("object3dset", () => {
      this.setChildMaterials();
    });

    const cam = document.querySelector("a-camera");
    this.char = document.querySelector("#char");

    if (!("scroll" in cam.components)) {
      console.log('[-] Missing requred scroll component on', cam);
      return
    }

    this.motion = cam.components.scroll.motion;
  },

  /** Assign material to all child meshes */
  setChildMaterials: function () {
    const { instanced } = this.data;
    this.el.object3D.traverse((child) => {
      if (child.type === "Mesh" && child.name !== "collider") {
        let mat;
        if (!instanced) {
          mat = this.basicMats[0];
        } else {
          // make a new material
          mat = this.createMaterial(this.materialOptions);
          this.basicMats.push(mat);
        }

        if (child.material.map) {
          mat.map = child.material.map;
        }
        child.material = mat;
      }
    });
  },

  createMaterial: function (materialOptions) {
    let mat = new THREE.MeshPhongMaterial(materialOptions);
    mat.defines = {};
    mat.onBeforeCompile = (shader) => {
      shader.uniforms = THREE.UniformsUtils.merge([
        this.uniforms,
        shader.uniforms,
      ]);
      shader.vertexShader = TopVert;
      shader.fragmentShader = TopFrag;
      this.materialShaders.push(shader);
    };

    mat.extensions = {
      derivatives: true,
    };
    return mat;
  },

  initVariables: function (data, type) {
    let key;
    let variables = {};
    for (key in data) {
      let val = data[key];
      if (key.includes("color")) {
        val = new THREE.Color(val);
      }
      variables[key] = {
        value: val,
      };
    }
    return variables;
  },

  update: function (data) {
    if (this.materialShaders.length <= 0) {
      return;
    }

    let key;
    for (key in data) {
      let val = data[key];
      if (key.includes("color")) {
        val = new THREE.Color(val);
      }
      this.materialShaders.forEach((shader) => {
        shader.uniforms[key].value = val;
        shader.uniforms[key].needsUpdate = true;
      });
    }
  },

  tick: function (time, timeDelta) {
    let charPos = this.char.object3D.position.y;
  
    let clampT = Math.max(Math.min(charPos, -6.5), -7.5);
    clampT = -(clampT+ 6.5)/(-6.5 + 7.5)
    let clampTY = charPos;
    let clampM = Math.max(Math.min(charPos, -6.5), -9);
    clampM = -(clampM+ 6.5)/(-6.5 + 9)
    let clampG = Math.max(Math.min(charPos, -35.29), -36.6);
    clampG = -(clampG+ 35.29)/(-35.29 + 36.6)
    let clampS = Math.max(Math.min(charPos, -36.0), -38.6);
    clampS = -(clampS+ 36.0)/(-36.0 + 38.6)

    this.materialShaders.forEach((shader) => {
      shader.uniforms.timeMsec.value = time / 1500;
      shader.uniforms.progress.value = clampT;
      shader.uniforms.progressY.value = clampTY;
      shader.uniforms.progressM.value = clampM;
    });
  },
};
