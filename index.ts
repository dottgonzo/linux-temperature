//

import * as Promise from 'bluebird'
import * as child_process from 'child_process'

const pathExists = require('path-exists');

const pkg = require("./package.json") // serve per prenderti la versione della api con pkg.version


interface Icores {

    temp: number;
    unit: string
    corenumber: number;
    version: string;
}


interface Itemp {

    temperature: number;
    unit: string;
    max: number;
    min: number;
    cores: Icores[];

}


const exec = child_process.exec


function getTemp(tocat: string, unit?: string): Promise<Itemp> {
    return new Promise<Itemp>((resolve, reject) => {

        exec('cat ' + tocat, (error, stdout, stderr) => {


            if (error) {
                reject(error)
            } else {


                if (stdout) {
                    let temp: Itemp = { temperature: 0, max: 0, min: 0, cores: [], unit: 'default' }
                    const tempread = parseInt(stdout.replace('\n', ''))
                    if (tempread > 1000) {
                        temp.temperature = tempread / 1000
                    } else {
                        temp.temperature = tempread
                    }
                    resolve(temp)


                } else {
                    reject('temp error')
                }

            }

        })

    })
}

export default function temp(unit?: Object) {
    return new Promise<Itemp>((resolve, reject) => {

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
                pathExists(tocat1).then(exists => {

                    if (exists) {

                        getTemp(tocat1).then((a) => {
                            resolve(a)
                        }).catch((err) => {
                            reject(err)

                        })

                    } else {
                        reject('file di temperatura inesistente')
                    }
                    //=> true 
                }).catch(err => {
                    reject('Questo non dovrebbe succedere2')
                });
            }

            //=> true 
        }).catch(err => {
            reject('Questo non dovrebbe succedere1')
        });

    })

}