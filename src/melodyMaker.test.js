const { pickNote } = require('./melodyMaker');

test('pickNote returns a number', () => {
    const note = pickNote();
    console.log(note)
    expect(typeof note).toBe('number')
})
