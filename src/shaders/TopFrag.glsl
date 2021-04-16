@import ./PerlinNoise;

varying vec3 vWorldPos;
uniform vec2 offset; 
uniform float timeMsec; 
uniform float progress; 
uniform float progressY; 
uniform float progressM; 
uniform float alpha; 
uniform float center; 
uniform float base; 
varying vec3 vColor;

void main() {
  float distToCenter = length(vWorldPos)/7.1;
  float shouldColor = step(distToCenter,progress);

  if(base > 0.0) {
    shouldColor = step(distToCenter,progressM);
  }

  float distToCenterY = 1.0 - min((vWorldPos.y-5.9)-progressY, 1.0);

  float r = 0.8 + cnoise(0.1*vec2(vWorldPos.x, vWorldPos.z + timeMsec));
  float g = 0.8 + cnoise(0.2*vec2(vWorldPos.x, vWorldPos.z + timeMsec));
  float b = 0.8 + cnoise(0.15*vec2(vWorldPos.x, vWorldPos.z + timeMsec));

  if(distToCenter * progress > 1.0) {
    // float n = round(-0.06*progressY + 0.0*abs(1.0/vWorldPos.y) + -0.1 + cnoise(vec2(0.2*vWorldPos.xy) + offset));
    float n = round(0.07*abs(progressY) + 1.0*(1.0-distToCenterY) + -0.1 + cnoise(vec2(0.2*vWorldPos.xy) + offset));
    shouldColor = n;
  }


  float alphaToUse = mix(distToCenterY, 1.0, alpha);
  gl_FragColor = vec4(mix(vColor,vec3(min(r,0.9),g,b), shouldColor), alphaToUse);
}



