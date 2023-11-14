#version 300 es
precision highp float;

out vec4 outColor;
uniform vec3 iResolution;
uniform float iTime;

// Based on: https://www.shadertoy.com/view/clfGW8
void main() {
    vec4 O = vec4(0.0f);
    vec2 F = gl_FragCoord.xy;

    vec2 r = iResolution.xy;
    float i = .3f, l = length(F += F - r) / r.y + i, t = iTime;

    for (O *= 0.f; i < 12.f; O += length(min(r.y / abs(F), r)) / 3e2f * (cos(++t + i + vec4(0, 1, 2, 0)) * l + l)) {
        F *= mat2(cos(l * .2f - i++ * --t / 1e2f + vec4(0, 33, 11, 0)));
    }
    outColor = O;
}