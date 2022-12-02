
const list = [
    { "input": "senang", "output": "1" },
    { "input": "sedih", "output": "0" },
    { "input": "galau", "output": "0" },
    { "input": "murung", "output": "0" },
    { "input": "marah", "output": "0" },
    { "input": "bahagia", "output": "1" },
    { "input": "gembiraa", "output": "1" },
    { "input": "bangga", "output": "1" },
    { "input": "senyum", "output": "1" },
    { "input": "puas", "output": "1" },
    { "input": "tertawa", "output": "1" },
    { "input": "lega", "output": "1" },
    { "input": "menangis", "output": "0" },
    { "input": "sedih", "output": "0" },
    { "input": "haancur", "output": "0" },
    { "input": "pecah", "output": "1" }
]

let brain = new (require('brain.js').recurrent.LSTM)()
const fs = require('fs');

async function train() {
    brain.train(list, {
        iterations: 500,
        errorThresh: 0.005,
        logPeriod: 10,  
        learningRate: 0.3,
        momentum: 0.1,
        log: (e) => console.log(e)
    })

    fs.writeFileSync('xtrain.json', JSON.stringify(brain.toJSON()), 'utf-8')
    console.log("berhasil")

}

async function jalankan() {

    brain.fromJSON(require('./xtrain.json'))

    console.log(brain.run("saya bangga dengan kamu"))
}


async function getData(){

}


