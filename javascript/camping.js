let stateDropdown = $('#departamentos');
let cityDropdown = $('#ciudades');

stateDropdown.prop('selectedIndex', 0);
let jsonData = {};

const url = '../javascript/data.json';
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        stateDropdown.append($('<option></option>').attr('value', entry.id).text(entry.departamento));
    });
    jsonData = data;
});

stateDropdown.on('change', function(){
    let stateValue = this.value;

    $.each(jsonData, function (key, entry) {
        if ( entry.id == stateValue ) {
            cityDropdown.empty();
            cityDropdown.append($('<option></option>').attr('value', '').text('Selecciona una Ciudad'));
            cityDropdown.prop('selectedIndex', 0);
            if ( !entry.ciudades == false ) {
                $.each(entry.ciudades, function (key, entry) {
                    cityDropdown.append($('<option></option>').attr('value', key).text(entry));
                });
            }
        }
    });
});