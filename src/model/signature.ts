import {TSignature} from '../types'


export function signature({email, name, phone, role, company, companyLogo}: TSignature){
    return `<html>
    <table width="445" cellspacing="0" cellpadding="0" border="0">
       <tr>
          <td style="vertical-align: middle; text-align:left;color:#636b73;font-size:14px;font-family:Futura, 'Century Gothic', CenturyGothic, sans-serif; text-align:left">
             <span>
             <b><span style="color:#636b73;font-size:16px;font-family:Futura, 'Century Gothic', CenturyGothic, sans-serif">${name}</span></b>
             <br> 
             <span style="color:#636b73;font-size:14px;font-family:Futura, 'Century Gothic', CenturyGothic, sans-serif">${role}</span>
             <br>
             <span style="color:#636b73;font-size:14px;font-family:Futura, 'Century Gothic', CenturyGothic, sans-serif">${company}</span>
             </span> 
             <br>
             <br>
             <a style="display:inline-block" href="https://burleighgrp.com">
             <img src="data:image/png;base64,${companyLogo}"/>
             </a>
             <br>
             <br> 
             <table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:5px 0">
                <tr>
                   <td width="50%" style="vertical-align:top;padding-right:5px;font:14px Futura, 'Century Gothic', CenturyGothic, sans-serif">
                      <table cellspacing="0" cellpadding="0" border="0" style="margin:0 3px 3px 0;">
                         <tr>
                            <td style="padding-right:3px"><img width="22" height="22" src="https://s1g.s3.amazonaws.com/7fbf6459c5e80cf456c481f570a9fca7.png" alt="email" style="border:none;">
                            </td>
                            <td>
                               <span style="font:14px Futura, 'Century Gothic', CenturyGothic, sans-serif;">
                               <a href="${email}" style="color:#636b73;text-decoration:none;">${email}</a>
                               </span>
                            </td>
                         </tr>
                      </table>
                      <table cellspacing="0" cellpadding="0" border="0" style="margin:0 3px 3px 0;">
                         <tr>
                            <td style="padding-right:3px"><img width="22" height="22" src="https://s1g.s3.amazonaws.com/2675ef65b6748a44056e4a33699fd97e.png" alt="mobile" style="border:none;"> </td>
                            <td>
                               <span style="font:14px Futura, 'Century Gothic', CenturyGothic, sans-serif;">
                               <a href="tel:${phone}" style="color:#636b73;text-decoration:none;">
                               ${phone}
                               </a>
                               </span>
                            </td>
                         </tr>
                      </table>
                   </td>
                   <td width="50%" style="vertical-align:top;padding-left:5px;font:14px Futura, 'Century Gothic', CenturyGothic, sans-serif"></td>
                </tr>
             </table>
             <table cellpadding="0" cellpadding="0" border="0">
                <tr>
                </tr>
             </table>
             <a href="https://burleighgrp.com" style="text-decoration:none;color:#636b73;">burleighgrp.com</a>
             <br> 
          </td>
       </tr>
    </table>
    </tr> 
    </table> 
 </html>`
}