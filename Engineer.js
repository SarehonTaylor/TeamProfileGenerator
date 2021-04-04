const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, role, gitGub) {
            super(name, email, id role)
            this.gitGub=gitGub

    }
    gitGub() {
        return this.gitHub;
    }
    module.exports = Engineer;