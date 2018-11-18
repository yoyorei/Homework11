// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((observe) => {

    var row = tbody.append("tr");

    Object.entries(observe).forEach(([key, value]) => {

        var cell = tbody.append("td");

        cell.text(value);

    });
    
});

var button = d3.select("#filter-btn");

button.on("click", function()
{
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime");

    var inputCity = d3.select("#city");

    var inputState = d3.select("#state");

    var inputCountry = d3.select("#country");

    var inputShape = d3.select("#shape");

    var dateValue = inputDate.property("value");

    var cityValue = inputCity.property("value");

    var stateValue = inputState.property("value");

    var countryValue = inputCountry.property("value");

    var shapeValue = inputShape.property("value");

    var filteredData = tableData

    if (dateValue != ""){filteredData = filteredData.filter(date => date.datetime === dateValue);}

    if (cityValue != ""){filteredData = filteredData.filter(date => date.city === cityValue);}

    if (stateValue != ""){filteredData = filteredData.filter(date => date.state === stateValue);}

    if (countryValue != ""){filteredData = filteredData.filter(date => date.country=== countryValue);}

    if (shapeValue != ""){filteredData = filteredData.filter(date => date.shape === shapeValue);}

    var body = document.querySelector("tbody");

    while (body.firstChild) {

        body.removeChild(body.firstChild);
      }

    var newTbody = d3.select("tbody");

    filteredData.forEach((observe) => {

        var row = newTbody.append("tr");

        Object.entries(observe).forEach(([key, value]) => {

            var cell = newTbody.append("td");

            cell.text(value);

        });
    
    });

})