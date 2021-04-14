import AFRAME from 'aframe';

require('aframe-extras');
require('aframe-log-component');
require('aframe-mouse-cursor-component')

import VRButton from './components/VRButton';

import ExampleSystem from './systems/ExampleSystem';
import GLTFPart from './components/GLTFPart';
import Scroll from './components/Scroll';
import CharMover from './components/CharMover';
import TopMaterial from './components/TopMaterial';
import Interactive from './components/Interactive';

// Register all shaders

// Register all systems
AFRAME.registerSystem('example-system', ExampleSystem);

// Register all components
AFRAME.registerComponent('vr-button', VRButton);
AFRAME.registerComponent('gltf-part', GLTFPart);
AFRAME.registerComponent('scroll', Scroll);
AFRAME.registerComponent('char-mover', CharMover);
AFRAME.registerComponent('top-material', TopMaterial);
AFRAME.registerComponent('interactive', Interactive);

