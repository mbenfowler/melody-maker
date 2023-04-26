import * as React from 'react';
import { Button } from '../components/button';
import { queryStringToObjectReduce, playNotes, getNewMelody } from './player';
import { Keyboard } from './Keyboard';

function queryParamToString(queryObject: MelodyState) {
  var queryKeys = Object.keys(queryObject);
  return queryKeys.reduce((url, key, i) => {
    var paramString = `${key}=${encodeURIComponent(
      JSON.stringify(queryObject[key as keyof MelodyState])
    )}`;
    if (i < queryKeys.length - 1) {
      paramString += '&';
    }
    return url + paramString;
  }, '');
}

function MelodyButton(props: { melody: any; tonic: string; scaleName: Scale }) {
  const [buttonText, setButtonText] = React.useState('Your melody is in...');

  function playAndChangeText() {
    playNotes(props.melody);
    setButtonText(`Your melody is in ${props.tonic} ${props.scaleName}`);
  }

  return (
    <Button
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        props.melody === undefined
          ? alert('No melody found! Click the get new melody button.')
          : playAndChangeText();
      }}
      data-qa="play-melody-button"
    >
      {buttonText}
    </Button>
  );
}

function ScaleButton(props: { scale: any; tonic: string; scaleName: Scale }) {
  const [buttonText, setButtonText] = React.useState('Your scale is in...');

  function playAndChangeText() {
    playNotes(props.scale);
    setButtonText(`Your melody is in ${props.tonic} ${props.scaleName}`);
  }

  return (
    <Button
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        props.scale === undefined
          ? alert('No scale found! Click the get new melody button.')
          : playAndChangeText();
      }}
      data-qa="play-scale-button"
    >
      {buttonText}
    </Button>
  );
}

function NewMelodyButton(props: { onClick: (e: HTMLButtonElement) => void }) {
  return (
    <Button onClick={props.onClick} data-qa="get-new-melody-button">
      Get me a new melody!
    </Button>
  );
}
type Scale = string[];
type Melody = [number, number, number][];
interface MelodyState {
  melody: Melody;
  key: string;
  scale: Scale;
  scaleNotes: Melody;
}

export function MelodyPlayer() {
  const [state, setState] = React.useState<MelodyState>({
    melody: [],
    scaleNotes: [],
    key: '',
    scale: [],
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setState(queryStringToObjectReduce(window.location.search));
    }
  }, []);

  async function onNewMelodyClick() {
    const newMelodyBody: MelodyState = await getNewMelody();
    setState(newMelodyBody);
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line functional/immutable-data
      window.location.search = queryParamToString(newMelodyBody);
    }
  }

  return (
    <>
      <MelodyButton
        melody={state.melody}
        tonic={state.key}
        scaleName={state.scale}
      />
      <ScaleButton
        scale={state.scaleNotes}
        tonic={state.key}
        scaleName={state.scale}
      />
      <NewMelodyButton onClick={onNewMelodyClick} />
      <Keyboard/>
    </>
  );
}
