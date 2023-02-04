const myFunction = ( event, context, callback) => {
     callback(null, true)
}

const uncoveredFunction = ( event, context, callback) => {
    callback(null, true)
}

module.exports.myFunction = myFunction