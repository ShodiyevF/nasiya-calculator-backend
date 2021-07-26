let express = require('express')
let { Pool } = require('pg')

const app = express()

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Headers", "*")

    next()
})

const PORT = process.env.PORT || 3000

const pool = new Pool({
    host: "localhost",
    user: "nasiya",
    port: 5432,
    password: "savdo",
    database: "calculator"
})

const KURS = `
select * from kurs
`

const ADD = `
insert into kurs(kurs_sana, kurs_kurs) values (1, 2);
`


const rows = async(query) => {
    const client = await pool.connect()

    try{

        const { rows } = await client.query(query)
        return rows

    } finally {

        await client.release()

    }
    
}

app.get('/', async (req, res) => {
    const data = await rows(KURS)

    res.send(data)
})

app.listen(PORT, () => console.log('Manimcha ishladi'))