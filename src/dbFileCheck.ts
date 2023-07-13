import fs from "fs";
import {exit,argv0} from "process"



export const fileCheck = ():void =>{
    console.log(argv0)
    if(!fs.existsSync('db.json'))
        return console.log("file does not exist ");
        // exit(1);

let data:string[]|string;
const info:Buffer = fs.readFileSync('db.json')
data = info.toString()

console.log(data)


}