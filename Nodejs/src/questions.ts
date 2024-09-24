import {EChoicesBoilerPlate} from './enum/choices-boilerplate.enum'

export const questions =[
    {
        type:"list",
        name:"tech",
        message:"Qual BoilerPlate devo criar?",
        choices:[EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS]
    },
    {
        type:"input",
        name:"techName",
        message:"Qual nome devo dar para pasta do Projecto",
        validate(folderName:string){
            console.log(folderName);
            return true;
        }
    }
]