async function getData() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let responseBody = await response.json()

        createTable(responseBody)

    } catch (err) {

        console.log(err)

    }


}

function createTable(responseBody) {

    let table = new gridjs.Grid({
        columns : ['userId', 'Id', 'title'],
        data: responseBody,
        pagination: {
            limit: 6,
            summary: true
        }, 
        style : {
            th : {
                'background-color' : '#8ed433', 
                'color': '#484e57'
            }
        }
    })
    let tableOutput = document.getElementById("allData")
    table.render(tableOutput)

}


getData()