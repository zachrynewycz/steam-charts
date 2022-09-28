const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const puppeteer = require('puppeteer');
const fetch = require("node-fetch");

app.get("/getSteamUsers", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://store.steampowered.com/about/")
    
    let playerCount = await page.$eval('.online_stats', (el) => el.innerText);

    await browser.close()
    res.json(playerCount?.split("\n"))
})

app.get("/getTopGames", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://steamcharts.com/")
    
    const gameIds = await page.$$eval('#top-games > tbody > tr > td.game-name.left > a', el => el.map((td) => { return td.getAttribute("href").split("/")[2] }))
    const gameNames = await page.$$eval('#top-games > tbody > tr > td.game-name.left > a', el => el.map((td) => { return td.innerText }))
    const currentPlayers = await page.$$eval('#top-games > tbody > tr > td:nth-child(3)', el => el.map((td) => { return td.innerText }))
    const peakPlayers = await page.$$eval('#top-games > tbody > tr > td.num.period-col.peak-concurrent', el => el.map((td) => { return td.innerText }))
    
    let gameData = []
    
    for (let i in gameIds) {
        let game = {
            name: gameNames[i],
            id: gameIds[i],
            current: currentPlayers[i],
            peak: peakPlayers[i]
        }
        gameData.push(game)
    }
    await browser.close()
    res.json(gameData)
})

app.get("/getGamePlayerCount/:id", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://steamcharts.com/app/${req.params.id}`)
    
    const playerCount = await page.$$eval('#app-heading > div > span', el => el.map((td) => { return td.innerText }))
    
    await browser.close()
    res.json(playerCount)
})

app.get("/getRecords", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://steamcharts.com/")
    
    const game = await page.$$eval("#toppeaks > tbody > tr", e => e.map((td) => { return td.innerText.split("\t") }))
    const appids = await page.$$eval("#toppeaks > tbody > tr> td.game-name.left > a", e => e.map((td) => { return td.getAttribute("href").replace(/\D/g,''); }))
    
    let records = []
    
    for (let i in appids) {
        let record = {id: appids[i], data: game[i]}
        records.push(record)
    }
    await browser.close()
    res.json(records)
})

app.get("/getSteamGameData/:id", async (req, res) => {
    const request = await fetchAPI(`https://store.steampowered.com/api/appdetails?appids=${req.params.id}&l=english`)
    res.json(request)
})

app.get("/getSteamGameList", async (req, res) => {
    const request = await fetchAPI("http://api.steampowered.com/ISteamApps/GetAppList/v0002/")
    res.json(request)
})

const fetchAPI = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);