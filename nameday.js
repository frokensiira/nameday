const BASE_URL = 'https://api.abalin.net/';

//Fetch API by name and country
const getNameDayByName = (inputName, inputCountry) => {

    const QUERY = `?name=${inputName}`;

    fetch(`${BASE_URL}getdate${QUERY}&country=${inputCountry}`).then((response) => {
        return response.json();
    }).then(data => {

        //If the result is empty, let the user know that the name does not exist as name day in chosen country
        if(data.results.length === 0){
            throw err;
        }
        
        //Go through the array of object results and choose only the ones that is a perfect match to input
        data.results.forEach(object => {
            
            let arrayOfObject = object.name.split(', ');
            
            arrayOfObject.forEach(name => {

                if(name.toLowerCase() === inputName.toLowerCase()){

                    let othersWithNameDay = arrayOfObject.filter((name) => {

                        if(name.toLowerCase() !== inputName.toLowerCase()){
                            return true;
                        }
                    });

                    renderNameResult(name, object.month, object.day, othersWithNameDay);
                } 
                
            });
        });

    }).catch(err => { 
        //Let user know that the name does not exist as name day in chosen country
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">The name does not have a name day in this country. Try another.</p>
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
        renderDateResult(data.data, month, day, inputCountry);

    }).catch(err => { 
        //Let user know what the error is  
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">${err}</p>
        </div>
        `;
    });
};

//Fetch API by todays date, country and timezone
const getNameDayToday = (inputTimezone, inputCountry) => {

    const QUERY = `?timezone${inputTimezone}&country=${inputCountry}`;

    fetch(`${BASE_URL}today${QUERY}`).then((response) => {
        return response.json();
    }).then(data => {
        //Calling the function that output the results in the DOM
        renderTodayResult(data.data, inputCountry);

    }).catch(err => { 
        //Let user know what the error is  
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">${err}</p>
        </div>
        `;
    });
};

