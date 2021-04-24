@import ./PerlinNoise;
attribute vec3 color;

varying vec3 vColor;
varying vec3 vPos;
varying vec3 vWorldPos;

void main() {
  vColor = color;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPosition.xyz;
  vPos = position;
  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}
