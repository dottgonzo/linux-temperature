import temp from "../index"


temp().then((a) => {

    console.log({ "temp": a })

}).catch((err) => {
    console.log(err)
})