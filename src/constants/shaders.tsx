export const COTTON_SHADER = `vec3 baseFirst = vec3(79./255., 38./255., 233./255.);
vec3 accent =  vec3(0./255., 0./255., 0./255.);
vec3 baseSecond =  vec3(255./255., 152./255., 162./255.);
vec3 baseThird =  vec3(79./255., 38./255., 233./255.);`;

export const ORANGE_SHADER = `vec3 baseFirst = vec3(238./255., 127./255., 39./255.);
vec3 accent =  vec3(0./255., 0./255., 0./255.);
vec3 baseSecond =  vec3(255./255., 152./255., 162./255.);
vec3 baseThird =  vec3(238./255., 127./255., 39./255.);`;

export const MINT_SHADER = `vec3 baseFirst = vec3(77./255., 36./255., 174./255.);
vec3 accent =  vec3(0./255., 0./255., 0./255.);
vec3 baseSecond =  vec3(139./255., 236./255., 236./255.);
vec3 baseThird =  vec3(0./255., 98./255., 212./255.);`;

export const GRASS_SHADER = `vec3 baseFirst = vec3(6./255., 37./255., 15./255.);
vec3 accent =  vec3(0./255., 0./255., 0./255.);
vec3 baseSecond =  vec3(6./255., 223./255., 158./255.);
vec3 baseThird =  vec3(6./255., 37./255., 15./255.);`;

export const WATERMELON_SHADER = `vec3 baseFirst = vec3(238./255., 46./255., 49./255.);
vec3 accent =  vec3(0./255., 0./255., 0./255.);
vec3 baseSecond =  vec3(255./255., 217./255., 217./255.);
vec3 baseThird =  vec3(238./255., 46./255., 49./255.);`;

export const PARIS_SHADER = `vec3 baseFirst = vec3(243./255., 11./255., 8./255.);
vec3 accent =  vec3(0./255., 0./255., 0./255.);
vec3 baseSecond = vec3(239./255., 92./255., 9./255.);
vec3 baseThird =  vec3(243./255., 11./255., 8./255.);`;

export const vertShader = `    
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform vec2 pixels;
    float PI = 3.141592653589793238;
    void main() {
        vUv = uv;
        vPosition = position;

        vec4 rotatedPosition = mat4(
            cos(215.5), -sin(215.5), 0.0, 0.0,
            sin(215.5), cos(215.5), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ) * modelViewMatrix * vec4(position, 1.0);

        gl_Position = projectionMatrix * rotatedPosition;
    }
`;

export const getFragShader = (CURRENT_SHADER: any) => {
  return `
    uniform float time;
    uniform float progress;
    uniform sampler2D texture1;
    uniform vec4 resolution;
    varying vec2 vUv;
    varying vec3 vPosition;
    float PI = 3.141592653589793238;

    // NOISE
    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

    float noise(vec3 p){
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float lines(vec2 uv, float offset){
        return smoothstep(
            0., 0.5 + offset*0.5,
            0.5*abs((sin(uv.x*35.) + offset*2.))
        );
    }

    mat2 rotate2D(float angle){
        return mat2(
            cos(angle),-sin(angle),
            sin(angle),cos(angle)
        );
    }

    void main()	{
        ${CURRENT_SHADER}

        float n = noise(vPosition +time);
        // vec3 color1 = vec3(1.,0.,0.);
        // vec3 color2 = vec3(0.,1.,0.);
        // vec3 color3 = vec3(0.,0.,1.);

        vec2 baseUV = rotate2D(n)*vPosition.xy*0.06;
        float basePattern = lines(baseUV, 0.5);
        float secondPattern = lines(baseUV, 0.2);

        vec3 baseColor = mix(baseFirst,baseSecond,basePattern);
        vec3 secondBaseColor = mix(baseColor,accent,secondPattern);


        // vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
        gl_FragColor = vec4(vec3(secondBaseColor),1.);
    }
  `;
};

/* MONOPO BLUE rgb(1, 127, 247) rgb(101, 215, 225)*/
