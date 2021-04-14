@import ./PerlinNoise;
attribute vec3 color; 

varying vec3 vWorldPos;
varying vec3 vColor;
uniform float center; 
uniform float progress; 

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vColor = color;

  float col = 1.0 - min(1.0, length(worldPosition.xz));
  worldPosition.y -= 1.0*col * sin(3.14 * progress);

  vWorldPos = worldPosition.xyz;

  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}
