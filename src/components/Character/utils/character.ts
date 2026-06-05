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
        async (gltf) => {
          const character = gltf.scene;
          // Scale and position to fit the scene (camera is at z=24.7, y=13.1)
          character.scale.set(8, 8, 8);
          character.position.set(0, 0, 0);
          await renderer.compileAsync(character, camera, scene);
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              if (mesh.material) {
                const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                newMat.color = new THREE.Color("#1a3a5c");
                mesh.material = newMat;
              }
              child.castShadow = true;
              child.receiveShadow = true;
              mesh.frustumCulled = true;
            }
          });
          resolve(gltf);
          setCharTimeline(null, camera);
          setAllTimeline();
          dracoLoader.dispose();
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          setCharTimeline(null, camera);
          setAllTimeline();
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
