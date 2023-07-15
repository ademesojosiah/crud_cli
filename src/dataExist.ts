import { IInfo } from "./addData";
import { fileCheck } from "./dbFileCheck";

export function isData(id:string){
    const data = fileCheck()

    const info = data as IInfo[]

    return (info.find((inf)=>inf.id === id) ) ? true : false 
}