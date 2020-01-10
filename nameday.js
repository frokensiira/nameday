const BASE_URL = 'https://api.abalin.net/';



//Exempel

//Yesterday with timezone and country
const timezone = 'https://api.abalin.net/yesterday ?timezone=America/Toronto&country=pl';

//Parametrar datum och land
const byDay = 'https://api.abalin.net/namedays?country=us&month=7&day=15';

//Parametrar namn och land
const byName = 'https://api.abalin.net/getdate?name=John&country=us';

//Fetch API by name and country set to Sweden
const getNameDayByName = (inputName) => {

    const QUERY = `?name=${inputName}`;

    fetch(`${BASE_URL}getdate${QUERY}&country=se`).then((response) => {
        return response.json();
    }).then(data => {
/*         console.log(data);
        console.log(data.results); */
        const filteredResults = data.results.filter((object) =>{

            if(object.name.toLowerCase() === inputName){
                return true;
            }
        });

        renderNameResult(filteredResults[0].name, filteredResults[0].month, filteredResults[0].day);
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

