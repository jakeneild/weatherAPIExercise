let showDays = function (b) {
    console.log(b)
    for (let i = 0; i < b.length; i++) {
        $("#output").append(
            $("<br>"),
            $("<br>"),
            $("<p>").text(`Day ${i + 1}`),
            $("<br>"),
            $("<div>").text = `Temp: ${b[i].main.temp}`,
            $("<br>"),
            $("<div>").text = `Conditions: ${b[i].weather[0].description}`,
            $("<br>"),
            $("<div>").text = `Air pressure: ${b[i].main.pressure}`,
            $("<br>"),
            $("<div>").text = `Wind speed: ${b[i].wind.speed}`,
        )
    }
}

let display = function () {
    let a = $("#input").val();
    console.log(a)
    if (a.length != 5) {
        alert("Please enter a valid zip")
    } else {
        $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${a},us&units=imperial&APPID=c09a5e98ee1300eed38efefc3ea03250`).then(data => {
            console.log(data)
            $("#output").append(
                $("<div>").text = `Temp: ${data.main.temp}`,
                $("<br>"),
                $("<div>").text = `Conditions: ${data.weather[0].description}`,
                $("<br>"),
                $("<div>").text = `Air pressure: ${data.main.pressure}`,
                $("<br>"),
                $("<div>").text = `Wind speed: ${data.wind.speed}`,
                $("<br>"),
                $("<button id='today'></button").text("Today's forecast").on("click", function () {

                }),
                $("<button id='threeDay'></button").text("Three day forecast").on("click", function () {
                    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${a}&units=imperial&APPID=c09a5e98ee1300eed38efefc3ea03250`).then(data => {
                        console.log(data)
                        showDays([data.list[0], data.list[8], data.list[16]]);
                    }
                    )
                })
                ,
                $("<button id='fiveDay'></button").text("Five day forecast").on("click", function () {
                    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${a}&units=imperial&APPID=c09a5e98ee1300eed38efefc3ea03250`).then(data => {
                        showDays([data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]]);
                    }
                    )
                }),
            )

        }
        )
    }
}


$("#button").on("click", display)



// Temperature
// Conditions
// Air pressure
// Wind speed
// An affordance to view the forecast for the current day, the next three days, or the next 7 days