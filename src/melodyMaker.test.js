const { pickNote, pickRandomKey, shiftKeys, getValidNotes } = require('./melodyMaker');

test('pickNote returns a frequency number', () => {
    const note = pickNote();
    expect(typeof note).toBe('number')
})

test('tonic matches first index of restructured keys array', () => {
    const tonic = pickRandomKey()
    const shiftedKeys = shiftKeys(tonic)
    expect(tonic).toEqual(shiftedKeys[0])
})

test('validNotes has the same number of notes as the scale interval', () => {
    const tonic = pickRandomKey()
    const testScaleIntervals = "1P 2M 3M 5P 6M"
    const testScaleSize = testScaleIntervals.split(' ').length
    expect(testScaleSize).toEqual(getValidNotes(tonic, testScaleIntervals).length)
})
