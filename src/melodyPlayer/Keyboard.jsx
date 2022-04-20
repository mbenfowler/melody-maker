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
  const keyboard = document.getElementById('keyboard-module--keyboard--1LOIs');
  const totalKeys = 14;
  const startingOctave = 2;

  document.body.onload = addKeys;
  window.addEventListener('load', resizeAllBlackKeys);
  window.addEventListener('resize', resizeAllBlackKeys);

  const allBlackKeysArray = Array.from(
    document.getElementsByClassName('blackkey')
  );

  function addKeys() {
    const keysPerOctave = keyNames.length;
    const i = 0;
    const keyCount = 0;
    const octaveCount = startingOctave; //start at the second octave;
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
    document.getElementById(
      'description'
    ).innerHTML = `Below should be a keyboard with ${totalKeyCount} keys.`;
  }

  function addWhiteKey(keyCount, octaveCount) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(styles.whitekey);
    console.log(newDiv);
    console.log(keyboard);
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
      <div id="description"></div>
      <div id="keyboard">{getMeAFrigginKeyBoard}</div>

      {totalKeyss.map(function (key) {
        return <div>{key}</div>;
      })}
    </>
  );
}
