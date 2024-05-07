// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Use document selector to select elements
  const hornSelect = document.getElementById('horn-select');
  const volumeSelect = document.getElementById('volume');
  const button = document.querySelector('button');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();

  // Event listener for horn select
  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    
    image.src = `assets/images/${selectedHorn}.svg`;
    
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });
  
  // Event listener for volume control
  volumeSelect.addEventListener('input', function() {
    const volume = volumeSelect.value;
    audio.volume = volume / 100;
    
    if (volume === '0') {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < '33') {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < '67') {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
  
  // Event listener for play button
  button.addEventListener('click', function() {
    audio.play();
    
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
