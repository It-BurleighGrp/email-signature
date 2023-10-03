import {emailGenerator} from './src/email-generator'
import Readline from 'readline'

let name = ''
let company = ''
let email = ''
let phone = ''
let role = ''

const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const question1 = () => {
    return new Promise((resolve) => readline.question("Type the name of the employee: ", nameFunction => {
            name = nameFunction
            resolve(nameFunction)
        })
    )
}
const question2 = () => {
    return new Promise((resolve) => {
        readline.question("Type the name of company that the employee belongs: ", companyFunction => {
            company = companyFunction
            resolve(companyFunction)
        })
    })
}
const question3 = () => {
    return new Promise((resolve, reject) =>{
        readline.question("Type the email of the employee: ", emailFunction => {
            email = emailFunction
            resolve(emailFunction)
        })
    })
}
const question4 = () => {
    return new Promise((resolve, reject) =>{
        readline.question("Type the phone of the employee: ", phoneFunction => {
            phone = phoneFunction
            resolve(phoneFunction)
        })
    })
}
const question5 = () => {
    return new Promise((resolve, reject) =>{
        readline.question("Type the role of the employee: ", roleFunction => {
            role = roleFunction
            resolve(roleFunction)
        })
    })
}

async function main(){
    await question1()
    await question2()
    await question3()
    await question4()
    await question5()


    readline.close()
    emailGenerator({company, email, name, phone, role})
}

main()
