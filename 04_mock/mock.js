function map(arrey, callback){
    const result = [];

    for(let i=0; i<arrey.length; i++){
        result.push(callback(arrey[i]))
    }
    return result;
}
module.exports = { map }