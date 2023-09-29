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

readline.question("Type the name of the employee: ", nameFunction => {
    name = nameFunction
})

readline.question("Type the name of company that the employee belongs: ", companyFunction => {
    company = companyFunction
    readline.close()
})

readline.question("Type the email of the employee: ", emailFunction => {
    email = emailFunction
    readline.close()
})

readline.question("Type the phone of the employee: ", phoneFunction => {
    phone = phoneFunction
    readline.close()
})

readline.question("Type the role of the employee: ", roleFunction => {
    role = roleFunction
    readline.close()
})

emailGenerator({company, email, name, phone, role})