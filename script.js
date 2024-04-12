function createHeart() {
    const hearts = document.createElement('div');
    hearts.classList.add('hearts');
    
    hearts.style.left = Math.random() * 100 + "vw";
    hearts.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    hearts.innerText = '💗';
    
    document.body.appendChild(hearts);
    
    setTimeout(() => {
                hearts.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);