const randomHex = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

// Portfolio indigo/purple palette — matches --accent & --accent-2
const DEFAULT_TUBES  = ['#6366f1', '#8b5cf6', '#a78bfa'];
const DEFAULT_LIGHTS = ['#4f46e5', '#6366f1', '#c4b5fd', '#818cf8'];

async function initTubesBg() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  try {
    const { default: TubesCursor } = await import(
      'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
    );

    const app = TubesCursor(canvas, {
      tubes: {
        colors: DEFAULT_TUBES,
        lights: {
          intensity: 200,
          colors: DEFAULT_LIGHTS
        }
      }
    });

    // Fade out CSS blobs — tubes replace the ambient glow
    document.querySelectorAll('.blob').forEach(el => {
      el.style.transition = 'opacity 1.4s ease';
      el.style.opacity = '0';
    });

    // Clicking the hero randomizes tube & light colors
    document.getElementById('home').addEventListener('click', () => {
      app.tubes.setColors([randomHex(), randomHex(), randomHex()]);
      app.tubes.setLightsColors([randomHex(), randomHex(), randomHex(), randomHex()]);
    });

  } catch (err) {
    // CDN unavailable — CSS blobs remain as the visual fallback
    console.warn('Tubes background unavailable, using fallback.', err);
  }
}

initTubesBg();
