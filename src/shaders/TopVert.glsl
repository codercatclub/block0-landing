@import ./PerlinNoise;
attribute vec3 color; 

varying vec3 vWorldPos;
varying vec3 vColor;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPosition.xyz;
  vColor = color;
  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}
