export default class Value {
    constructor(data) {
        this.copyright = data.copyright
        this.hdurl=data.hdurl
        this.explanation=data.explanation
    }

    get Template() {
        return`
        <h3>${this.copyright}</h3>
        <p>${this.explanation}<p>
        `
    }
}