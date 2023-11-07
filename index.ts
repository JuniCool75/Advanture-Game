import chalk from "chalk";
import inquirer from "inquirer"

class Player{
    name!: string;
    fuel: number = 100;
    constructor (name:string) {
        this.name = name;   
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent {
    name!: string;
    fuel: number = 100;
    static select: string;
    constructor (name:string){
        this.name = name; 
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    
}

let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "please enter your name:"
})

let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"select your opponent",
    choices:["Skeleton", "Assassin", "Zombie"]
})

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

// ---------(do & while) use for in cmd work on continuely work 
 do{
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Select Your Opponent",
            choices:["attack", "Drinking", "Run For Your Life"],
        });
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if (num > 0){
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
                    process.exit()
                }
        
        }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.red.bold.italic("You Win"))
                process.exit()
            }
        }
        if(ask.opt == "Drinking") {
              p1.fuelIncrease()
              console.log(chalk.red.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
        }
        if(ask.opt == "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
            process.exit()
        }   
}
//Assassin
if (opponent.select ==  "Assassin") {
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select Your Opponent",
        choices:["attack", "Drinking", "Run For Your Life"],
    });
    if(ask.opt == "attack"){
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if (num > 0){
                console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
                process.exit()
            }
    
    }
        if (num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.red.bold.italic("You Win"))
            process.exit()
        }
    }
    if(ask.opt == "Drinking") {
          p1.fuelIncrease()
          console.log(chalk.red.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if(ask.opt == "Run For Your Life") {
        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
        process.exit()
    }   
}
//Zombie
if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select Your Opponent",
        choices:["attack", "Drinking", "Run For Your Life"],
    });
    if(ask.opt == "attack"){
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if (num > 0){
                console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
                process.exit()
            }
    
    }
        if (num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.red.bold.italic("You Win"))
            process.exit()
        }
    }
    if(ask.opt == "Drinking") {
          p1.fuelIncrease()
          console.log(chalk.red.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if(ask.opt == "Run For Your Life") {
        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
        process.exit()
    }   
}
 }

while(true)