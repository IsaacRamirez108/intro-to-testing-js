// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function subtract(x, y)
{
    if (typeof x === "number" && typeof y === "number")
    {
        return x - y;
    }else
        return false;
}

function sayHello(input)
{
    if (input === true || input === false)
    {
        return "Hello, World!";
    }else
        return "Hello, " + input + "!";
    // if (input === "Alex")
    // {
    //     return "Hello, Alex!";
    // } else if ( input === "Pat") {
    //     return "Hello, Pat!"
    // }else
        //return "Hello, Jane!"
}