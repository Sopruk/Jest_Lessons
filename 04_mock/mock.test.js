const {map}=require("./mock");

describe("map: function", ()=>{
    let arrey;
    let mockFn=jest.fn();
    beforeEach(()=>{
        arrey=[1, 2, 3, 5];
        mockFn= jest.fn(x=>x*x);
    })
    test("sould call callback",()=>{        
        map(arrey, mockFn);
        expect(mockFn).toBeCalled();
    })

    test("sould call callback 4 times",()=>{
        map(arrey, mockFn);        
        expect(mockFn).toBeCalledTimes(4)
        expect(mockFn.mock.calls.length).toBe(4);
    })

    test("should pow 2 each elements",()=>{
        map(arrey, mockFn);
        expect(mockFn.mock.results[0].value).toBe(1)
        expect(mockFn.mock.results[1].value).toBe(4)
        expect(mockFn.mock.results[2].value).toBe(9)
        expect(mockFn.mock.results[3].value).toBe(25)
    })
    test("should pow 2 each elements",()=>{
        mockFn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValueOnce("42")
            .mockReturnValueOnce("42")
        expect(mockFn()).toBe(100)
        expect(mockFn()).toBe(200)
        expect(mockFn()).toBe("42")
        expect(mockFn()).toBe("42")
    })
})