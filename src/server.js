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
    
    await browser.close()
    res.json(extractedTextArray)
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

    const currentPlayers = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('#detailStats > table > tbody > tr > td:nth-child(1) > span'))
        return tds.map(td => td.innerText)
    });

    const peakPlayers = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('#detailStats > table > tbody > tr > td:nth-child(2) > span'))
        return tds.map(td => td.innerText)
    })

    const gameNames = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('#detailStats > table > tbody > tr > td:nth-child(4) > a'))
        return tds.map(td => td.innerText)
    })

    const gameId = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('#detailStats > table > tbody > tr > td:nth-child(4) > a'))
        return tds.map(td => td.getAttribute("href").split("/")[4])
    })

    let gameData = []
    //dont run loop if there is no player data
    if (currentPlayers === null) console.log("noneer");
    
    //Fill all data in an array of objects
    for (let i in currentPlayers) {
        let newGame = {
            name: gameNames[i],
            id: gameId[i],
            current: currentPlayers[i],
            peak: peakPlayers[i]
        }
        gameData.push(newGame)
    }

    res.json(gameData)
    await browser.close()
})

app.listen(5000)