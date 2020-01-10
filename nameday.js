const BASE_URL = 'https://api.abalin.net/';



//Exempel

//Yesterday with timezone and country
const timezone = 'https://api.abalin.net/yesterday ?timezone=America/Toronto&country=pl';

//Parametrar datum och land
const byDay = 'https://api.abalin.net/namedays?country=us&month=7&day=15';

//Parametrar namn och land
const byName = 'https://api.abalin.net/getdate?name=John&country=us';

//Fetch API by name and country set to Sweden
const getNameDayByName = (inputName, inputCountry) => {

    const QUERY = `?name=${inputName}`;

    fetch(`${BASE_URL}getdate${QUERY}&country=${inputCountry}`).then((response) => {
        return response.json();
    }).then(data => {

        const filteredResults = data.results.filter((object) =>{

            if(object.name.toLowerCase() === inputName){
                return true;
            }
        });

        renderNameResult(filteredResults[0].name, filteredResults[0].month, filteredResults[0].day);
    }).catch(err => { 

    });
};

//Fetch API by date and country set to Sweden
const getNameDayByDate = (month, day, inputCountry) => {

    const QUERY = `?country=${inputCountry}&month=${month}&day=${day}`;

    fetch(`${BASE_URL}namedays${QUERY}`).then((response) => {
        return response.json();
    }).then(data => {

        //console.log(data.data.namedays.);

        renderDateResult(data.data, month, day, inputCountry);
        //console.log('Month is:', inputMonth);
        //console.log('Day is:', inputDay);

/*         const filteredResults = data.results.filter((object) =>{

            if(object.name.toLowerCase() === inputName){
                return true;
            }
        });

        renderNameResult(filteredResults[0].name, filteredResults[0].month, filteredResults[0].day); */
    }).catch(err => { 

    });
};

/* //Fetch API by name and country
const getNameDayByName = (name, country) => {

    const QUERY = `?name=${name.value}&country=${country}`;

    fetch(`${BASE_URL}getdate${QUERY}`).then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {

    });
};
 */

