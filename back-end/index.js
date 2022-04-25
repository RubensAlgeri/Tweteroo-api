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

    if (username === '' || avatar === '') {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        infoUsuario.push({ username, avatar })
        res.status(201).send("OK");
    }
})

app.post("/tweets", (req, res) => {
    const { tweet } = req.body;
    let username  = req.header('user');

    if (username == '' || tweet == '') res.status(400).send("Todos os campos são obrigatórios!");
    else {
        let tweetUsername = infoUsuario.find(item => { return item.username == username })
        tweets.unshift({ username, tweet, avatar: tweetUsername.avatar })
        res.status(201).send("OK");
    }
})

app.get("/tweets", (req, res) => {
    const page = req.query.page;
    if (page >= 1) {
        if (tweets.length > 10) {
        }

        res.status(200).send(tweets.slice((page-1)*10, (page)*10))
    } else res.status(400).send("Informe uma página válida!")
})

app.get("/tweets/:username", (req, res) => {
    const {username} = req.params;
    console.log(username)
    let userTweets = tweets.filter(item => { return item.username == username })
    if (userTweets) {
        res.status(200).send(userTweets)
    }else res.status(400).send("Informe um usuário válido!")
})

app.listen(5000, console.log(chalk.bold.green("aplicação no ar")));