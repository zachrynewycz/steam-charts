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

app.listen(5000)