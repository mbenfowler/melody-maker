import * as React from 'react';
import { Button } from '../components/button';
import { queryStringToObjectReduce, playNotes, getNewMelody } from './player';

function MelodyButton(props: {
  melody: any;
  tonic: string;
  scaleName: string;
}) {
  const [buttonText, setButtonText] = React.useState('Your melody is in...');

  return (
    <Button
      onClick={() => {
        playNotes(props.melody);
        setButtonText(`Your melody is in ${props.tonic} ${props.scaleName}`);
      }}
      data-qa="play-melody-button"
    >
      {buttonText}
    </Button>
  );
}

function ScaleButton(props: { scale: any; tonic: string; scaleName: string }) {
  const [buttonText, setButtonText] = React.useState('Your scale is in...');

  return (
    <Button
      onClick={() => {
        playNotes(props.scale);
        setButtonText(`Your scale is in ${props.tonic} ${props.scaleName}`);
      }}
      data-qa="play-scale-button"
    >
      {buttonText}
    </Button>
  );
}

function NewMelodyButton() {
  return (
    <Button onClick={getNewMelody} data-qa="get-new-melody-button">
      Get me a new melody!
    </Button>
  );
}

export function MelodyPlayer() {
  // eslint-disable-next-line functional/no-let
  let queryObject = {};
  if (typeof window !== 'undefined') {
    queryObject = queryStringToObjectReduce(window.location.search);
  }
  return (
    <>
      <MelodyButton
        melody={queryObject.melody}
        tonic={queryObject.key}
        scaleName={queryObject.scale}
      />
      <ScaleButton
        scale={queryObject.scaleNotes}
        tonic={queryObject.key}
        scaleName={queryObject.scale}
      />
      <NewMelodyButton />
    </>
  );
}
