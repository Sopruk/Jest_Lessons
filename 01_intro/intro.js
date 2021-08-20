const summ = (a, b) => a+b;
const nativeNull = () => null;

const expect = (value) => {
    return {
        toBe : (exp) => {
            if(value === exp){
                console.log("Success")
            } else {
                console.log(`Value is ${value} but expectation is ${exp}`)
            }
        }
    }
} 
// expect(sum(4,21)).toBe(6)
module.exports = { summ, nativeNull }