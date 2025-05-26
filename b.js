function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.style.display = 'none');
  document.getElementById(pageId).style.display = 'flex';

  const envelope = document.querySelector('.envelope');
  const music = document.getElementById('bgMusic');

  if (pageId === 'page0') {
    // Reset flap and stop music
    envelope.classList.remove('opened');
    music.pause();
    music.currentTime = 0;
  } else if (pageId === 'page2' || pageId === 'page3' || pageId === 'page4') {
    // Start music only once
    if (music.paused) {
      music.play().catch(err => console.log('Music play blocked:', err));
    }
  }
}

function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.add('opened');

  // Relight candles by re-showing flames
  document.querySelectorAll('.flame').forEach(f => {
    f.style.display = 'block';
  });

  setTimeout(() => {
    showPage('page1');
  }, 1500); // Wait for animation to finish
}

function blowCandles() {
  // Hide flames
  document.querySelectorAll('.flame').forEach(f => f.style.display = 'none');

  // Launch confetti
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = '#ff69b4'; 
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.top = `${Math.random() * 100 + 100}px`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }

  // Launch balloons
  for (let i = 0; i < 10; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = `${Math.random() * 100}vw`;
  balloon.style.backgroundColor = '#ff69b4'; // hot pink
  balloon.style.width = '30px';
  balloon.style.height = '40px';
  balloon.style.borderRadius = '50% 50% 50% 50%';
  balloon.style.position = 'absolute';
  balloon.style.bottom = '0';
  balloon.style.animation = 'floatBalloon 5s ease-in forwards';
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 5000);
}

  // Go to next page after effects
  setTimeout(() => {
    showPage('page3');
  }, 3000);
}
