const axios = require("axios");
const Ajax = require("./async");

jest.mock("axios");

describe("Ajax: echo", ()=>{
    test("should bee defined",()=>{
        expect(Ajax.echo).toBeDefined()
    });
    test("should return value async", async() => {
        const mocData = "some data"
        const result = await Ajax.echo(mocData);
        expect(result).toBe(mocData)
    })

    test("should return value with promise", () => {
        const mocData = "some data"
        Ajax.echo(mocData).then(data=>{
            expect(data).toBe(mocData)
        })
    })

    test("should catch error with promise", () => {
        Ajax.echo().catch(error=>{
            expect(error).toBe("error")
        })
    })
    test("should catch error with async/await", async () => {
        try{
            await Ajax.echo();
        }catch(e){
            expect(e.message).toBe("error");
        }
    })
})
describe("Ajax: get",()=>{
    let response;
    let todos;

    beforeEach(()=>{
        todos=[{
            id:1, title:"todo", completed:false
        }]

        response={
            data:{
                todos
            }
        }
    })
    test("should return data from backend",()=>{
        axios.get.mockReturnValue(response);

        return Ajax.get().then(data=>{
            expect(data.todos).toEqual(todos);
        });
    })
})