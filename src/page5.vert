#version 300 es

in vec2 aVertexPosition;
uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

void main() {
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0f)).xy, 0.0f, 1.0f);
}