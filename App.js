
// SafeZone Engine v4.0 - Golamrosulislam74-dotcom
const overlays = {
    tiktok: 'https://i.ibb.co/L5p1F3f/tiktok-2026-overlay.png',
    reels: 'https://i.ibb.co/vYvH6hN/reels-2026-overlay.png'
};

document.getElementById('video-input').onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        document.getElementById('v-preview').src = URL.createObjectURL(file);
    }
};

window.updateUI = () => {
    const platform = document.getElementById('platform-select').value;
    document.getElementById('ui-img').src = overlays[platform];
};

window.updateAlpha = (val) => {
    document.getElementById('ui-img').style.opacity = val / 100;
};
