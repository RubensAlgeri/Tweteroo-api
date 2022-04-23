import express from "express"
import cors from "cors"
import chalk from "chalk"

let infoUsuario = [];
let tweets = [];

const app = express();
app.use(express.json())
app.use(cors());

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    infoUsuario.push({username, avatar})
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    let tweetUsername = infoUsuario.find(item=>{return item.username == username})
    tweets.unshift({username, tweet, avatar: tweetUsername.avatar})
    res.send("OK")
})

app.get("/tweets", (req, res) => {

    res.send(tweets)
})

app.listen(5000, console.log(chalk.bold.green("aplicação no ar")));