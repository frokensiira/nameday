const inputDate = document.querySelector('input#start');

//const inputName = document.querySelector('input#name');

//const date = document.querySelector('#start').value;

const button = document.querySelector('button');

//const name = document.querySelector('#name').value;

const country = document.querySelector('option');



const form = document.querySelector('form');

const output = document.querySelector('#output');

/* let myObject = {
    se: "My, Ch"
};

console.log(Object.values(myObject)); */

//
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('#name').value.trim().toLowerCase();

    const inputMonth = document.querySelector('#months').value;

    const inputDay = document.querySelector('#days').value;

    const countryInput = document.querySelector('select#country').value;

    if(inputName){
        console.log(inputName);

        getNameDayByName(inputName, countryInput);

        document.querySelector('#name').value = "";
    } else if(inputMonth && inputDay){

        getNameDayByDate(inputMonth, inputDay, countryInput);
    }
});

//Show result of search by date in the DOM 
const renderDateResult = (names, month, day, country) => {


    console.log('country is:', country);
    console.log(names);

    console.log(names[0].namedays);

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <p class="card-title">The following has name day ${day}/${month}:</p>
            <ul id="name-list">
                
            </ul>
        </div>
    </div>
    `;

    output.innerHTML = html;

    const list = document.querySelector('#name-list');

    const listItem = document.createElement('li');

    names.forEach((name) => {

        const nameArray = Object.values(name);

        const nameByCountry = Object.values(nameArray[1]);

        console.log(nameByCountry);

        listItem.innerText = nameByCountry[0];
        list.append(listItem);
    });

}

//Show result of search by name in the DOM 
//ADD THE NAMES OF THE OTHERS WHO ALSO HAS NAME DAY
const renderNameResult = (inputName, month, day) => {

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">${inputName} has name day ${day}/${month}.</h2>
            <p class="card-text">Others that have name day the same day are: ${names}</p>
        </div>
    </div>
    `;

    output.innerHTML = html;
}

//Adding event to our search button
/* button.addEventListener('click', (e) => {

    //Prevent the submit event, i.e. prevent page from reloading
    e.preventDefault();
    
    //Getting the date from user
    const date = document.querySelector('#start').value;

    //Getting the name from user
    const name = document.querySelector('#name').value;

    //console.log(`Name is: ${name.value} and country is: ${country.value}`);

    if(name && country){
        console.log(`Name is: ${name} and country is: ${country.selectedIndex}`);
        
    } else if(date){
        console.log(date);
        
    }

}); */

/* countryInput.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target.attributes.value);
}); */



















//USE FOR LATER
//Disable the date field when name is filled
//inputDate.setAttribute('disabled', '');

//Disable the name field when date is filled
//inputName.setAttribute('disabled', '');


//Supported countrys 
/* Austria [at] 	Czechia [cz] 	Germany [de]
Denmark [dk] 	Spain [es] 	Finland [fi]
France [fr] 	Croatia [hr] 	Hungary [hu]
Italy [it] 	Poland [pl] 	Sweden [se]
Slovakia [sk] 	United States of America [us] */