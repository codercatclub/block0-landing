@import ./PerlinNoise;

uniform float timeMsec; 
uniform float transitionT;
uniform float useCol;
uniform float count;
varying vec3 vColor;
varying vec3 vPos;
varying vec3 vWorldPos;

float tvNoise (vec2 p, float ta, float tb) {
    return fract(sin(p.x*ta+p.y*tb)*5678.);
}

void main() {
  float c = 0.5*tvNoise(vPos.xy + vec2(10.0,10.0), vPos.z, timeMsec);
  float cutoff = 0.7 + 0.1*sin(4.0*vWorldPos.x + timeMsec) + 0.1 *cos(3.7*vWorldPos.z + 1.8*timeMsec);
  vec3 fColor = vColor + (1.0 - cutoff*length(vPos.xyz))*vec3(1.0, 1.0, 1.0);
  

  fColor.r += useCol * rand1(vec2(count, 1.0));
  fColor.g += useCol * rand1(vec2(count + 0.1, 1.0)) + 0.3 * sin(2.0 * vWorldPos.y + 3.0*timeMsec);
  fColor.b += useCol * rand1(vec2(count + 0.4, 1.0)) + 0.3 * sin(3.0*vWorldPos.y + 3.0*timeMsec);

  fColor = max(vColor, fColor*1.7*(c + 0.4*cutoff));

  gl_FragColor = vec4(mix(vColor, fColor, transitionT), 1.0);
}



