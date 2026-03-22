// This script runs automatically when the page loads
console.log("GitHub Engine v2.0 Connected successfully.");

// 1. Logic Change: Show a welcome message
alert("GitHub Update Detected! Switching to Neon Pro Mode.");

// 2. Feature Change: Add a hover effect to the preview box
const previewBox = document.querySelector('.preview-stage');
if(previewBox) {
    previewBox.addEventListener('mouseenter', () => {
        previewBox.style.borderColor = '#22c55e'; // Changes to Green on hover
        previewBox.style.transform = 'scale(1.02)';
    });
    previewBox.addEventListener('mouseleave', () => {
        previewBox.style.borderColor = '#8b5cf6';
        previewBox.style.transform = 'scale(1)';
    });
}

