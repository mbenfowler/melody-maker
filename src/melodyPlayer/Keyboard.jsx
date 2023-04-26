/* eslint-disable functional/immutable-data */
import * as React from 'react';

export function Keyboard() {
  // const totalKeyss = [0, 1, 2, 3];
  // const keyNames = [
  //   'C',
  //   'C#/Db',
  //   'D',
  //   'D#/Eb',
  //   'E',
  //   'F',
  //   'F#/Gb',
  //   'G',
  //   'G#/Ab',
  //   'A',
  //   'A#/Bb',
  //   'B',
  // ];

  const totalKeys = 11;
  // const startingOctave = 2;

  return (
    <>
      <div id="keyboard" style={{ display: 'flex' }}>
        {Array.from({ length: totalKeys }, (x, i) => {
          if (isWhiteKey(i + 1)) {
            return <WhiteKey />;
          }
          return <BlackKey />;
        })}
      </div>
    </>
  );
}

const whiteKeys = [1, 3, 5, 6, 8, 10];
function isWhiteKey(keyNumber) {
  return whiteKeys.includes(keyNumber);
}

function WhiteKey() {
  return (
    <div
      className="whitekey"
      style={{
        height: '100px',
        width: '28px',
        backgroundColor: 'white',
        outline: 'solid',
        outlineColor: 'black',
        outlineWidth: 'thin',
      }}
    />
  );
}

function BlackKey() {
  const [left, setLeft] = React.useState('');
  const [width, setWidth] = React.useState('');
  const blackKeyRef = React.useRef();

  function sizeBlackKey(blackKey) {
    const whiteKeySibling = blackKey.previousElementSibling;
    const whiteKeySiblingCoords = getPos(whiteKeySibling);
    const newWidth = whiteKeySibling.offsetWidth / 2;
    setWidth(`${newWidth}px`);
    setLeft(`${whiteKeySiblingCoords.right - newWidth / 2}px`);
  }

  function getPos(el) {
    return el.getBoundingClientRect();
  }

  React.useEffect(() => {
    sizeBlackKey(blackKeyRef.current);
    window.addEventListener('resize', () => {
      sizeBlackKey(blackKeyRef.current);
    });
  }, []);

  return (
    <div
      className="blackkey"
      ref={blackKeyRef}
      style={{
        height: '60px',
        left,
        width,
        backgroundColor: 'black',
        position: 'absolute',
        outlineStyle: 'solid',
        outlineWidth: 'thin',
      }}
    />
  );
}
