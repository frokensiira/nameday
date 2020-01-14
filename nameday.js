const BASE_URL = 'https://api.abalin.net/';

//Fetch API by name and country
const getNameDayByName = (inputName, inputCountry) => {

    const QUERY = `?name=${inputName}`;

    fetch(`${BASE_URL}getdate${QUERY}&country=${inputCountry}`).then((response) => {
        return response.json();
    }).then(data => {

        console.log(data.results);
        
        //Go through the array of object results and choose only the ones that is a perfect match to input
        data.results.forEach(object => {
            
            let arrayOfObject = object.name.split(', ');
            console.log('new array of object is:', arrayOfObject);
            
            arrayOfObject.forEach(name => {

                if(name.toLowerCase() === inputName.toLowerCase()){
                    console.log(name);
                    console.log(object);
                    console.log('i hope this is the right array', arrayOfObject);

                    let othersWithNameDay = arrayOfObject.filter((name) => {
                        console.log('name is', name);


                        if(name.toLowerCase() !== inputName.toLowerCase()){
                            return true;
                        }
                    });

                    console.log('others with name day are', othersWithNameDay);

                    renderNameResult(name, object.month, object.day, othersWithNameDay);

                }
                
            })




            //Check if the converted input name is included in any of the objects. If so, call the renderNameResult with relevant data
            //if(object.name.includes(newName + ',') ){

                //Find the others who also have name day the same day
/*                 nameLength = newName.length;
                newNameLength = nameLength + 2;
                let othersWithNameDay = object.name.slice(newNameLength); */
                
                //renderNameResult(newName, object.month, object.day, othersWithNameDay);
                //renderNameResult(newName, object.month, object.day, object.name);
            //}
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
        renderDateResult(data.data, month, day);

    }).catch(err => { 
        //Let user know what error is causedthe name does not exist as name day in chosen country
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
        renderTodayResult(data.data);

    }).catch(err => { 
        //Let user know what error is causedthe name does not exist as name day in chosen country
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">${err}</p>
        </div>
        `;
    });
};





//Exempel

//Today with timezone and country
const timezone = 'https://api.abalin.net/today ?timezone=America/Toronto&country=dk';

//Parametrar datum och land
const byDay = 'https://api.abalin.net/namedays?country=us&month=7&day=15';

//Parametrar namn och land
const byName = 'https://api.abalin.net/getdate?name=John&country=us';

















/* 
            let rows = myArray.length;
            console.log('find names function is called with parameter', myArray);
            for(let i=0; i<rows; i++){
                //console.log(myArray[i].name.split(', '));
                let newArray = myArray[i].name.split(', ');
                console.log(newArray);
        
                for(let n=0; n < myArray[i].name.split(', ').length; n++){
                    if(newArray[n].toLowerCase() === inputName){
                        
                        let foundName = newArray[n];
                        console.log('found name is', foundName);
                        console.log('array with anna is', newArray);

                        console.log(n);

                        //console.log('index of this array is', newArray.indexOf());
                    }
                    
                } */

                

        
    
/*         const findNames = () =>{

            let rows = myArray.length;
            console.log('find names function is called with parameter', myArray);
            for(let i=0; i<rows; i++){
                //console.log(myArray[i].name.split(', '));
                let newArray = myArray[i].name.split(', ');
                console.log(newArray);
        
                for(let n=0; n < myArray[i].name.split(', ').length; n++){
                    if(newArray[n].toLowerCase() === inputName){
                        
                        let foundName = newArray[n];
                        console.log('found name is', foundName);
                        console.log('array with anna is', newArray);

                        //return newArray;
                    }
                    
                }

                //return newArray;
        };



        console.log(findNames(myArray));
        const result = findNames(myArray);
        console.log('result is', result); */
        

            
/*             let items = myArray[i].length;
            console.log(i, items);
            for(let n=0; n<items; n++){
                //console.log(myArray[i][n] );
            } */