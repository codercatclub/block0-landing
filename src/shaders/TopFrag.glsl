varying vec3 vWorldPos;
uniform float progress; 

void main() {
  float distToCenter = min(length(vWorldPos)/7.0, 1.0);
  float shouldColor = step(distToCenter,progress);

  gl_FragColor = vec4(shouldColor, 0.0, 0.0, 1.0);
}



