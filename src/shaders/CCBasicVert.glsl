#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
@import ./FogVertPars;
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
@import ./PerlinNoise;

#ifdef FAKE_SUBSURFACE
varying vec3 vViewDir;
varying vec3 vNormal;
#endif

varying float vInwardFacing;

void main() {
	#include <uv_vertex>

	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	//#include <project_vertex>
	//#include <worldpos_vertex>

	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;

	vec4 mvPosition = viewMatrix * worldPosition;

	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>

	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	@import ./FogVert;

	#ifdef FAKE_SUBSURFACE
	vViewDir = normalize(worldPosition.xyz - cameraPosition.xyz);
	vNormal = normal;
	#endif

	#ifdef CAUSTIC
	vInwardFacing = dot(normalize(position), normal);
	#endif
}