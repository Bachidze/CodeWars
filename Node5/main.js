#! /usr/bin/env node
const fs = require("fs/promises")
const {Command} = require("commander")

const program = new Command()

program
    .command("show")
    .description("It Displays All Info")
    .action(async() => {
        const data = await fs.readFile("data.json","utf-8")
        const parsedData = JSON.parse(data)
        console.log(parsedData)
    })

    program
        .command("add")
        .description("Adds a cost object")
        .argument("<cost>","Object Cost")
        .argument("<destination>","Cost Destination")
        .argument("<category>","Category")
        .action(async (cost,destination,category) =>{
            try {

                const data = await fs.readFile("data.json","utf-8")
            const parsedData = JSON.parse(data)
            const lastId = parsedData[parsedData.length - 1]?.id || 0
            const newObj = {
                id:lastId + 1,
                cost,
                destination,
                category,
                createdAt:new Date().toISOString()
            }

            
            parsedData.push(newObj)
            
            await fs.writeFile("data.json",JSON.stringify(parsedData))
            console.log("Expense Created Successsfully")
                
            } catch (error) {
                console.log("error Added Side",error)
            }
        })

        program
            .command("delete")
            .description("Deleted Expense")
            .argument("<id>","Check Last Id To delete")
            .action(async (id) => {
                try {

                    const data = await fs.readFile("data.json","utf-8")
                let parsedData = JSON.parse(data)
                parsedData = parsedData.filter(el => el.id !== Number(id))
                
                await fs.writeFile("data.json",JSON.stringify(parsedData))
                console.log("Deleted Successfully",new Date().toISOString())
                    
                } catch (error) {
                    console.log("error Delete Side",error)
                }
            })


            program
                .command("Search")
                .argument("<category>","Search Category")
                .action(async (category) => {
                    try {
                        const data = await fs.readFile("data.json", "utf-8");
                        const parsedData = JSON.parse(data);
                        const filteredData = parsedData.filter(el => el.category === category);
                        
                        if (filteredData.length === 0) {
                            console.log("This Category is Undefined Try Another");
                        } else {
                            console.log("Picked Successfully");
                            console.log(filteredData);
                        }
                    } catch (error) {
                        console.error("error Serach Side", error);
                    }
                });
                







program.parse()