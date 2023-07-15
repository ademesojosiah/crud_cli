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



    
 const updateData = async ():Promise<void>=>{
    const data = fileCheck()
    const info: IInfo[] = data as IInfo[]
    
    try {
    const idAnswers = await inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "your id?",
        },
      ]);

      const index = info.findIndex(inf => inf.id === idAnswers.id)

      if(index === -1)console.log("file does not exist ")

    const updateAnswers = await inquirer.prompt([
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



            


     const updatedAnswers ={
        id:idAnswers.id,
        ...updateAnswers
      }

      info[index] = { ...info[index],...updatedAnswers}



      
      const stringData  = JSON.stringify(info)
       fs.writeFileSync('db.json', stringData)
       



} catch (error) {
    console.log('internal error:',error)
}
    }


export default updateData
