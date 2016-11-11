//

import * as Promise from 'bluebird'
import * as child_process from 'child_process'

const pathExists = require('path-exists');


interface Icores {

temp:number;
unit:string
corenumber:number

}


interface Itemp {

media:number
unit:string

cores: Icores[]

}


const exec = child_process.exec


function getTemp(tocat: string, unit?: string) {
    return new Promise<Itemp>((resolve, reject) => {

        exec('cat ' + tocat, (error, stdout, stderr) => {


            if (error) {
                reject(error)
            } else {

                if (stdout) {
                    let temp
                    const tempread = parseInt(stdout.replace('\n', ''))
                    if (tempread > 1000) {
                        temp = tempread / 1000
                    } else {
                        temp = tempread
                    }
                    resolve(temp)


                } else {
                    reject('temp error')

                }

            }

        })

    })
}

export default function temp(unit?: string) {
    return new Promise((resolve, reject) => {

// per i sistemi multicore vanno controllati + file e va fatta una media (se siamo ppignoli)

        const tocat0 = '/sys/class/thermal/thermal_zone0/temp' // controlla se da qualche parte ci sono minimi e massimi
        const tocat1 = '/sys/devices/platform/coretemp.0/hwmon/hwmon1/temp2_input' // qui i minimi e massimi ci sono sicuro

        pathExists(tocat0).then(exists => {
            if (exists) {
                getTemp(tocat0).then((a) => {
                    resolve(a)
                }).catch((err) => {
                    reject(err)

                })

            } else {

            }

            //=> true 
        }).catch(err => {
            reject(err)

        });

    })

}