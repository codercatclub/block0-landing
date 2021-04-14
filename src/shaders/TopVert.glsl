@import ./PerlinNoise;
attribute vec3 color; 

varying vec3 vWorldPos;
varying vec3 vColor;
uniform float center; 
uniform float progress; 

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);

  // radial distance to 0 
  float distToCenter = length(worldPosition.xz);
  float falloff = 1.0 - min(length(worldPosition.xz), 1.0);
  worldPosition.y -= 2.0*center*falloff*sin(3.14*progress)*(1.0 - sin(2.0*distToCenter));

  vWorldPos = worldPosition.xyz;

  vColor = color;
  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}
