
const temperatures = [-5, 10, 22, 34];

//: F = C × 9 / 5 +32
function celsiusVersFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function decrireTemperature(celsius) {
    if (celsius < 10) {
        return "Froid";

    }
    else if (celsius <= 25) {
        return "Doux";

    }
    else {
        return "Chaud";

    }
}

for (const temperature of temperatures) {
    console.log(`celsiusVersFahrenheit(${temperature}) -> ${celsiusVersFahrenheit(temperature)}`);
    console.log(`decrireTemperature(${temperature}) -> "${decrireTemperature(temperature)}"`);
}