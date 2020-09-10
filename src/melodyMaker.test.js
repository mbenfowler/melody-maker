const { pickNote, pickRandomKey, shiftKeys } = require('./melodyMaker');

test('pickNote returns a frequency number', () => {
    const note = pickNote();
    expect(typeof note).toBe('number')
})

test('key matches first index of restructured keys array', () => {
    const tonic = pickRandomKey()
    const shiftedKeys = shiftKeys(tonic)
    expect(tonic).toEqual(shiftedKeys[0])
})
