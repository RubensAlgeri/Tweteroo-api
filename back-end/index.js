import express from "express"
import cors from "cors"
import chalk from "chalk"

const app = express();
app.use(cors());

app.post("/sign-up", (req,res)=>{

    res.send()
})

app.post("/tweets", (req,res)=>{

    res.send()
})

app.get("/tweets", (req,res)=>{

    res.send()
})

app.listen(5000, chalk.bold.green("aplicação no ar"));