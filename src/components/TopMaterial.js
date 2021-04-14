import AFRAME from "aframe";
const THREE = AFRAME.THREE;

import TopVert from "../shaders/TopVert.glsl";
import TopFrag from "../shaders/TopFrag.glsl";

export default {
  schema: {
    timeMsec: { default: 1 },
    progress: { default: 1 },
    progressY: { default: 1 },
    center: { default: 0 },
    alpha: { default: 1 },
    lines: { default: 0 },
  },

  init: function () {
    this.uniforms = this.initVariables(this.data);

    this.materialOptions = {
      transparent : (this.data.alpha < 1.0),
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
      let val = data[key]
      if(key.includes("color")) {
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
      let val = data[key]
      if(key.includes("color")) {
        val = new THREE.Color(val);
      }
      this.materialShaders.forEach((shader) => {
        shader.uniforms[key].value = val;
        shader.uniforms[key].needsUpdate = true;
      });
    }
  },

  tick: function (time, timeDelta) {
    this.materialShaders.forEach((shader) => {
      shader.uniforms.timeMsec.value = time/2000;
      shader.uniforms.progress.value = window.clampT;
      shader.uniforms.progressY.value = window.clampTY;
    });
  },
};
