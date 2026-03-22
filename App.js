
// This controls what happens when you click
function changeColor() {
    const box = document.getElementById('myBox');
    const colors = ['#ef4444', '#10b981', '#f59e0b', '#6366f1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    box.style.backgroundColor = randomColor;
    box.innerText = "Color Changed!";
}

// Attach the function to the button
document.getElementById('colorBtn').addEventListener('click', changeColor);
