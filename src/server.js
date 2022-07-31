const puppeteer = require('puppeteer');
const express = require('express')
const app = express()
const fetch = require("node-fetch")

app.get("/getSteamUsers", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://store.steampowered.com/about/")

    let extractedText = await page.$eval('.online_stats', (el) => el.innerText);
    let extractedTextArray = extractedText.split("\n")
    
    res.json(extractedTextArray)
    await browser.close()
})

app.get("/getSteamGameList", async (req, res) => {
    const response = await fetch("http://api.steampowered.com/ISteamApps/GetAppList/v0002/")
    const data = await response.json()
    res.json(data)
})

app.get("/getTopGames", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://store.steampowered.com/stats/Steam-Game-and-Player-Statistics")

    const currentPlayers = await page.$$eval('#detailStats > table > tbody > tr > td:nth-child(1) > span', el => el.map((td) => {return td.innerText}))
    const peakPlayers = await page.$$eval('#detailStats > table > tbody > tr > td:nth-child(2) > span', el => el.map((td) => {return td.innerText}))
    const gameNames = await page.$$eval('#detailStats > table > tbody > tr > td:nth-child(4) > a', el => el.map((td) => {return td.innerText}))
    const gameIds = await page.$$eval('#detailStats > table > tbody > tr > td:nth-child(4) > a', el => el.map((td) => {return td.getAttribute("href").split("/")[4]}))

    let gameData = []

    for (let i in currentPlayers) {
        let newGame = {
            name: gameNames[i],
            id: gameIds[i],
            current: currentPlayers[i],
            peak: peakPlayers[i]
        }
        gameData.push(newGame)
    }
    res.json(gameData)
    await browser.close()
})

app.get("/getSteamGameData/:id", async (req, res) => {
    let app_id = req.params.id
    const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${app_id}`)
    const data = await response.json()
    res.json(data)
})

app.get("/getGamePlayerCount/:id", async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    let app_id = req.params.id
    await page.goto(`https://steamcharts.com/app/${app_id}`)

    const playerCount = await page.$$eval('#app-heading > div > span', el => el.map((td) => {return td.innerText}))

    res.json(playerCount)
    await browser.close()
})

app.listen(5000)