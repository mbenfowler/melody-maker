/* eslint-disable functional/immutable-data */
import * as React from 'react';
import styles from './keyboard.module.css';

export function Keyboard() {
  const totalKeyss = [0, 1, 2, 3];
  const keyNames = [
    'C',
    'C#/Db',
    'D',
    'D#/Eb',
    'E',
    'F',
    'F#/Gb',
    'G',
    'G#/Ab',
    'A',
    'A#/Bb',
    'B',
  ];
  const keyboardDiv = document.createElement('div');
  keyboardDiv.setAttribute('id', 'keyboard');
  keyboardDiv.classList.add(styles.keyboard);
  console.log(keyboardDiv);
  document.body.appendChild(keyboardDiv);

  const keyboard = document.getElementById('keyboard');
  const totalKeys = 14;
  const startingOctave = 2;

  window.addEventListener('load', resizeAllBlackKeys);
  window.addEventListener('resize', resizeAllBlackKeys);

  const allBlackKeysArray = Array.from(
    document.getElementsByClassName('blackkey')
  );

  function addKeys() {
    const keysPerOctave = keyNames.length;
    let i = 0;
    let keyCount = 0;
    let octaveCount = startingOctave; //start at the second octave;
    while (i < totalKeys) {
      addWhiteKey(keyCount, octaveCount);
      keyCount++;

      if (keyCount < keysPerOctave) {
        if (blackKeyCheck(keyCount)) {
          addBlackKey(keyCount, octaveCount);
          keyCount++;
        }
      } else {
        keyCount = 0;
        octaveCount++;
      }

      i++;
    }

    const totalKeyCount = keyboard.childElementCount;
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('id', 'description');
    document.body.appendChild(descriptionDiv);
    document.getElementById(
      'description'
    ).innerHTML = `Above should be a keyboard with ${totalKeyCount} keys.`;
  }

  function addWhiteKey(keyCount, octaveCount) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(styles.whitekey);
    newDiv.setAttribute('key-name', keyNames[keyCount]);
    newDiv.setAttribute('octave', octaveCount);
    keyboard.appendChild(newDiv);
  }

  function addBlackKey(keyCount, octaveCount) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(styles.blackkey);
    newDiv.setAttribute('key-name', keyNames[keyCount]);
    newDiv.setAttribute('octave', octaveCount);
    keyboard.appendChild(newDiv);
    sizeBlackKey(newDiv);
  }

  function blackKeyCheck(keyCount) {
    const whiteKeysNeedingBlackKeys = [1, 3, 6, 8, 10];
    return whiteKeysNeedingBlackKeys.includes(keyCount);
  }

  function resizeAllBlackKeys() {
    allBlackKeysArray.forEach(sizeBlackKey);
  }

  function sizeBlackKey(blackKey) {
    const whiteKeySibling = blackKey.previousElementSibling;
    const whiteKeySiblingCoords = getPos(whiteKeySibling);
    blackKey.style.width = `${whiteKeySibling.offsetWidth / 2}px`;
    blackKey.style.left = `${
      whiteKeySiblingCoords.right - blackKey.offsetWidth / 2
    }px`;
  }

  function getPos(el) {
    return el.getBoundingClientRect();
  }

  const [getMeAFrigginKeyBoard] = React.useState(addKeys);

  React.useEffect(() => {}, [getMeAFrigginKeyBoard]);

  return (
    <>
      {totalKeyss.map(function (key) {
        return <div>{key}</div>;
      })}
    </>
  );
}
