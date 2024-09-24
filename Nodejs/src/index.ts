import inquirer from "inquirer";
import { IAnswers } from "./interface/answersinterface";
import { questions } from "./questions";


class Init{
    constructor(){
        inquirer.prompt(questions).then((answers:IAnswers)=> {
            console.log(answers)
        })
    }
}
new Init();