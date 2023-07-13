import inquirer from "inquirer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { fileCheck } from "./dbFileCheck";

export enum Adult{
    y= "Adult",
    n = "minor"
}


export interface IInfo{
    id?:number;
    name:string;
    phone:number
    age:Adult;
    
}



    
 const addData = async ():Promise<void>=>{
    const data = fileCheck()
    const info: IInfo[] = data as IInfo[]
    
    try {
    const answers = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What's your name?",
        },
        {
          type: "number",
          name: "phone",
          message: "What's your phone?",
        },
        {
          type: "list",
          name: "age",
          message: "Are you an adult?",
          choices: [
            { name: "Y", value: "Adult" },
            { name: "N", value: "Minor" },
          ],
        },
      ]);

      const data:IInfo = {
        id: uuidv4(),
        ...answers
      }
            
      info.push(data)


      
      const stringData  = JSON.stringify(info)
       fs.writeFileSync('db.json', stringData)



} catch (error) {
    console.log('internal error:',error)
}
    }


export default addData
