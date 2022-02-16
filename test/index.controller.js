describe('index controller test', () => {
    it('true must be true', () => {
        expect(true).toBeTrue
    })

    it('false to be false', () => {
        expect(false).toBeFalse
    })

    it('square should match result', () => {
        expect(5 * 5).toBe(25)
    })

    it('multiply should work', () => {
        expect(13 * 2).toBe(26)
    })

    it('subtract should sum up', () => {
        expect(14 - 1).toBe(13)
    })
})