"use strict";
var Promise = require('bluebird');
var child_process = require('child_process');
var pathExists = require('path-exists');
var pkg = require("./package.json");
var exec = child_process.exec;
function getTemp(tocat, unit) {
    return new Promise(function (resolve, reject) {
        exec('cat ' + tocat, function (error, stdout, stderr) {
            if (error) {
                reject(error);
            }
            else {
                if (stdout) {
                    var temp_1 = { temperature: 0, max: 0, min: 0, cores: [], unit: 'default' };
                    var tempread = parseInt(stdout.replace('\n', ''));
                    if (tempread > 1000) {
                        temp_1.temperature = tempread / 1000;
                    }
                    else {
                        temp_1.temperature = tempread;
                    }
                    resolve(temp_1);
                }
                else {
                    reject('temp error');
                }
            }
        });
    });
}
function temp(unit) {
    return new Promise(function (resolve, reject) {
        var tocat0 = '/sys/class/thermal/thermal_zone0/temp';
        var tocat1 = '/sys/devices/platform/coretemp.0/hwmon/hwmon1/temp2_input';
        pathExists(tocat0).then(function (exists) {
            if (exists) {
                getTemp(tocat0).then(function (a) {
                    resolve(a);
                }).catch(function (err) {
                    reject(err);
                });
            }
            else {
                pathExists(tocat1).then(function (exists) {
                    if (exists) {
                        getTemp(tocat1).then(function (a) {
                            resolve(a);
                        }).catch(function (err) {
                            reject(err);
                        });
                    }
                    else {
                        reject('file di temperatura inesistente');
                    }
                }).catch(function (err) {
                    reject('Questo non dovrebbe succedere2');
                });
            }
        }).catch(function (err) {
            reject('Questo non dovrebbe succedere1');
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = temp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFFZixDQUFDLENBQUMsQ0FBQTtvQkFFTixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO29CQUM3QyxDQUFDO2dCQUVMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ1IsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUE7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUdMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQztBQTdDRDtzQkE2Q0MsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG5cbmltcG9ydCAqIGFzIFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnXG5pbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5cbmNvbnN0IHBhdGhFeGlzdHMgPSByZXF1aXJlKCdwYXRoLWV4aXN0cycpO1xuXG5jb25zdCBwa2cgPSByZXF1aXJlKFwiLi9wYWNrYWdlLmpzb25cIikgLy8gc2VydmUgcGVyIHByZW5kZXJ0aSBsYSB2ZXJzaW9uZSBkZWxsYSBhcGkgY29uIHBrZy52ZXJzaW9uXG5cblxuaW50ZXJmYWNlIEljb3JlcyB7XG5cbiAgICB0ZW1wOiBudW1iZXI7XG4gICAgdW5pdDogc3RyaW5nXG4gICAgY29yZW51bWJlcjogbnVtYmVyO1xuICAgIHZlcnNpb246IHN0cmluZztcbn1cblxuXG5pbnRlcmZhY2UgSXRlbXAge1xuXG4gICAgdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICB1bml0OiBzdHJpbmc7XG4gICAgbWF4OiBudW1iZXI7XG4gICAgbWluOiBudW1iZXI7XG4gICAgY29yZXM6IEljb3Jlc1tdO1xuXG59XG5cblxuY29uc3QgZXhlYyA9IGNoaWxkX3Byb2Nlc3MuZXhlY1xuXG5cbmZ1bmN0aW9uIGdldFRlbXAodG9jYXQ6IHN0cmluZywgdW5pdD86IHN0cmluZyk6IFByb21pc2U8SXRlbXA+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8SXRlbXA+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICBleGVjKCdjYXQgJyArIHRvY2F0LCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG5cblxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKHN0ZG91dCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcDogSXRlbXAgPSB7IHRlbXBlcmF0dXJlOiAwLCBtYXg6IDAsIG1pbjogMCwgY29yZXM6IFtdLCB1bml0OiAnZGVmYXVsdCcgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wcmVhZCA9IHBhcnNlSW50KHN0ZG91dC5yZXBsYWNlKCdcXG4nLCAnJykpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wcmVhZCA+IDEwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAudGVtcGVyYXR1cmUgPSB0ZW1wcmVhZCAvIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAudGVtcGVyYXR1cmUgPSB0ZW1wcmVhZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGVtcClcblxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCd0ZW1wIGVycm9yJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVtcCh1bml0PzogT2JqZWN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEl0ZW1wPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgLy8gcGVyIGkgc2lzdGVtaSBtdWx0aWNvcmUgdmFubm8gY29udHJvbGxhdGkgKyBmaWxlIGUgdmEgZmF0dGEgdW5hIG1lZGlhIChzZSBzaWFtbyBwcGlnbm9saSlcblxuICAgICAgICBjb25zdCB0b2NhdDAgPSAnL3N5cy9jbGFzcy90aGVybWFsL3RoZXJtYWxfem9uZTAvdGVtcCcgLy8gY29udHJvbGxhIHNlIGRhIHF1YWxjaGUgcGFydGUgY2kgc29ubyBtaW5pbWkgZSBtYXNzaW1pXG4gICAgICAgIGNvbnN0IHRvY2F0MSA9ICcvc3lzL2RldmljZXMvcGxhdGZvcm0vY29yZXRlbXAuMC9od21vbi9od21vbjEvdGVtcDJfaW5wdXQnIC8vIHF1aSBpIG1pbmltaSBlIG1hc3NpbWkgY2kgc29ubyBzaWN1cm9cblxuICAgICAgICBwYXRoRXhpc3RzKHRvY2F0MCkudGhlbihleGlzdHMgPT4ge1xuICAgICAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgICAgICAgIGdldFRlbXAodG9jYXQwKS50aGVuKChhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhdGhFeGlzdHModG9jYXQxKS50aGVuKGV4aXN0cyA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRUZW1wKHRvY2F0MSkudGhlbigoYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2ZpbGUgZGkgdGVtcGVyYXR1cmEgaW5lc2lzdGVudGUnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vPT4gdHJ1ZSBcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1F1ZXN0byBub24gZG92cmViYmUgc3VjY2VkZXJlMicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vPT4gdHJ1ZSBcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdCgnUXVlc3RvIG5vbiBkb3ZyZWJiZSBzdWNjZWRlcmUxJylcbiAgICAgICAgfSk7XG5cbiAgICB9KVxuXG59Il19
