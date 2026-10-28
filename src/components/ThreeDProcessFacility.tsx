import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Eye, Layers, Activity, Maximize2, RotateCcw, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Language } from '../types/portfolio.ts';
import { TRANSLATIONS } from '../data/translations.ts';

export type ModelTarget = 'plant' | 'separator' | 'column' | 'exchanger' | 'flare';
export type ViewMode = 'pbr' | 'xray' | 'thermal' | 'wireframe';

interface HotspotData {
  tag: string;
  name: string;
  nameFr: string;
  spec: string;
  specFr: string;
  position: [number, number, number];
}

const HOTSPOTS: Record<ModelTarget, HotspotData[]> = {
  plant: [
    { tag: 'V-0001', name: '3-Phase Inlet Separator', nameFr: 'Séparateur Triphasique d’Entrée', spec: '85.75 barg · ID 2400 mm · 36.19 m³', specFr: '85,75 barg · DI 2400 mm · 36,19 m³', position: [-4, 1.8, 0] },
    { tag: 'C-101', name: 'Amine Sweetening Column', nameFr: 'Colonne de Désacidification aux Amines', spec: '1200 psig · 30 MMSCFD acid gas removal', specFr: '1200 psig · Traitement 30 MMSCFD gaz acide', position: [3, 4.5, -2] },
    { tag: 'E-101', name: 'TEMA Gas-Gas Exchanger', nameFr: 'Échangeur Gaz-Gaz TEMA', spec: 'Aspen EDR rated · 14.8 MW duty', specFr: 'Calculé sur Aspen EDR · Puissance 14,8 MW', position: [0, 1.2, 3] },
    { tag: 'FL-01', name: 'High-Pressure Flare Stack', nameFr: 'Torche Haute Pression', spec: 'API 521 dynamic blowdown relief', specFr: 'Dépressurisation dynamique API 521', position: [8, 6, -5] },
  ],
  separator: [
    { tag: 'N1', name: 'Feed Inlet Nozzle', nameFr: 'Tubulure d’Alimentation Charge', spec: '14" NB · Multi-vane distributor box', specFr: '14" NB · Boîte de distribution à aubes', position: [-2.2, 2.5, 0] },
    { tag: 'DEM-01', name: 'Wire Mesh Demister Pad', nameFr: 'Matelas Dévésiculeur Métallique', spec: '38 micron separation threshold', specFr: 'Seuil d’arrêt 38 microns', position: [1.8, 2.4, 0] },
    { tag: 'W-01', name: 'Liquid Overflow Weir', nameFr: 'Lame Déversante de Trop-Plein', spec: 'Oil / aqueous separation baffle', specFr: 'Cloison séparation huile / phase aqueuse', position: [1.5, 1.2, 0] },
    { tag: 'PSV-101', name: 'Safety Relief Valve', nameFr: 'Soupape de Sûreté PSV', spec: 'API 520 / 521 fire case relief', specFr: 'Décharge cas d’incendie API 520 / 521', position: [0, 2.8, 0] },
  ],
  column: [
    { tag: 'T-TOP', name: 'Demister & Vapor Outlet', nameFr: 'Dévésiculeur & Sortie Vapeur Tête', spec: 'Sweet treated gas overhead', specFr: 'Gaz doux traité en tête', position: [0, 7.8, 0] },
    { tag: 'T-MID', name: 'Fractionation Trays / Packing', nameFr: 'Plateaux / Garnissage Structuré', spec: 'High-capacity structured packing', specFr: 'Garnissage haute efficacité', position: [0, 4.5, 0] },
    { tag: 'N-FEED', name: 'Feed Gas Distribution Nozzle', nameFr: 'Tubulure d’Injection Gaz Brut', spec: 'Uniform vapor entry ring', specFr: 'Anneau de répartition uniforme', position: [0.8, 2.2, 0] },
    { tag: 'BTM-SUMP', name: 'Rich Amine Liquid Sump', nameFr: 'Puisard Fond Amine Riche', spec: 'Residence time control & LLL trip', specFr: 'Temps de séjour & sécurité niveau très bas', position: [0, 0.6, 0] },
  ],
  exchanger: [
    { tag: 'CH-HEAD', name: 'Channel Head Bonnet', nameFr: 'Boîte de Distribution Côté Tubes', spec: 'Multi-pass partition divider', specFr: 'Cloison de séparation passes', position: [-3.2, 1.2, 0] },
    { tag: 'BUNDLE', name: 'TEMA U-Tube Bundle', nameFr: 'Faisceau Tubulaire en U TEMA', spec: 'Segmental baffles & 3/4" OD tubes', specFr: 'Chicanes segmentaires & tubes 3/4"', position: [0, 1.2, 0] },
    { tag: 'SH-INLET', name: 'Shell-Side Inlet Nozzle', nameFr: 'Tubulure Entrée Côté Calandre', spec: 'Hot process gas inlet', specFr: 'Entrée gaz chaud de procédé', position: [-1.5, 2.3, 0] },
  ],
  flare: [
    { tag: 'KOD-01', name: 'Flare Knock-Out Drum', nameFr: 'Ballon Séparateur de Torche (KOD)', spec: 'Horizontal liquid droplet disengagement', specFr: 'Désengagement liquide horizontal', position: [-1.5, 1.2, 0] },
    { tag: 'TIP-01', name: 'Smokeless Flare Tip', nameFr: 'Nez de Torche sans Fumée', spec: 'Steam / gas assist low NOx burner', specFr: 'Brûleur bas NOx assisté vapeur/gaz', position: [3, 9.5, 0] },
  ],
};

interface FacilityProps {
  lang?: Language;
}

export const ThreeDProcessFacility: React.FC<FacilityProps> = ({ lang = 'en' }) => {
  const t = TRANSLATIONS[lang].facility;
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState<ModelTarget>('plant');
  const [viewMode, setViewMode] = useState<ViewMode>('pbr');
  const [flowAnimation, setFlowAnimation] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<HotspotData | null>(null);
  const [isControlsCollapsed, setIsControlsCollapsed] = useState(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelsGroupRef = useRef<Record<ModelTarget, THREE.Group> | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const particlePositionsRef = useRef<Float32Array | null>(null);
  const particleCount = 200;

  // Initialize Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL per Three.js skill
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a0e17);
    scene.fog = new THREE.FogExp2(0x0a0e17, 0.025);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 540;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(10, 8, 14);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio Environment lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-Point Lighting
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    keyLight.position.set(12, 18, 10);
    keyLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xa5c4e8, 1.2);
    fillLight.position.set(-10, 12, -8);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 0.8);
    scene.add(hemiLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // slightly above ground
    controls.minDistance = 3;
    controls.maxDistance = 30;
    controls.target.set(0, 2, 0);

    // Ground Grid & Foundation Platform
    const gridHelper = new THREE.GridHelper(32, 32, 0x0284c7, 0x1e293b);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Concrete Skid Foundation Slab
    const slabGeo = new THREE.BoxGeometry(24, 0.4, 18);
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.85,
      metalness: 0.1,
    });
    const slabMesh = new THREE.Mesh(slabGeo, slabMat);
    slabMesh.position.y = -0.2;
    slabMesh.receiveShadow = !isSoftwareGl;
    scene.add(slabMesh);

    // Reusable Materials
    const carbonSteelMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // industrial slate
      roughness: 0.35,
      metalness: 0.75,
    });

    const stainlessMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.9,
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.3,
      metalness: 0.8,
    });

    const safetyYellowMat = new THREE.MeshStandardMaterial({
      color: 0xeab308,
      roughness: 0.5,
      metalness: 0.1,
    });

    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
      metalness: 0.6,
    });

    // --- PROCEDURAL EQUIPMENT MODEL BUILDERS ---
    // 1. HORIZONTAL 3-PHASE SEPARATOR (V-0001)
    function buildSeparator(): THREE.Group {
      const group = new THREE.Group();

      // Main Cylinder Shell (Horizontal, 2.4m dia x 7.2m length)
      const shellGeo = new THREE.CylinderGeometry(1.2, 1.2, 5.0, 32);
      shellGeo.rotateZ(Math.PI / 2);
      const shellMesh = new THREE.Mesh(shellGeo, carbonSteelMat);
      shellMesh.position.y = 2.0;
      shellMesh.castShadow = !isSoftwareGl;
      shellMesh.name = 'separator_shell';
      group.add(shellMesh);

      // 2:1 Elliptical Dished Heads (Hemispheres scaled in X)
      const headLeftGeo = new THREE.SphereGeometry(1.2, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      headLeftGeo.rotateZ(Math.PI / 2);
      headLeftGeo.scale(0.5, 1, 1);
      const headLeft = new THREE.Mesh(headLeftGeo, carbonSteelMat);
      headLeft.position.set(-2.5, 2.0, 0);
      headLeft.castShadow = !isSoftwareGl;
      group.add(headLeft);

      const headRightGeo = new THREE.SphereGeometry(1.2, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      headRightGeo.rotateZ(-Math.PI / 2);
      headRightGeo.scale(0.5, 1, 1);
      const headRight = new THREE.Mesh(headRightGeo, carbonSteelMat);
      headRight.position.set(2.5, 2.0, 0);
      headRight.castShadow = !isSoftwareGl;
      group.add(headRight);

      // Support Saddles (x2)
      [-1.6, 1.6].forEach((x) => {
        const saddleGeo = new THREE.BoxGeometry(0.5, 1.0, 2.2);
        const saddle = new THREE.Mesh(saddleGeo, carbonSteelMat);
        saddle.position.set(x, 0.5, 0);
        saddle.castShadow = !isSoftwareGl;
        group.add(saddle);

        const basePlateGeo = new THREE.BoxGeometry(0.7, 0.1, 2.4);
        const basePlate = new THREE.Mesh(basePlateGeo, carbonSteelMat);
        basePlate.position.set(x, 0.05, 0);
        group.add(basePlate);
      });

      // Inlet Nozzle (Top Left, 14" NB)
      const inletNozzleGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 16);
      const inletNozzle = new THREE.Mesh(inletNozzleGeo, pipeMat);
      inletNozzle.position.set(-2.0, 3.4, 0);
      group.add(inletNozzle);

      // Inlet Flange
      const inletFlangeGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
      const inletFlange = new THREE.Mesh(inletFlangeGeo, stainlessMat);
      inletFlange.position.set(-2.0, 3.8, 0);
      group.add(inletFlange);

      // Gas Outlet Nozzle (Top Right)
      const gasOutGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 16);
      const gasOut = new THREE.Mesh(gasOutGeo, pipeMat);
      gasOut.position.set(1.8, 3.4, 0);
      group.add(gasOut);

      // Demister Box inside/on top
      const demisterGeo = new THREE.BoxGeometry(0.8, 0.6, 0.8);
      const demister = new THREE.Mesh(demisterGeo, stainlessMat);
      demister.position.set(1.8, 2.7, 0);
      demister.name = 'demister';
      group.add(demister);

      // Safety Relief Valve (PSV) on top
      const psvStemGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 12);
      const psvStem = new THREE.Mesh(psvStemGeo, stainlessMat);
      psvStem.position.set(0, 3.3, 0);
      group.add(psvStem);

      const psvBodyGeo = new THREE.BoxGeometry(0.25, 0.3, 0.25);
      const psvBody = new THREE.Mesh(psvBodyGeo, brassMat);
      psvBody.position.set(0, 3.7, 0);
      group.add(psvBody);

      // Bottom Water Boot & Drain Nozzle
      const bootGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.7, 16);
      const boot = new THREE.Mesh(bootGeo, carbonSteelMat);
      boot.position.set(-1.0, 0.6, 0);
      group.add(boot);

      // Oil Outlet Nozzle
      const oilNozzleGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 16);
      const oilNozzle = new THREE.Mesh(oilNozzleGeo, pipeMat);
      oilNozzle.position.set(2.0, 0.7, 0);
      group.add(oilNozzle);

      // Internal Overflow Weir Baffle (visible in X-Ray / transparent mode)
      const weirGeo = new THREE.BoxGeometry(0.05, 1.2, 2.2);
      const weir = new THREE.Mesh(weirGeo, stainlessMat);
      weir.position.set(1.4, 1.4, 0);
      weir.name = 'weir_baffle';
      group.add(weir);

      // Level Bridle Piping on Front
      const bridlePipeGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 12);
      const bridle = new THREE.Mesh(bridlePipeGeo, stainlessMat);
      bridle.position.set(0.5, 2.0, 1.4);
      group.add(bridle);

      return group;
    }

    // 2. VERTICAL FRACTIONATION / AMINE COLUMN (C-101)
    function buildColumn(): THREE.Group {
      const group = new THREE.Group();

      // Skirt base (bottom cylinder)
      const skirtGeo = new THREE.CylinderGeometry(1.0, 1.1, 1.5, 24);
      const skirt = new THREE.Mesh(skirtGeo, carbonSteelMat);
      skirt.position.y = 0.75;
      skirt.castShadow = !isSoftwareGl;
      group.add(skirt);

      // Main Column Shell (tall vertical cylinder)
      const colGeo = new THREE.CylinderGeometry(0.9, 0.9, 7.0, 24);
      const col = new THREE.Mesh(colGeo, carbonSteelMat);
      col.position.y = 5.0;
      col.castShadow = !isSoftwareGl;
      col.name = 'column_shell';
      group.add(col);

      // Top Dome
      const topDomeGeo = new THREE.SphereGeometry(0.9, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const topDome = new THREE.Mesh(topDomeGeo, carbonSteelMat);
      topDome.position.y = 8.5;
      group.add(topDome);

      // Overhead Vapor Line
      const vaporLineGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 16);
      const vaporLine = new THREE.Mesh(vaporLineGeo, pipeMat);
      vaporLine.position.y = 9.5;
      group.add(vaporLine);

      // Catwalks / Circular Platforms (x3)
      [3.0, 5.5, 7.8].forEach((y) => {
        const platformGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.08, 24, 1, true);
        const platform = new THREE.Mesh(platformGeo, safetyYellowMat);
        platform.position.y = y;
        group.add(platform);

        // Platform Railing
        const railGeo = new THREE.TorusGeometry(1.4, 0.03, 8, 24);
        railGeo.rotateX(Math.PI / 2);
        const rail = new THREE.Mesh(railGeo, safetyYellowMat);
        rail.position.y = y + 0.6;
        group.add(rail);
      });

      // Vertical Ladder with Safety Cages
      const ladderRungGeo = new THREE.BoxGeometry(0.04, 7.5, 0.04);
      const ladderLeft = new THREE.Mesh(ladderRungGeo, safetyYellowMat);
      ladderLeft.position.set(-1.1, 4.5, 0.2);
      group.add(ladderLeft);
      const ladderRight = new THREE.Mesh(ladderRungGeo, safetyYellowMat);
      ladderRight.position.set(-1.1, 4.5, -0.2);
      group.add(ladderRight);

      // Feed Nozzles
      const feedNozzleGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.8, 16);
      feedNozzleGeo.rotateZ(Math.PI / 2);
      const feedNozzle = new THREE.Mesh(feedNozzleGeo, pipeMat);
      feedNozzle.position.set(1.2, 3.2, 0);
      group.add(feedNozzle);

      // Side reflux nozzle
      const refluxNozzle = new THREE.Mesh(feedNozzleGeo, pipeMat);
      refluxNozzle.position.set(1.2, 7.5, 0);
      group.add(refluxNozzle);

      return group;
    }

    // 3. TEMA SHELL & TUBE HEAT EXCHANGER (E-101)
    function buildExchanger(): THREE.Group {
      const group = new THREE.Group();

      // Main Exchanger Shell
      const shellGeo = new THREE.CylinderGeometry(0.7, 0.7, 4.5, 24);
      shellGeo.rotateZ(Math.PI / 2);
      const shell = new THREE.Mesh(shellGeo, carbonSteelMat);
      shell.position.y = 1.4;
      shell.castShadow = !isSoftwareGl;
      shell.name = 'exchanger_shell';
      group.add(shell);

      // Channel Head Bonnet (Left)
      const bonnetGeo = new THREE.CylinderGeometry(0.72, 0.72, 1.0, 24);
      bonnetGeo.rotateZ(Math.PI / 2);
      const bonnet = new THREE.Mesh(bonnetGeo, stainlessMat);
      bonnet.position.set(-2.7, 1.4, 0);
      group.add(bonnet);

      // Channel Cover Flange
      const flangeGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.15, 24);
      flangeGeo.rotateZ(Math.PI / 2);
      const flange1 = new THREE.Mesh(flangeGeo, stainlessMat);
      flange1.position.set(-2.2, 1.4, 0);
      group.add(flange1);

      // Floating Head Cap (Right)
      const capGeo = new THREE.SphereGeometry(0.7, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      capGeo.rotateZ(-Math.PI / 2);
      const cap = new THREE.Mesh(capGeo, carbonSteelMat);
      cap.position.set(2.25, 1.4, 0);
      group.add(cap);

      // Nozzles
      const nozzleGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 16);
      const n1 = new THREE.Mesh(nozzleGeo, pipeMat);
      n1.position.set(-1.2, 2.2, 0);
      group.add(n1);

      const n2 = new THREE.Mesh(nozzleGeo, pipeMat);
      n2.position.set(1.2, 0.6, 0);
      group.add(n2);

      // Channel head nozzle
      const nTube = new THREE.Mesh(nozzleGeo, pipeMat);
      nTube.position.set(-2.7, 2.2, 0);
      group.add(nTube);

      // Saddles
      [-1.2, 1.2].forEach((x) => {
        const saddleGeo = new THREE.BoxGeometry(0.3, 0.7, 1.2);
        const saddle = new THREE.Mesh(saddleGeo, carbonSteelMat);
        saddle.position.set(x, 0.35, 0);
        group.add(saddle);
      });

      return group;
    }

    // 4. FLARE RELIEF STACK & K.O. DRUM (FL-01)
    function buildFlare(): THREE.Group {
      const group = new THREE.Group();

      // Knock-out drum (horizontal vessel at base)
      const kodGeo = new THREE.CylinderGeometry(0.6, 0.6, 2.2, 20);
      kodGeo.rotateZ(Math.PI / 2);
      const kod = new THREE.Mesh(kodGeo, carbonSteelMat);
      kod.position.set(-1.2, 0.9, 0);
      kod.castShadow = !isSoftwareGl;
      group.add(kod);

      // Flare Riser Stack (tall vertical tapered pipe)
      const stackGeo = new THREE.CylinderGeometry(0.2, 0.45, 10.0, 16);
      const stack = new THREE.Mesh(stackGeo, carbonSteelMat);
      stack.position.set(2.0, 5.0, 0);
      stack.castShadow = !isSoftwareGl;
      group.add(stack);

      // Relief Header Connecting Pipe
      const headerGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.2, 12);
      headerGeo.rotateZ(Math.PI / 2);
      const header = new THREE.Mesh(headerGeo, pipeMat);
      header.position.set(0.4, 1.2, 0);
      group.add(header);

      // Flare Tip Assembly
      const tipGeo = new THREE.CylinderGeometry(0.35, 0.25, 0.8, 16);
      const tip = new THREE.Mesh(tipGeo, stainlessMat);
      tip.position.set(2.0, 10.2, 0);
      group.add(tip);

      // Pilot Burner Flame Glow (Cone)
      const flameGeo = new THREE.ConeGeometry(0.3, 1.0, 12);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0xf97316,
        wireframe: false,
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(2.0, 11.0, 0);
      flame.name = 'flare_flame';
      group.add(flame);

      return group;
    }

    // Build the master models
    const plantGroup = new THREE.Group();
    const sepGroup = buildSeparator();
    const colGroup = buildColumn();
    const excGroup = buildExchanger();
    const flareGroup = buildFlare();

    // Position equipment in the combined Plant Skid
    sepGroup.position.set(-4, 0, 0);
    colGroup.position.set(3, 0, -2);
    excGroup.position.set(0, 0, 3);
    flareGroup.position.set(8, 0, -5);

    // Interconnecting Process Piping Rack in Plant Mode
    const pipePoints = [
      new THREE.Vector3(-2.0, 3.4, 0),
      new THREE.Vector3(-2.0, 4.2, 0),
      new THREE.Vector3(1.0, 4.2, 0),
      new THREE.Vector3(1.0, 4.2, 3.0),
      new THREE.Vector3(0, 2.2, 3.0),
    ];
    const pipeCurve = new THREE.CatmullRomCurve3(pipePoints);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 32, 0.08, 12, false);
    const interconnectPipe = new THREE.Mesh(pipeGeo, pipeMat);
    plantGroup.add(interconnectPipe);

    // Another pipe linking column to flare
    const flarePipePoints = [
      new THREE.Vector3(3.0, 8.5, -2.0),
      new THREE.Vector3(5.0, 8.5, -2.0),
      new THREE.Vector3(5.0, 2.0, -5.0),
      new THREE.Vector3(6.8, 1.2, -5.0),
    ];
    const flarePipeCurve = new THREE.CatmullRomCurve3(flarePipePoints);
    const flarePipeGeo = new THREE.TubeGeometry(flarePipeCurve, 32, 0.07, 12, false);
    const flareInterconnect = new THREE.Mesh(flarePipeGeo, pipeMat);
    plantGroup.add(flareInterconnect);

    plantGroup.add(sepGroup);
    plantGroup.add(colGroup);
    plantGroup.add(excGroup);
    plantGroup.add(flareGroup);
    scene.add(plantGroup);

    // Isolated equipment versions for focused single-unit inspection
    const isolatedSeparator = buildSeparator();
    const isolatedColumn = buildColumn();
    const isolatedExchanger = buildExchanger();
    const isolatedFlare = buildFlare();

    scene.add(isolatedSeparator);
    scene.add(isolatedColumn);
    scene.add(isolatedExchanger);
    scene.add(isolatedFlare);

    isolatedSeparator.visible = false;
    isolatedColumn.visible = false;
    isolatedExchanger.visible = false;
    isolatedFlare.visible = false;

    modelsGroupRef.current = {
      plant: plantGroup,
      separator: isolatedSeparator,
      column: isolatedColumn,
      exchanger: isolatedExchanger,
      flare: isolatedFlare,
    };

    // Flow Simulation Particle System
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = 0.5 + Math.random() * 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      particleVelocities.push(0.04 + Math.random() * 0.05);
    }
    particlePositionsRef.current = particlePositions;

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.15,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation & Render Loop
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick() {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Subtle slow auto rotation when not being actively dragged
      if (plantGroup.visible) {
        plantGroup.rotation.y = Math.sin(time * 0.1) * 0.05;
      }

      // Animate flare tip flame flicker
      const flames = scene.getObjectsByProperty('name', 'flare_flame');
      flames.forEach((flame) => {
        flame.scale.y = 0.8 + Math.sin(time * 12) * 0.25;
        flame.scale.x = 0.9 + Math.cos(time * 10) * 0.2;
      });

      // Animate flowing particles along process paths
      if (particlesRef.current && particlePositionsRef.current) {
        const pos = particlesRef.current.geometry.attributes.position;
        const arr = pos.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          arr[i * 3] += particleVelocities[i]; // move along X
          if (arr[i * 3] > 8) {
            arr[i * 3] = -8;
          }
        }
        pos.needsUpdate = true;
      }

      controls.update();
      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Handle Model Target Switch
  useEffect(() => {
    if (!modelsGroupRef.current || !controlsRef.current || !cameraRef.current) return;
    const models = modelsGroupRef.current;

    // Toggle visibility
    Object.keys(models).forEach((key) => {
      models[key as ModelTarget].visible = key === selectedModel;
    });

    // Re-target camera smoothly
    const controls = controlsRef.current;
    const camera = cameraRef.current;

    if (selectedModel === 'plant') {
      controls.target.set(0, 2, 0);
      camera.position.set(10, 8, 14);
    } else if (selectedModel === 'separator') {
      controls.target.set(0, 2, 0);
      camera.position.set(0, 2.5, 6);
    } else if (selectedModel === 'column') {
      controls.target.set(0, 5, 0);
      camera.position.set(0, 5.5, 9);
    } else if (selectedModel === 'exchanger') {
      controls.target.set(0, 1.4, 0);
      camera.position.set(0, 2, 5.5);
    } else if (selectedModel === 'flare') {
      controls.target.set(1, 5, 0);
      camera.position.set(1, 6, 12);
    }
  }, [selectedModel]);

  // Handle View Mode switch (PBR, X-Ray, Thermal, Wireframe)
  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        // Skip background grid and floor slab
        if (obj.geometry instanceof THREE.BoxGeometry && obj.position.y < 0) return;

        if (viewMode === 'wireframe') {
          obj.material.wireframe = true;
          obj.material.transparent = false;
          obj.material.opacity = 1.0;
        } else if (viewMode === 'xray') {
          obj.material.wireframe = false;
          obj.material.transparent = true;
          obj.material.opacity = 0.35;
          obj.material.depthWrite = false;
        } else if (viewMode === 'thermal') {
          obj.material.wireframe = false;
          obj.material.transparent = false;
          obj.material.opacity = 1.0;
          // Apply thermal false color gradient based on object Y position or type
          if (obj.name.includes('shell')) {
            obj.material.color.setHex(0x0284c7); // cool inlet
          } else if (obj.name.includes('demister') || obj.position.y > 4) {
            obj.material.color.setHex(0xf97316); // hot vapor / flash
          } else {
            obj.material.color.setHex(0x10b981); // medium operating
          }
        } else {
          // Default PBR realistic
          obj.material.wireframe = false;
          obj.material.transparent = false;
          obj.material.opacity = 1.0;
          obj.material.depthWrite = true;
          if (obj.name.includes('shell')) {
            obj.material.color.setHex(0x475569);
          }
        }
      }
    });
  }, [viewMode]);

  // Toggle Flow Particles
  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.visible = flowAnimation;
    }
  }, [flowAnimation]);

  const currentHotspots = HOTSPOTS[selectedModel] || [];

  return (
    <div className="relative w-full h-[620px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left Engineering Header Badge */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase font-mono">
            {t.badge}
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-xs text-slate-400 font-mono">{t.engine}</span>
        </div>
        <h3 className="text-base font-bold text-white tracking-tight">
          {selectedModel === 'plant' && t.units.plant}
          {selectedModel === 'separator' && t.units.separator}
          {selectedModel === 'column' && t.units.column}
          {selectedModel === 'exchanger' && t.units.exchanger}
          {selectedModel === 'flare' && t.units.flare}
        </h3>
        <p className="text-xs text-slate-400 max-w-sm">
          {t.instructions}
        </p>
      </div>

      {/* Top Right Quick Reset Camera */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => {
            if (controlsRef.current && cameraRef.current) {
              controlsRef.current.reset();
              if (selectedModel === 'plant') {
                cameraRef.current.position.set(10, 8, 14);
                controlsRef.current.target.set(0, 2, 0);
              }
            }
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
          title={t.resetCamera}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetCamera}</span>
        </button>
      </div>

      {/* Interactive 3D Hotspot Tags Overlay */}
      <div className="absolute top-20 right-4 z-10 flex flex-col gap-2 max-w-xs pointer-events-auto">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono px-1">
          {t.tagsLabel}
        </div>
        {currentHotspots.map((hs) => (
          <button
            key={hs.tag}
            onClick={() => setActiveHotspot(activeHotspot?.tag === hs.tag ? null : hs)}
            className={`text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
              activeHotspot?.tag === hs.tag
                ? 'bg-sky-950/80 border-sky-500 text-white shadow-lg shadow-sky-500/20'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sky-400">{hs.tag}</span>
              <span className="text-[10px] text-slate-500">{lang === 'fr' ? 'Inspecter' : 'Inspect'}</span>
            </div>
            <div className="font-medium text-slate-200 mt-0.5">
              {lang === 'fr' ? hs.nameFr : hs.name}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              {lang === 'fr' ? hs.specFr : hs.spec}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Hotspot Detail Toast */}
      {activeHotspot && (
        <div className="absolute top-20 left-4 z-20 bg-slate-900/95 border border-sky-500/40 p-4 rounded-xl shadow-2xl max-w-sm backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono font-bold text-sky-400 text-sm">{activeHotspot.tag}</span>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-slate-400 hover:text-white text-xs cursor-pointer"
            >
              {lang === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
          <h4 className="text-sm font-bold text-white mt-2">
            {lang === 'fr' ? activeHotspot.nameFr : activeHotspot.name}
          </h4>
          <p className="text-xs text-slate-300 mt-1">
            {lang === 'fr' ? activeHotspot.specFr : activeHotspot.spec}
          </p>
          <div className="mt-3 text-[11px] text-sky-300/80 bg-sky-950/60 p-2 rounded border border-sky-900/60">
            {lang === 'fr'
              ? 'Conçu et calculé par Muhammad Tabish sur Aspen HYSYS, HSep-Calc+ et normes API.'
              : 'Engineered in projects by Muhammad Tabish using Aspen HYSYS, HSep-Calc+, and API standards.'}
          </div>
        </div>
      )}

      {/* Collapsible Bottom Control Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-4xl">
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 border border-slate-700 text-xs font-medium text-slate-300 hover:text-white rounded-t-lg transition-colors cursor-pointer"
          >
            {isControlsCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{isControlsCollapsed ? t.showControls : t.hideControls}</span>
          </button>
        </div>

        {!isControlsCollapsed && (
          <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-3 shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Equipment Switcher */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium whitespace-nowrap">{t.unitLabel}</span>
              <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
                {(
                  [
                    ['plant', t.units.plant],
                    ['separator', t.units.separator],
                    ['column', t.units.column],
                    ['exchanger', t.units.exchanger],
                    ['flare', t.units.flare],
                  ] as [ModelTarget, string][]
                ).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedModel(id);
                      setActiveHotspot(null);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedModel === id
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium whitespace-nowrap">{t.viewLabel}</span>
              <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
                {(
                  [
                    ['pbr', t.views.pbr],
                    ['xray', t.views.xray],
                    ['thermal', t.views.thermal],
                    ['wireframe', t.views.wireframe],
                  ] as [ViewMode, string][]
                ).map(([mode, label]) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      viewMode === mode
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stream Flow Particle Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlowAnimation(!flowAnimation)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer font-medium ${
                  flowAnimation
                    ? 'bg-sky-950/80 border-sky-500/80 text-sky-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>
                  {t.particles} {flowAnimation ? (lang === 'fr' ? 'ACTIVÉ' : 'ON') : (lang === 'fr' ? 'DÉSACTIVÉ' : 'OFF')}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
