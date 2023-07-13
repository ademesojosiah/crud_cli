import inquirer from "inquirer"
import { IInfo } from "./addData"
import { fileCheck } from "./dbFileCheck"


export const getData = async():Promise<void> =>{

try {
    
    const info:IInfo[]| void = fileCheck()

    const data:IInfo[] = info as IInfo[]

      const answer = await inquirer.prompt([
        {
            type:"input",
            name:"id",
            message: "your id ? "
        }
      ])


      const singleData = data.filter(singleData => singleData.id === answer.id)

      console.log(singleData);
} catch (error) {
    
}

}