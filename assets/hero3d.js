import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
const host = document.getElementById('globe');
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = innerWidth < 760;
let renderer;
try { renderer = new THREE.WebGLRenderer({antialias: true, alpha: true}); } catch (e) { host.remove(); throw 0; }
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
host.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x07080d, 0.06);
const cam = new THREE.PerspectiveCamera(55, 1, 0.1, 100); cam.position.set(0, 0, 9);
const world = new THREE.Group(); scene.add(world);
const globe = new THREE.Group(); world.add(globe);

// Fibonacci sphere nodes
const N = mobile ? 420 : 900, R = 3.1, pts = [];
for (let i = 0; i < N; i++) { const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), t = Math.PI * (3 - Math.sqrt(5)) * i;
  pts.push(new THREE.Vector3(Math.cos(t) * r * R, y * R, Math.sin(t) * r * R)); }
const pg = new THREE.BufferGeometry().setFromPoints(pts);
const cols = new Float32Array(N * 3), cA = new THREE.Color(0x7cf5c8), cB = new THREE.Color(0x7a8cff), cC = new THREE.Color(0xff7ab6);
pts.forEach((p, i) => { const c = cA.clone().lerp(p.y > 0 ? cB : cC, Math.abs(p.y) / R); cols.set([c.r, c.g, c.b], i * 3); });
pg.setAttribute('color', new THREE.BufferAttribute(cols, 3));
const dotTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, '#fff'); gr.addColorStop(.3, 'rgba(255,255,255,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
globe.add(new THREE.Points(pg, new THREE.PointsMaterial({size: .13, map: dotTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending})));

// network edges between near neighbours
const seg = [];
for (let i = 0; i < N; i++) { let k = 0; for (let j = i + 1; j < N && k < 2; j++) if (pts[i].distanceTo(pts[j]) < .42) { seg.push(pts[i], pts[j]); k++; } }
globe.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(seg), new THREE.LineBasicMaterial({color: 0x7a8cff, transparent: true, opacity: .18})));

// data arcs
const arcs = new THREE.Group(); globe.add(arcs);
for (let i = 0; i < (mobile ? 10 : 22); i++) {
  const a = pts[Math.random() * N | 0], b = pts[Math.random() * N | 0];
  const mid = a.clone().add(b).multiplyScalar(.5).normalize().multiplyScalar(R + a.distanceTo(b) * .45);
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)), new THREE.LineBasicMaterial({color: i % 2 ? 0x7cf5c8 : 0xff7ab6, transparent: true, opacity: .55}));
  l.geometry.setDrawRange(0, 0); l.userData = {o: Math.random() * 100}; arcs.add(l);
}
// inner glow core + ring
globe.add(new THREE.Mesh(new THREE.SphereGeometry(R * .97, 48, 48), new THREE.MeshBasicMaterial({color: 0x0b1020, transparent: true, opacity: .55})));
const ring = new THREE.Mesh(new THREE.TorusGeometry(R * 1.45, .008, 8, 200), new THREE.MeshBasicMaterial({color: 0x7cf5c8, transparent: true, opacity: .35}));
ring.rotation.x = Math.PI / 2.3; world.add(ring);
const ring2 = ring.clone(); ring2.scale.setScalar(1.18); ring2.rotation.set(Math.PI / 1.8, .4, 0); ring2.material = ring.material.clone(); ring2.material.color.set(0xff7ab6); ring2.material.opacity = .2; world.add(ring2);
// depth layer: far starfield
const sN = mobile ? 500 : 1400, sp = new Float32Array(sN * 3);
for (let i = 0; i < sN * 3; i++) sp[i] = (Math.random() - .5) * 60;
const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
const stars = new THREE.Points(sg, new THREE.PointsMaterial({size: .06, color: 0x8a91a6, transparent: true, opacity: .7})); scene.add(stars);

function size() { const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h, false); renderer.domElement.style.width = w + 'px'; renderer.domElement.style.height = h + 'px'; cam.aspect = w / h; cam.updateProjectionMatrix(); world.position.x = w > 900 ? 3.2 : 0; world.position.y = w > 900 ? 0 : -1.2; world.scale.setScalar(w > 900 ? 1 : .8); }
size(); addEventListener('resize', size);
let mx = 0, my = 0, sy = 0, visible = true;
addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, {passive: true});
addEventListener('scroll', () => { sy = scrollY / innerHeight; }, {passive: true});
new IntersectionObserver(([e]) => visible = e.isIntersecting).observe(host);
const clock = new THREE.Clock();
function frame() {
  const t = clock.getElapsedTime();
  globe.rotation.y = t * .08 + mx * .8 + sy * 1.2; globe.rotation.x = my * .4 + sy * .3;
  ring.rotation.z = t * .1; ring2.rotation.z = -t * .07;
  arcs.children.forEach(l => { const p = ((t * 30 + l.userData.o) % 120); l.geometry.setDrawRange(Math.max(0, p - 60), Math.min(49, p)); });
  stars.rotation.y = t * .01 + mx * .1; stars.position.y = sy * 2;
  cam.position.x += (mx * 1.2 - cam.position.x) * .05; cam.position.y += (-my * .8 - cam.position.y) * .05; cam.position.z = 9 + sy * 4; cam.lookAt(0, 0, 0);
  renderer.render(scene, cam);
}
if (RM) { arcs.children.forEach(l => l.geometry.setDrawRange(0, 49)); frame(); }
else renderer.setAnimationLoop(() => { if (visible && !document.hidden) frame(); });
