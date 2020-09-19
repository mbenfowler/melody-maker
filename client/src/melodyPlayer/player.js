/* eslint-disable functional/no-this-expression */
export async function getNewMelody() {
  const url = process.env.SERVER_HOST;
  const response = await fetchAsync(url, {mode: 'no-cors'});
  window.location.href = response.url;
}

async function fetchAsync(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

var queryObject = queryStringToObjectReduce(window.location.search);
console.log(queryObject);

export function queryStringToObjectReduce(queryString) {
  const decodedQueryString = decodeURIComponent(queryString);
  var splitAmpersand = decodedQueryString.split('&');
  return splitAmpersand.reduce((melodyObject, element, i) => {
    if (i === 0) {
      element = element.substring(1);
    }
    const elementArray = element.split('=');
    try {
      melodyObject[elementArray[0]] = JSON.parse(elementArray[1]);
    } catch {
      melodyObject[elementArray[0]] = elementArray[1];
    }
    return melodyObject;
  }, {});
}

// eslint-disable-next-line functional/no-class
class Sound {
  constructor(context) {
    this.context = context;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value, timeStart, timeFinish) {
    this.init();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

    this.oscillator.start(timeStart);
    this.stop(timeFinish);
  }

  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
    this.oscillator.stop(time + 1);
  }
}

export function playNotes(notes) {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const note = new Sound(context);
  const now = context.currentTime;
  notes.forEach((array) => {
    note.play(array[0], now + array[1], now + array[2]);
  });
}
