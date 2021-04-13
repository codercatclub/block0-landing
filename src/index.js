import AFRAME from 'aframe';

require('aframe-extras');
require('aframe-log-component');

import VRButton from './components/VRButton';

import ExampleSystem from './systems/ExampleSystem';
import GLTFPart from './components/GLTFPart';
import Scroll from './components/Scroll';
import CharMover from './components/CharMover';

// Register all shaders

// Register all systems
AFRAME.registerSystem('example-system', ExampleSystem);

// Register all components
AFRAME.registerComponent('vr-button', VRButton);
AFRAME.registerComponent('gltf-part', GLTFPart);
AFRAME.registerComponent('scroll', Scroll);
AFRAME.registerComponent('char-mover', CharMover);

