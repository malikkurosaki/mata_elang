
async function main() {
    let list = [{
        name: "malik",
        umur: 20
    }, {
        name: "poarsman",
        umur: 90
    }]

    list.forEach( data => {
        data.name = data.umur
    })


    console.log(list)
}

main()