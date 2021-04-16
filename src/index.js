import AFRAME from 'aframe';

require('aframe-extras');
require('aframe-log-component');

import VRButton from './components/VRButton';

import ExampleSystem from './systems/ExampleSystem';
import GLTFPart from './components/GLTFPart';
import Scroll from './components/Scroll';
import CharMover from './components/CharMover';
import TopMaterial from './components/TopMaterial';
import GridMaterial from './components/GridMaterial';
import Interactive from './components/Interactive';
import Link from './components/Link';
import Tracker from './components/Tracker';
import Layout from './components/Layout';
import GlobalSettings from './components/GlobalSettings';

// Web components
import Header from './components/Header';

// Register all shaders

// Register all systems
AFRAME.registerSystem('example-system', ExampleSystem);

// Register all components
AFRAME.registerComponent('vr-button', VRButton);
AFRAME.registerComponent('gltf-part', GLTFPart);
AFRAME.registerComponent('scroll', Scroll);
AFRAME.registerComponent('char-mover', CharMover);
AFRAME.registerComponent('top-material', TopMaterial);
AFRAME.registerComponent('grid-material', GridMaterial);
AFRAME.registerComponent('interactive', Interactive);
AFRAME.registerComponent('hlink', Link);
AFRAME.registerComponent('tracker', Tracker);
AFRAME.registerComponent('layout', Layout);
AFRAME.registerComponent('settings', GlobalSettings);

// Register web components
customElements.define("header-section", Header);