// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function within code.js', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("subtract", function ()
{
    it("should be a define function", function()
    {
       expect(typeof subtract).toBe("function");
    });
    it("should return a number when passed two number arguments", function()
    {
        expect(typeof subtract(3,1)).toBe("number");
    });
    it("should return a false when passed any argument that is not a number", function()
    {
        expect(subtract()).toBe(false);
        expect(subtract(2)).toBe(false);
        expect(subtract("banana", 6)).toBe(false);
    });
    it("it should return 34 when passed the arguments 64 and 30", function()
    {
        expect(subtract(64,30)).toBe(34);
    });
});

// Exercise 1
describe("sayHello", function ()
{
    it("should return a string when called", function(){
        expect(typeof sayHello).toBe("function")
    })
    // Exercise 2
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string")
    })
    // Exercise 3
    it("should return Hello, Jane!", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    })
    // Exercise 4
    it("should return Hello, Alex!", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    })
    // Exercise 5
    it("should return Hello, Pat!", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    // Exercise 8
    it("should return Hello, World!", function(){
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it("should return Hello, World!", function(){
        expect(sayHello(false)).toBe("Hello, World!")
    })
});