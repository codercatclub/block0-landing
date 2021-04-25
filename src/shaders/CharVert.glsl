@import ./PerlinNoise;
attribute vec3 color;

varying vec3 vColor;
varying vec3 vPos;
varying vec3 vWorldPos;

uniform float timeMsec; 
uniform float transitionT;

void main() {
  vColor = color;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPosition.xyz;
  worldPosition.x += 0.1*sin(3.14*transitionT)*sin(10.0*worldPosition.y + 2.0 * worldPosition.z + 15.0*timeMsec);
  vPos = position;
  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}
