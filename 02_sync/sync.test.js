const Lodash = require("./sync");
let _ = new Lodash();
describe("Lodash: compact", ()=>{
    let arrey;

    beforeEach(()=>{
        arrey  = ["", undefined, " ", 42, 0, null, "null"];
    });
    afterAll(()=>{
        _ = new Lodash();
    })
    test("should bee defined", ()=>{
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    });
    test("should working arrey bee editable", ()=>{
        arrey.push(...["one","two"])
        expect(arrey).toContain("one");
        expect(arrey).toContain("two");
    })
    test("should remove falsy values from arrey", ()=>{
        const result = [" ", 42, "null"]
        expect(_.compact(arrey)).toEqual(result)
    })
    test("should not contains falsy value", ()=>{
        const arrey = ["", undefined, " ", 42, 0, null, "null"];
        expect(_.compact(arrey)).not.toContain("");
        expect(_.compact(arrey)).not.toContain(null);
        expect(_.compact(arrey)).not.toContain(0)
        expect(_.compact(arrey)).not.toContain(undefined)
    })
})

describe("Lodash: groupBy", ()=>{
    test("should bee defined", ()=>{
        expect(_.groupBy).toBeDefined();
        expect(_.groupBy).not.toBeUndefined();
    });  
    test("should groop arrey items by Math.floor", ()=>{
        const result = {
            2:[2.2, 2.4],
            3:[3.1, 3.9],
            4:[4.2],
        };
        const arrey = [2.2, 2.4, 4.2, 3.1, 3.9]
        expect(_.groupBy(arrey, Math.floor)).toEqual(result);
    }) 
    test("should group by length", ()=>{
        const arrey=["one", "two", "three"];
        const result={3:["one", "two"], 5:["three"]};
        expect(_.groupBy(arrey, "length")).toEqual(result);
    })         
})