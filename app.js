const inputDate = document.querySelector('input#start');

//const inputName = document.querySelector('input#name');

//const date = document.querySelector('#start').value;

const button = document.querySelector('button');

//const name = document.querySelector('#name').value;

const country = document.querySelector('option');

const countryInput = document.querySelector('select#country');

const form = document.querySelector('form');

const output = document.querySelector('#output');

//
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('#name').value.trim().toLowerCase();

    const date = document.querySelector('#start').value;

    if(inputName){
        console.log(inputName);

        getNameDayByName(inputName);

        document.querySelector('#name').value = "";
    } else if(date){
        console.log(date);
    }
});

const renderNameResult = (inputName, month, day) => {

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">${inputName} has name day ${day}/${month}</h2>
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