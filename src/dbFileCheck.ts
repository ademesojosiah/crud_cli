import fs from "fs";
import {exit} from "process"
import { json } from "stream/consumers";
import { IInfo } from "./addData";



export const fileCheck = ():IInfo[] | void  =>{
    if(!fs.existsSync('db.json')){
        console.log("file does not exist ");
        exit(1);
    }

let data:IInfo[];
const info:Buffer = fs.readFileSync('db.json')
data = JSON.parse(info.toString())

return data


}