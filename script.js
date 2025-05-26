function showInfo(instrumentName, element) {
  let content = '';

  switch (instrumentName) {
      case 'tabla':
      content = "<strong>Tabla:</strong> A pair of hand drums essential to North Indian music. The right drum (dayan) is made of wood, the left (bayan) of metal or clay.It is used in many styles of Indian music, from classical to modern, as an accompaniment to softer tunes. The tabla is a pair of drums, and it’s one of the most important rhythm and music instruments in Indian music.";
      break;
    case 'sitar':
      content = "<strong>Sitar:</strong> A plucked string instrument used in Hindustani classical music. Known for its deep, resonant tone and played with a mizrab (plectrum).Globally popularised by maestros such as Pt. Ravi Shankar, sitar has a distinct place in classical and fusion genres. It is used in Hindustani classical music and has become famous around the world";
      break;
  case 'bansuri':
      content = "<strong>Bansuri:</strong> A side-blown bamboo flute with a soothing tone. Often associated with Lord Krishna and used in classical and folk music.Its smooth and breathy tone is perfect for evoking images of village life, making it a popular choice for romantic Hindi songs and folk music alike. The simple but beautiful sound of the bansuri can evoke feelings of peace and love.";
      break;
    case 'veena':
      content = "<strong>Veena:</strong> A traditional South Indian string instrument with a large gourd resonator and fretted neck. It is known for its melodic richness.The instrument is played by plucking the strings and sliding fingers across the frets to make some really lovely music.It has been used for hundreds of years in South Indian classical performances and is respected for its spiritual importance.";
      break;
    case 'santoor':
      content = "<strong>Santoor:</strong>The Santoor is a musical instrument from Kashmir that looks like a wooden tray and is played using light hammers. Even though it looks simple, the sound it makes is delicate and high-pitched, like a ringing bell. By generating many notes together, it can create a beautiful sound that feels very Indian. This is why it can be commonly found in Indian folk music.";
      break;
    case 'sarangi':
      content = "<strong>Sarangi:</strong> A bowed string instrument known for its close mimicry of the human voice. Widely used in Hindustani classical music.The Sarangi is a highly expressive instrument. Its name means 'a hundred colors,' referring to the range, depth, and subtlety of its sounds. Sarangi has a box-like structure that is carved from a single piece of wood (Cedar).";
      break;
    case 'shehnai':
      content = "<strong>Shehnai:</strong> A reed instrument often played at weddings and temples. It has a piercing yet melodious tone, associated with auspicious occasions.It has a very happy and loud sound, which is why people believe that it brings good luck and happiness. Just listening to it can make one cheerful and fill the listeners with joy.";
      break;
    case 'dhol':
      content = "<strong>Dhol:</strong> A trapezoid-shaped hammered dulcimer with strings struck using mallets. Known for its ethereal tone in Kashmiri and classical music.It's known for its distinctive, loud sound and is a crucial part of folk and traditional music, especially in dance performances and community events. ";
      break;
    default:
      content = "No information available.";
  }

  const card = element.closest('.instrument-card');
  let infoBox = card.querySelector('.instrument-info');

  if (!infoBox) {
    infoBox = document.createElement('div');
    infoBox.className = 'instrument-info';
    card.appendChild(infoBox);
  }

  infoBox.innerHTML = content;
}

function toggleFavorite(element) {
  element.classList.toggle("favorited");
  element.textContent = element.classList.contains("favorited") ? "❤️" : "♡";
}

function filterInstruments() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const instrumentCards = document.querySelectorAll(".instrument-card");

  instrumentCards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}
