function pickNote() {
    var randomKey = pickRandomKey()
    var randomOctave = pickRandomOctave(randomKey)
    var randomNoteFreq = noteFrequencyMap[randomKey][randomOctave]
    var keyFreq = [randomKey, randomNoteFreq]
    return keyFreq
}

function createScale(tonic, scale) {
    var validNotes = getValidNotes(tonic[0], scale[0])
    validNotes.push(validNotes[0])
    var notesArray = []
    var octave = 2
    var time = 0
    var lastNote = ''
    validNotes.forEach((note) => {
        if(Object.keys(noteFrequencyMap).indexOf(note) < Object.keys(noteFrequencyMap).indexOf(lastNote)) {
            octave++
        }
        notesArray.push([noteFrequencyMap[note][octave], time, time + 1])
        time += 1
        lastNote = note
    })

    return notesArray
}

function createMelody() {
    var tonic = pickNote()
    var scale = pickRandomScale()
    var scaleNames = scale.slice(1)
    var validNotes = getValidNotes(tonic[0], scale[0])
    
    var notesArray = []
    const noteLengths = [.25, .5]
    var time = 0
    while(time < 10) {
        var thisNoteLength = noteLengths[Math.floor(Math.random() * (noteLengths.length))]
        notesArray.push([pickValidRandomNote(validNotes), time, time + thisNoteLength])
        time += thisNoteLength
    }

    var melodyParameters = { 
        melody: notesArray, 
        key: tonic[0], 
        scale: scaleNames, 
        scaleNotes: createScale(tonic, scale)
    }
    
    return melodyParameters
}

function pickValidRandomNote(validNotes) {
    var randomNoteIndex = Math.floor(Math.random() * (validNotes.length))
    var randomKey = validNotes[randomNoteIndex]
    var randomOctave = pickRandomOctave(randomKey)
    var randomNoteFreq = noteFrequencyMap[randomKey][randomOctave]
    return randomNoteFreq
}

function pickRandomKey() {
    var noteFrequencyMapKeys = Object.keys(noteFrequencyMap)
    var randomNoteIndex = Math.floor(Math.random() * (noteFrequencyMapKeys.length))
    var randomKey = noteFrequencyMapKeys[randomNoteIndex]
    return randomKey
}

function pickRandomOctave(key) {
    var noteOctave = noteFrequencyMap[key]
    var randomOctaveIndex = Math.floor(Math.random() * (noteOctave.length))
    return randomOctaveIndex
}

function pickRandomScale() {
    const scaleIndex = Math.floor(Math.random() * (SCALES.length))
    const scale = SCALES[scaleIndex]
    return scale
}

function orderNotesTonicFirst(tonic) {
    const notes = Object.keys(noteFrequencyMap)
    const tonicIndex = notes.indexOf(tonic)
    const newKeys = notes.slice(tonicIndex)
    const oldKeys = notes.slice(0, tonicIndex)
    return newKeys.concat(oldKeys)
}

function getValidNotes(tonic, scaleIntervals) {
    const orderedNotes = orderNotesTonicFirst(tonic)
    const scaleIntervalArray = getScaleIntervalArray(scaleIntervals)
    console.log({tonic, scaleIntervalArray, orderedNotes})
    return scaleIntervalArray.map(interval => orderedNotes[IVLS.indexOf(interval)])
}

function getScaleIntervalArray(scale) {
    scaleIntervalArray = scale.split(' ')
    return scaleIntervalArray
}

module.exports = {
    pickNote,
    createMelody,
    pickRandomKey,
    pickRandomOctave,
    orderNotesTonicFirst,
    getValidNotes
}

const noteFrequencyMap = {
    C: [
        // 16.35,
        // 32.70,
        // 65.41,
        130.81,
        261.63,
        523.25,
        1046.50
        // 2093.00,
        // 4186.01,
    ],
    'C#/Db': [
        // 17.32,
        // 34.65,
        // 69.30,
        138.59,
        277.18,
        554.37,
        1108.73
        // 2217.46,
        // 4434.92
    ],
    D: [
        // 18.35,
        // 36.71,
        // 73.42,
        146.83,
        293.66,
        587.33,
        1174.66
        // 2349.32,
        // 4698.63
    ],
    'D#/Eb': [
        // 19.45,
        // 38.89,
        // 77.78,
        155.56,
        311.13,
        622.25,
        1244.51
        // 2489.02,
        // 4978.03
    ],
    E: [
        // 20.60,
        // 41.20,
        // 82.41,
        164.81,
        329.63,
        659.25,
        1318.51
        // 2637.02,
        // 5274.04
    ],
    F: [
        // 21.83,
        // 43.65,
        // 87.31,
        174.61,
        349.23,
        698.46,
        1396.91
        // 2793.83,
        // 5587.65
    ],
    'F#/Gb': [
        // 23.12,
        // 46.25,
        // 92.50,
        185.00,
        369.99,
        739.99,
        1479.98
        // 2959.96,
        // 5919.91
    ],
    G: [
        // 24.50,
        // 49.00,
        // 98.00,
        196.00,
        392.00,
        783.99,
        1567.98
        // 3135.96,
        // 6271.93
    ],
    'G#/Ab': [
        // 25.96,
        // 51.91,
        // 103.83,
        207.65,
        415.30,
        830.61,
        1661.22
        // 3322.44,
        // 6644.88
    ],
    A: [
        // 27.50,
        // 55.00,
        // 110.00,
        220.00,
        440.00,
        880.00,
        1760.00
        // 3520.00,
        // 7040.00
    ],
    'A#/Bb': [
        // 29.14,
        // 58.27,
        // 116.54,
        233.08,
        466.16,
        932.33,
        1864.66
        // 3729.31,
        // 7458.62
    ],
    B: [
        // 30.87,
        // 61.74,
        // 123.47,
        246.94,
        493.88,
        987.77,
        1975.53
        // 3951.07,
        // 7902.13
    ],
}

const IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M",
  ]

// SCALES
// Format: ["intervals", "name", "alias1", "alias2", ...]
const SCALES = [
    // 5-note scales
    ["1P 2M 3M 5P 6M", "major pentatonic", "pentatonic"],
    ["1P 3M 4P 5P 7M", "ionian pentatonic"],
    ["1P 3M 4P 5P 7m", "mixolydian pentatonic", "indian"],
    ["1P 2M 4P 5P 6M", "ritusen"],
    ["1P 2M 4P 5P 7m", "egyptian"],
    ["1P 3M 4P 5d 7m", "neopolitan major pentatonic"],
    ["1P 3m 4P 5P 6m", "vietnamese 1"],
    ["1P 2m 3m 5P 6m", "pelog"],
    ["1P 2m 4P 5P 6m", "kumoijoshi"],
    ["1P 2M 3m 5P 6m", "hirajoshi"],
    ["1P 2m 4P 5d 7m", "iwato"],
    ["1P 2m 4P 5P 7m", "in-sen"],
    ["1P 3M 5d 5P 7M", "lydian pentatonic", "chinese"],
    ["1P 3m 4P 6m 7m", "malkos raga"],
    ["1P 3m 4P 5d 7m", "locrian pentatonic", "minor seven flat five pentatonic"],
    ["1P 3m 4P 5P 7m", "minor pentatonic", "vietnamese 2"],
    ["1P 3m 4P 5P 6M", "minor six pentatonic"],
    ["1P 2M 3m 5P 6M", "flat three pentatonic", "kumoi"],
    ["1P 2M 3M 5P 6m", "flat six pentatonic"],
    ["1P 2m 3M 5P 6M", "scriabin"],
    ["1P 3M 5d 6m 7m", "whole tone pentatonic"],
    ["1P 3M 5d 6m 7M", "lydian #5P pentatonic"],
    ["1P 3M 5d 5P 7m", "lydian dominant pentatonic"],
    ["1P 3m 4P 5P 7M", "minor #7M pentatonic"],
    ["1P 3m 4d 5d 7m", "super locrian pentatonic"],
  
    // 6-note scales
    ["1P 2M 3m 4P 5P 7M", "minor hexatonic"],
    ["1P 3m 3M 5P 6m 7M", "augmented"],
    ["1P 2M 3m 3M 5P 6M", "major blues"],
    ["1P 2M 4P 5P 6M 7m", "piongio"],
    ["1P 2m 3M 5d 6M 7m", "prometheus neopolitan"],
    ["1P 2M 3M 5d 6M 7m", "prometheus"],
    ["1P 2m 3M 5d 6m 7m", "mystery #1"],
    ["1P 2m 3M 4P 6m 6M", "six tone symmetric"],
    ["1P 2M 3M 5d 6m 7m", "whole tone", "messiaen's mode #1"],
    ["1P 2m 4P 5d 5P 7M", "messiaen's mode #5"],
    ["1P 3m 4P 5d 5P 7m", "minor blues", "blues"],
  
    // 7-note scales
    ["1P 2M 3M 4P 5d 6m 7m", "locrian major", "arabian"],
    ["1P 2m 3M 5d 5P 6m 7M", "double harmonic lydian"],
    ["1P 2M 3m 4P 5P 6m 7M", "harmonic minor"],
    [
      "1P 2m 3m 4d 5d 6m 7m",
      "altered",
      "super locrian",
      "diminished whole tone",
      "pomeroy",
    ],
    ["1P 2M 3m 4P 5d 6m 7m", "locrian #2", "half-diminished", "aeolian b5"],
    [
      "1P 2M 3M 4P 5P 6m 7m",
      "mixolydian b6",
      "melodic minor fifth mode",
      "hindu",
    ],
    ["1P 2M 3M 5d 5P 6M 7m", "lydian dominant", "lydian b7", "overtone"],
    ["1P 2M 3M 5d 5P 6M 7M", "lydian"],
    ["1P 2M 3M 5d 6m 6M 7M", "lydian augmented"],
    [
      "1P 2m 3m 4P 5P 6M 7m",
      "dorian b2",
      "phrygian #6",
      "melodic minor second mode",
    ],
    ["1P 2M 3m 4P 5P 6M 7M", "melodic minor"],
    ["1P 2m 3m 4P 5d 6m 7m", "locrian"],
    [
      "1P 2m 3m 4d 5d 6m 7d",
      "ultralocrian",
      "superlocrian bb7",
      "·superlocrian diminished",
    ],
    ["1P 2m 3m 4P 5d 6M 7m", "locrian 6", "locrian natural 6", "locrian sharp 6"],
    ["1P 3m 3M 4P 5P 6m 7M", "augmented heptatonic"],
    ["1P 2M 3m 5d 5P 6M 7m", "romanian minor"],
    ["1P 2M 3m 5d 5P 6M 7m", "dorian #4"],
    ["1P 2M 3m 5d 5P 6M 7M", "lydian diminished"],
    ["1P 2m 3m 4P 5P 6m 7m", "phrygian"],
    ["1P 2M 3M 5d 6m 7m 7M", "leading whole tone"],
    ["1P 2M 3M 5d 5P 6m 7m", "lydian minor"],
    ["1P 2m 3M 4P 5P 6m 7m", "phrygian dominant", "spanish", "phrygian major"],
    ["1P 2m 3m 4P 5P 6m 7M", "balinese"],
    ["1P 2m 3m 4P 5P 6M 7M", "neopolitan major"],
    ["1P 2M 3m 4P 5P 6m 7m", "aeolian", "minor"],
    ["1P 2M 3M 4P 5P 6m 7M", "harmonic major"],
    ["1P 2m 3M 4P 5P 6m 7M", "double harmonic major", "gypsy"],
    ["1P 2M 3m 4P 5P 6M 7m", "dorian"],
    ["1P 2M 3m 5d 5P 6m 7M", "hungarian minor"],
    ["1P 3m 3M 5d 5P 6M 7m", "hungarian major"],
    ["1P 2m 3M 4P 5d 6M 7m", "oriental"],
    ["1P 2m 3m 3M 5d 5P 7m", "flamenco"],
    ["1P 2m 3m 5d 5P 6m 7M", "todi raga"],
    ["1P 2M 3M 4P 5P 6M 7m", "mixolydian", "dominant"],
    ["1P 2m 3M 4P 5d 6m 7M", "persian"],
    ["1P 2M 3M 4P 5P 6M 7M", "major", "ionian"],
    ["1P 2m 3M 5d 6m 7m 7M", "enigmatic"],
    [
      "1P 2M 3M 4P 6m 6M 7M",
      "major augmented",
      "major #5",
      "ionian augmented",
      "ionian #5",
    ],
    ["1P 3m 3M 5d 5P 6M 7M", "lydian #9"],
  
    // 8-note scales
    ["1P 2m 2M 4P 5d 5P 6m 7M", "messiaen's mode #4"],
    ["1P 2m 3M 4P 5d 5P 6m 7M", "purvi raga"],
    ["1P 2m 3m 3M 4P 5P 6m 7m", "spanish heptatonic"],
    ["1P 2M 3M 4P 5P 6M 7m 7M", "bebop"],
    ["1P 2M 3m 3M 4P 5P 6M 7m", "bebop minor"],
    ["1P 2M 3M 4P 5P 6m 6M 7M", "bebop major"],
    ["1P 2m 3m 4P 5d 5P 6m 7m", "bebop locrian"],
    ["1P 2M 3m 4P 5P 6m 7m 7M", "minor bebop"],
    ["1P 2M 3m 4P 5d 6m 6M 7M", "diminished", "whole-half diminished"],
    ["1P 2M 3M 4P 5d 5P 6M 7M", "ichikosucho"],
    ["1P 2M 3m 4P 5P 6m 6M 7M", "minor six diminished"],
    [
      "1P 2m 3m 3M 5d 5P 6M 7m",
      "half-whole diminished",
      "dominant diminished",
      "messiaen's mode #2",
    ],
    ["1P 3m 3M 4P 5P 6M 7m 7M", "kafi raga"],
    ["1P 2M 3M 4P 5d 6m 7m 7M", "messiaen's mode #6"],
  
    // 9-note scales
    ["1P 2M 3m 3M 4P 5d 5P 6M 7m", "composite blues"],
    ["1P 2M 3m 3M 5d 5P 6m 7m 7M", "messiaen's mode #3"],
  
    // 10-note scales
    ["1P 2m 2M 3m 4P 5d 5P 6m 6M 7M", "messiaen's mode #7"],
  
    // 12-note scales
    ["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"],
  ];
  