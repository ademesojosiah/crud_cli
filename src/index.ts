import addData from "./addData";
import { fileCheck } from "./dbFileCheck";
import { getData } from "./getData";
import { deleteData } from "./deleteData";
import { getAllData } from "./allData";
import { isData } from "./dataExist";
import yargs from "yargs";
import updateData from "./updateData";





const options: any = yargs
.usage("Usage: --td search, --td add , --td delete, --td myData , --td updateData")
.option("td", { alias: "toDo", describe: "what to do", type: "string", demandOption: true })
.argv;


const param:string|null = options.toDo ? options.toDo : null


switch(param){
    case "search":
        getData()
        break;
    case "add":
        addData()
        break;
    case "delete":
        deleteData()
        break;
    case "myData":
        getAllData() 
        break; 
    case "updateData":
        updateData()
        break; 
    default:
        console.log("insert a valid argument")
        break;
    }

