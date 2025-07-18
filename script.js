const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('.efeito-cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Atualiza posição do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animação suave do cursor
function animate() {
    // Suaviza o movimento do cursor
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';

    requestAnimationFrame(animate);
}

animate();

// Adiciona efeito ao passar sobre links e botões
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.backgroundColor = 'rgba(50, 154, 172, 0.8)';
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(58, 155, 190, 0.5)';
    });
});
