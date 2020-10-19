const { pickNote, orderNotesTonicFirst, getValidNotes, getScaleIntervalArray, IVLS, SCALES } = require('./melodyMaker');
import { queryStringToObjectReduce } from '../src/melodyPlayer/player.js';

test('pickNote returns a frequency number', () => {
    const note = pickNote();
    expect(typeof note[1]).toBe('number')
})

test('tonic matches first index of restructured keys array', () => {
    const tonic = 'G#/Ab'
    const shiftedKeys = orderNotesTonicFirst(tonic)
    expect(tonic).toEqual(shiftedKeys[0])
})

test('validNotes begins with the provided tonic', () => {
  const tonic = 'G#/Ab'
  const scaleIntervals = "1P 2M 3M 5P 6M"
  expect(getValidNotes(tonic, scaleIntervals)[0]).toEqual(tonic)
})

test('validNotes has the same number of notes as the scale interval', () => {
    const tonic = 'G#/Ab'
    const testScaleIntervals = "1P 2M 3M 5P 6M"
    const testScaleSize = testScaleIntervals.split(' ').length
    expect(testScaleSize).toEqual(getValidNotes(tonic, testScaleIntervals).length)
})

test('all SCALES contain the correct IVLS', () => {
  const scaleIntervals = SCALES.map(scale => getScaleIntervalArray(scale[0]))
  scaleIntervals.forEach((intervalSet)=> {
    intervalSet.forEach(interval => expect(IVLS).toContain(interval))
  })
})

test('it turns a query string into an object', () => {
    var queryString = `?key=A&scale=oriental&melody=%5B%5B523.25%2C0%2C0.5%5D%2C%5B329.63%2C0.5%2C1%5D%2C%5B987.77%2C1%2C1.5%5D%2C%5B1760%2C1.5%2C2%5D%2C%5B311.13%2C2%2C2.5%5D%2C%5B174.61%2C2.5%2C3%5D%2C%5B987.77%2C3%2C4%5D%2C%5B523.25%2C4%2C5%5D%2C%5B622.25%2C5%2C6%5D%2C%5B659.25%2C6%2C7%5D%2C%5B698.46%2C7%2C8%5D%2C%5B830.61%2C8%2C9%5D%2C%5B880%2C9%2C10%5D%2C%5B987.77%2C10%2C13%5D%5D`
    expect(queryStringToObjectReduce(queryString)).toMatchObject({
        key: 'A',
        scale: 'oriental',
        melody: [
            [
              523.25,
              0,
              0.5
            ],
            [
              329.63,
              0.5,
              1
            ],
            [
              987.77,
              1,
              1.5
            ],
            [
              1760,
              1.5,
              2
            ],
            [
              311.13,
              2,
              2.5
            ],
            [
              174.61,
              2.5,
              3
            ],
            [
              987.77,
              3,
              4
            ],
            [
              523.25,
              4,
              5
            ],
            [
              622.25,
              5,
              6
            ],
            [
              659.25,
              6,
              7
            ],
            [
              698.46,
              7,
              8
            ],
            [
              830.61,
              8,
              9
            ],
            [
              880,
              9,
              10
            ],
            [
              987.77,
              10,
              13
            ]
        ]
    })
})
