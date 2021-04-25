import AFRAME from "aframe";
const THREE = AFRAME.THREE;

import CharVert from "../shaders/CharVert.glsl";
import CharFrag from "../shaders/CharFrag.glsl";

export default {
  schema: {
    timeMsec: { default: 1 },
    transitionT: { default: 1 },
    useCol: { default: 0 },
  },

  init: function () {
    this.useHoverTransition = this.data.transitionT > 0;
    this.data.useCol = this.data.transitionT > 0 ? 1 : 0;
    this.uniforms = this.initVariables(this.data);
    this.materialOptions = {
    };

    //push atleast one
    let mat = this.createMaterial(this.materialOptions);

    this.basicMats = [mat];
    this.materialShaders = [];

    // Set materials on default primitives
    this.setChildMaterials();
    this.transitionT = 1;
    this.el.addEventListener("object3dset", () => {
      this.setChildMaterials();
      if(this.useHoverTransition) {
        this.transitionT = 0;
        this.el.addEventListener('mouseenter', (evt) => {
          this.mouseInside = true
        });
        this.el.addEventListener('mouseleave', (evt) => {
          this.mouseInside = false
        });
      }
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
      shader.vertexShader = CharVert;
      shader.fragmentShader = CharFrag;
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
    if(this.useHoverTransition) {
      let move = this.mouseInside ? 1 : -1;
      this.transitionT += 0.003 * move * timeDelta;
      this.transitionT = Math.min(Math.max(this.transitionT, 0),1)
    }
    this.materialShaders.forEach((shader) => {
      shader.uniforms.timeMsec.value = time/1500;
      shader.uniforms.transitionT.value = this.transitionT;
    });
  },
};
