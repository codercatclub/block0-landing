@import ./PerlinNoise;
attribute vec3 color; 

varying vec3 vWorldPos;
varying vec3 vColor;
uniform float center; 
uniform float progress; 
uniform float progressS; 

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vColor = color;

  float col = 1.0 - min(1.0, length(worldPosition.xz));
  worldPosition.y -= 1.2*col * sin(3.14 * progress);
  float col2 = 1.0 - min(1.0, length(worldPosition.xz)/4.0);
  worldPosition.x -= 0.8*sin(3.14 * progressS) * sin(worldPosition.x) * sin(worldPosition.y) * col2;

  vWorldPos = worldPosition.xyz;

  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}
