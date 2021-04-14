@import ./PerlinNoise;

varying vec3 vWorldPos;
uniform float timeMsec; 
uniform float progress; 
uniform float progressY; 
uniform float alpha; 
uniform float center; 
uniform float lines; 
varying vec3 vColor;

void main() {
  float distToCenter = min(length(vWorldPos)/7.0, 1.0);
  float shouldColor = step(distToCenter,progress);

  float nonStep = 1.0;
  if(vWorldPos.y - 6.50 > progressY) {
      nonStep = 0.0;
  }

  float r = 0.1 + cnoise(0.1*vec2(vWorldPos.x, vWorldPos.z + timeMsec));
  float g = 0.1 + cnoise(0.2*vec2(vWorldPos.x, vWorldPos.z + timeMsec));

  float alphaToUse = mix(nonStep, 1.0, alpha);
  gl_FragColor = vec4(mix(vColor,vec3(r,g,0.5), shouldColor), alphaToUse);
}



