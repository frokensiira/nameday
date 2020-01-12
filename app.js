const buttonChooseByName = document.querySelector('#button-choose-by-name');

const buttonChooseByDate = document.querySelector('#button-choose-by-date');

const form = document.querySelector('form');

const output = document.querySelector('#output');

//Handle Search By Name-button, hide buttons and display possibility to search by name
buttonChooseByName.addEventListener('click', () => {

    document.querySelector('#search-by-name').classList.remove('d-none');

    document.querySelector('#buttons').classList.add('d-none');
});

//Handle Search By Date-button, hide buttons and display possibility to search by date
buttonChooseByDate.addEventListener('click', () => {

    document.querySelector('#search-by-date').classList.remove('d-none');

    document.querySelector('#buttons').classList.add('d-none');
});

//Handle Back-button, so the user can go back to the beginning
form.addEventListener('click', (e) => {

    //console.log(e.target.textContent);
    if(e.target.textContent === 'Back'){
        document.querySelector('#search-by-date').classList.add('d-none');
        document.querySelector('#search-by-name').classList.add('d-none');
        document.querySelector('#buttons').classList.remove('d-none');
        output.innerHTML = '';
    }
});

//When user clicks Search, check which 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('#name').value.trim().toLowerCase();

    const inputMonth = document.querySelector('#months').value;

    const inputDay = document.querySelector('#days').value;

    const inputCountry = document.querySelector('select#country').value;



    if(inputName){
        console.log(inputName);

        getNameDayByName(inputName, inputCountry);

        document.querySelector('#name').value = "";
    } else if(inputMonth && inputDay){

        getNameDayByDate(inputMonth, inputDay, inputCountry);

        //console.log('classlist of day is:', document.querySelector('#days').classList);

        //Ta bort felindikering - 
        if(document.querySelector('#days').classList.contains('border-danger')){

            console.log('days has the class border-danger');
            document.querySelector('#days').classList.remove('border-danger');
        } else if(document.querySelector('#months').classList.contains('border-danger')){

            console.log('days has the class border-danger');
            document.querySelector('#days').classList.remove('border-danger');
        }
        
        //Clear the date fields for new search
        document.querySelector('#months').value = "";
        document.querySelector('#days').value = "";


    } else if(inputMonth && !inputDay){
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">You have to submit month and day.</p>
        </div>
        `;
        document.querySelector('#days').classList.add('border-danger');
       
    } else if(!inputMonth && inputDay){
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">You have to submit month and day.</p>
        </div>
        `;
        document.querySelector('#months').classList.add('border-danger');
    } else if(!inputMonth && !inputDay){
        output.innerHTML = `
        <div class="output-wrapper card-body alert alert-light card col-md-6 mx-auto" role="alert">
            <p class="card-title">You have to submit month and day.</p>
        </div>
        `;
        document.querySelector('#months').classList.add('border-danger');
        document.querySelector('#days').classList.add('border-danger');
    }
});

//Remove border if user clicks on date or month
form.addEventListener('click', (e) => {
    console.log(e.target.id);
    if(e.target.id === 'months'){
        document.querySelector('#months').classList.remove('border-danger');
    } else if(e.target.id === 'days'){
        document.querySelector('#days').classList.remove('border-danger');
    }
});


//Show result of search by date in the DOM 
const renderDateResult = (names, month, day) => {

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <p class="card-title">The following has name day ${day}/${month}:</p>
            <ul id="name-list"></ul>
        </div>
    </div>
    `;

    output.innerHTML = html;

    calcNamesByDate(names);


/*     const list = document.querySelector('#name-list');

    const listItem = document.createElement('li');

    names.forEach((name) => {

        const nameArray = Object.values(name);

        const nameByCountry = Object.values(nameArray[1]);

        console.log(nameByCountry);

        listItem.innerText = nameByCountry[0];
        list.append(listItem);
    }); */

}

const calcNamesByDate = (names) => {

    console.log('in the calc names function');

    const list = document.querySelector('#name-list');

    const listItem = document.createElement('li');

    names.forEach((name) => {

        const nameArray = Object.values(name);

        const nameByCountry = Object.values(nameArray[1]);

        console.log(nameByCountry);

        listItem.innerText = nameByCountry[0];
        list.append(listItem);

        
    });

};

//Show result of search by name in the DOM 
//ADD THE NAMES OF THE OTHERS WHO ALSO HAS NAME DAY
const renderNameResult = (inputName, month, day) => {

    console.log('in the rendernameresult function before html');

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">${inputName} has name day ${day}/${month}.</h2>
            <p class="card-text">Others that have name day the same day are:</p>
            <ul id="name-list"></ul>
        </div>
    </div>
    `;

    console.log('in the rendernameresult function');

    output.innerHTML = html;
}




















//USE FOR LATER
//Disable the date field when name is filled
//inputDate.setAttribute('disabled', '');

//Disable the name field when date is filled
//inputName.setAttribute('disabled', '');

/* //Disables the date search when the user uses name search
form.name.addEventListener('keyup', (e) => {

    const month = document.querySelector('#months');

    const day = document.querySelector('#days');

    if(e.target.value){
        month.setAttribute('disabled', '');
        day.setAttribute('disabled', '');
    } else{
        month.removeAttribute('disabled');
        day.removeAttribute('disabled');
    }

}); */


//Supported countrys 
/* Austria [at] 	Czechia [cz] 	Germany [de]
Denmark [dk] 	Spain [es] 	Finland [fi]
France [fr] 	Croatia [hr] 	Hungary [hu]
Italy [it] 	Poland [pl] 	Sweden [se]
Slovakia [sk] 	United States of America [us] */