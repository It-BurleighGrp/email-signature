import {signature} from '../model/signature'
import {TSignature} from '../types'


export async function emailGenerator({company, email, name, phone, role, companyLogo}: TSignature){
    try{
        const signatureModel = signature({company, email, name, phone, role, companyLogo})
        await Bun.write(`./csv/${name}.html`, signatureModel)
        console.log(`Your email signature generated for your employee ${name} is already completed, you can find it on csv folder`)
    } catch(error){
        console.log(`Error to generate a new email signature`)
    }
}