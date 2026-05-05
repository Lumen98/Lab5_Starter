// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore > img');

  // Populate voice dropdown
  function populateVoices() {
    const voices = synth.getVoices();
    voices.forEach(function (voice) {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  // Press to Talk button
  talkButton.addEventListener('click', function () {
    const utterance = new SpeechSynthesisUtterance(textArea.value);

    // Set the selected voice
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceSelect.value) {
        utterance.voice = voices[i];
        break;
      }
    }

    // Swap to open mouth while speaking
    faceImage.src = 'assets/images/smiling-open.png';
    faceImage.alt = 'Smiling face with open mouth';

    utterance.addEventListener('end', function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(utterance);
  });
}