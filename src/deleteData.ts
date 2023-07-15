import inquirer from "inquirer"
import fs from 'fs'
import { IInfo } from "./addData"
import { fileCheck } from "./dbFileCheck"
import { isData } from "./dataExist"
import { exit } from "process"

export const deleteData = async ():Promise<void> =>{
    const info:IInfo[]| void = fileCheck()

    const data:IInfo[] = info as IInfo[]

      const answer = await inquirer.prompt([
        {
            type:"input",
            name:"id",
            message: "your id ? "
        }
      ])


      if(!isData(answer.id)){
         console.log(`data -${answer.id}- doesn't exist`); 
         exit(1)
        }


      const remainingData = data.filter(singleData => singleData.id !== answer.id)

      const stringData  = JSON.stringify(remainingData)
      fs.writeFileSync('db.json', stringData)


      ;
    



}