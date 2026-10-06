











$("button").click(function () {

    let forUnit = $("#unit").val()
    let toUnit = $("#tOunit").val()
    let userInput = $("#unitInput").val()
    if (forUnit === "meter" && toUnit === "kilometer") {
        $("h3").text(userInput / 1000)
    }
    else if (forUnit === "meter" && toUnit === "mile") {
        $("h3").text(userInput * 0.000621371)
    }
    else if (forUnit === "meter" && toUnit === "feet") {
        $("h3").text(userInput * 3.28084)
    }
    else if (forUnit === "meter" && toUnit === "inch") {
        $("h3").text(userInput * 39.3701)
    }
    else if (forUnit === "kilometer" && toUnit === "meter") {
        $("h3").text(userInput * 1000)
    }
    else if (forUnit === "kilometer" && toUnit === "mile") {
        $("h3").text(userInput * 0.621371)
    }
    else if (forUnit === "kilometer" && toUnit === "feet") {
        $("h3").text(userInput * 3280.84)
    }
    else if (forUnit === "kilometer" && toUnit === "inch") {
        $("h3").text(userInput * 39370.1)
    }
    else if (forUnit === "mile" && toUnit === "meter") {
        $("h3").text(userInput * 1609.344)
    }
    else if (forUnit === "mile" && toUnit === "kilometer") {
        $("h3").text(userInput * 1.609344)
    }
    else if (forUnit === "mile" && toUnit === "feet") {
        $("h3").text(userInput * 5280)
    }
    else if (forUnit === "mile" && toUnit === "inch") {
        $("h3").text(userInput * 63360)
    }
    else if (forUnit === "feet" && toUnit === "meter") {
        $("h3").text(userInput * 0.3048)
    }
    else if (forUnit === "feet" && toUnit === "kilometer") {
        $("h3").text(userInput / 3280.84)
    }
    else if (forUnit === "feet" && toUnit === "mile") {
        $("h3").text(userInput / 5280)
    }
    else if (forUnit === "feet" && toUnit === "inch") {
        $("h3").text(userInput * 12)
    }
    else if (forUnit === "inch" && toUnit === "meter") {
        $("h3").text(userInput * 0.0254)
    }
    else if (forUnit === "inch" && toUnit === "kilometer") {
        $("h3").text(userInput * 0.0000254)
    }
    else if (forUnit === "inch" && toUnit === "mile") {
        $("h3").text(userInput / 63360)
    }
    else if (forUnit === "inch" && toUnit === "feet") {
        $("h3").text(userInput / 12)
    }
    else if(forUnit === toUnit){
        $("h3").text("")
    }
    else {
        $("h3").text("0")
    }
    
    

})


