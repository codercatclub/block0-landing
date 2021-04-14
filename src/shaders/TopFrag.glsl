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

  float distToCenterY = 1.0 - min((vWorldPos.y-5.9)-progressY, 1.0);

  float r = 0.8 + cnoise(0.1*vec2(vWorldPos.x, vWorldPos.z + timeMsec));
  float g = 0.8 + cnoise(0.2*vec2(vWorldPos.x, vWorldPos.z + timeMsec));
  float b = 0.8 + cnoise(0.15*vec2(vWorldPos.x, vWorldPos.z + timeMsec));

  float alphaToUse = mix(distToCenterY, 1.0, alpha);
  gl_FragColor = vec4(mix(vColor,vec3(min(r,0.9),g,b), shouldColor), alphaToUse);
}



