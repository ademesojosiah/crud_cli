import fs from "fs";
import {exit} from "process"
import { json } from "stream/consumers";



export const fileCheck = ():void =>{
    if(!fs.existsSync('db.json'))
        return console.log("file does not exist ");
        // exit(1);

let data:string[];
const info:Buffer = fs.readFileSync('db.json')
data = JSON.parse(info.toString())

console.log(data)


}