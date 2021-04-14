@import ./PerlinNoise;

uniform float timeMsec; 
uniform float progress; 
varying vec3 vColor;
varying vec3 vWorldPos;

void main() {

  gl_FragColor = vec4(vColor, 1.0);
}



