import fs from "fs";
import {exit} from "process"
import { json } from "stream/consumers";
import { IInfo } from "./addData";



export const getAllData = ():IInfo[] | void  =>{
    if(!fs.existsSync('db.json')){
        console.log("file does not exist,you've not created a DB file ");
        exit(1);
    }

let data:IInfo[];
const info:Buffer = fs.readFileSync('db.json')
data = JSON.parse(info.toString())

console.log(data)
return data


}