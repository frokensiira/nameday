const BASE_URL = 'https://api.abalin.net/';

//Fetch API by name and country
const getNameDayByName = (inputName, inputCountry) => {

    const QUERY = `?name=${inputName}`;

    fetch(`${BASE_URL}getdate${QUERY}&country=${inputCountry}`).then((response) => {
        return response.json();
    }).then(data => {

        //Go through all the results that match the search and choose only the ones that is a perfect match
        const filteredResults = data.results.filter((object) =>{

            if(object.name.toLowerCase() === inputName){
                return true;
            } 
        });

        //Calling the function that output the results in the DOM
        renderNameResult(filteredResults[0].name, filteredResults[0].month, filteredResults[0].day);

        //getNameDayByDate(filteredResults[0].month, filteredResults[0].day, inputCountry)

    }).catch(err => { 
        //Let user know that the name does not exist as name day
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">The name does not have a name day. Try another.</p>
        </div>
        `;
    });
};

//Fetch API by date and country
const getNameDayByDate = (month, day, inputCountry) => {

    const QUERY = `?country=${inputCountry}&month=${month}&day=${day}`;

    fetch(`${BASE_URL}namedays${QUERY}`).then((response) => {
        return response.json();
    }).then(data => {

        //Calling the function that output the results in the DOM
        renderDateResult(data.data, month, day);

    }).catch(err => { 

    });
};
















//Exempel

//Yesterday with timezone and country
const timezone = 'https://api.abalin.net/yesterday ?timezone=America/Toronto&country=pl';

//Parametrar datum och land
const byDay = 'https://api.abalin.net/namedays?country=us&month=7&day=15';

//Parametrar namn och land
const byName = 'https://api.abalin.net/getdate?name=John&country=us';
