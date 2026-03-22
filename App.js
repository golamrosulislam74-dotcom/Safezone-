
// This script runs automatically on your Blog
console.log("GitHub Engine v2.0 Connected!");

// 1. Logic Change: Show a welcome message to confirm the link
alert("GitHub Update Detected! Switching to Neon Mode.");

// 2. Feature Change: Add a glow effect when you hover the preview
const previewBox = document.querySelector('.preview-stage');
if(previewBox) {
    previewBox.onmouseenter = () => {
        previewBox.style.boxShadow = "0 0 50px #a855f7";
    };
    previewBox.onmouseleave = () => {
        previewBox.style.boxShadow = "none";
    };
}
