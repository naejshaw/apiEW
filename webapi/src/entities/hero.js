class Hero {
    constructor({ id, name, email, phone, message}) {
        this.id = Math.floor(Math.random() * 100) + Date.now()
        this.name = name
        this.email = email
        this.phone = phone
        this.message = message
    }

    isValid() {
        const propertyNames = Object.getOwnPropertyNames(this)
        const amountInvalid = propertyNames
            .map(property => (!!this[property]) ? null : `${property} is missing!`)
            .filter(item => !!item)
            
        return {
            valid: amountInvalid.length === 0,
            error: amountInvalid
        }
    }
}

module.exports = Hero

// const hero = new Hero({  name: "Chapolin", age: 100, power: "SuperForça"})
// console.log('valid', hero.isValid())
// console.log('valid', hero)