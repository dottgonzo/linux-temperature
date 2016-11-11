//

import * as Promise from 'bluebird'
import * as child_process from 'child_process'

const pathExists = require('path-exists');



const exec = child_process.exec


function getTemp(tocat: string, unit?: string) {
    return new Promise<number>((resolve, reject) => {

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

        const tocat0 = '/sys/class/thermal/thermal_zone0/temp'
        const tocat1 = '/sys/class/thermal/thermal_zone0/temp'

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