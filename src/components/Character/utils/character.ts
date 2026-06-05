import * as THREE from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

// Free professional character GLB from Three.js CDN
const CHARACTER_URL =
  "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r152/examples/models/gltf/Soldier.glb";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise((resolve, reject) => {
      loader.load(
        CHARACTER_URL,
        (gltf) => {
          const character = gltf.scene;
          // Scale and position to fit the scene
          character.scale.set(8, 8, 8);
          character.position.set(0, 0, 0);
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              child.castShadow = true;
              child.receiveShadow = true;
              mesh.frustumCulled = false;
            }
          });
          // Resolve immediately so Scene.tsx can add to scene and call progress.loaded()
          resolve(gltf);
          setCharTimeline(null, camera);
          setAllTimeline();
          dracoLoader.dispose();
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          // Resolve with a minimal dummy to prevent hanging
          resolve({ scene: new THREE.Object3D() });
          setCharTimeline(null, camera);
          setAllTimeline();
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
