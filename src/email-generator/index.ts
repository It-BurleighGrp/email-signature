import {signature} from '../model/signature'
import {TSignature} from '../types'


export async function emailGenerator({company, email, name, phone, role}: TSignature){
    const signatureModel = signature({company, email, name, phone, role})
    await Bun.write(`./csv/${name}.html`, signatureModel)
}