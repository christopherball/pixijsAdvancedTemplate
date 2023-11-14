#version 300 es
/*  OLD SYNTAX      MODERN SYNTAX   :   PERMISSION
    uniform         uniform         :   read
    attribute       in              :   read
    varying         out             :   read / write    */

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;
in vec2 aVertexPosition;
in vec2 aUvs;
out vec2 vUvs;

void main() {
    vUvs = aUvs;
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0f)).xy, 0.0f, 1.0f);
}