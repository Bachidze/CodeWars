#! /usr/bin/env node
const fs = require("fs/promises")
const axios = require("axios")
const { Command } = require("commander")

//Budget

const program = new Command()

program
    .command("show")
    .description("Info About Budget")
    .action(async () => {
        try {
            const data = await fs.readFile("data.json","utf-8")
            const parsedData = JSON.parse(data)
            console.log(parsedData)
        } catch (error) {
            console.log(error,"error")
        }
    })

    program
        .command("add")
        .argument('<amount>',"amount")
        .argument("<destination>","Destination")
        .action(async (amount,destination) => {
            const data = await fs.readFile("data.json","utf-8")
            const parsedData = JSON.parse(data)
            const lastId = parsedData[parsedData.length - 1]?.id || 0
            const newObj = {
                id:lastId + 1,
                amount,
                destination,
                sendAt:new Date().toISOString()
            }
            parsedData.push(newObj)
            await fs.writeFile("data.json",JSON.stringify(parsedData))
            console.log("Send Successfully")
        })

        program
            .command("delete")
            .argument("<id>")
            .action(async(id) => {
                const data = await fs.readFile("data.json","utf-8")
                let parsedData = JSON.parse(data)
                parsedData = parsedData.filter(el => el.id !== Number(id))
                await fs.writeFile("data.json",JSON.stringify(parsedData))
                console.log("Deleted Successfully")
            })






program.parse()





//Weather
/*
const program = new Command()

program
.command("show")
    .argument("<city>","Picked City")
    .description("Give Information About Weather C")
    .action(async (city) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`)
            const temp = res.data.main.temp
            console.log(`temp ${city} is ${temp} `)
        } catch (error) {
            console.log(error,"error")
        }
    })



program.parse() */

