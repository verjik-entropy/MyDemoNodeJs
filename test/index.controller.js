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
})