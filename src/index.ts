import addData from "./addData";
import { fileCheck } from "./dbFileCheck";
import { getData } from "./getData";
import { deleteData } from "./deleteData";
import { getAllData } from "./allData";
import { isData } from "./dataExist";
import yargs from "yargs";




// console.log(isData("b510ff97-d5ca-467d-a971-68a3eeec8b16"));

const options: any = yargs
.usage("Usage: -td search, add , delete, myData ")
.option("td", { alias: "toDo", describe: "what to do", type: "string", demandOption: true })
.argv;


const param:string|null = options.name ? options.name : null




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
    default:
        console.log("insert a valid argument")
        break;
    }

