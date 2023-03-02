const string = require('./string');
test('testing String', () => {
    expect(string('Hello')).toMatch("Hello")
})
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});