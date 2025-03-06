const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(event) {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
});                                        

       
