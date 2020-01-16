
//Buttons
const buttonChooseByDate = document.querySelector('#button-choose-by-date');
const buttonChooseByName = document.querySelector('#button-choose-by-name');
const buttonChooseToday = document.querySelector('#button-choose-today');
const buttonsEl = document.querySelector('#buttons');

//Divs
const chooseTimezoneEl = document.querySelector('#choose-timezone');
const form = document.querySelector('form');
const searchByDateEl = document.querySelector('#search-by-date');
const searchByNameEl = document.querySelector('#search-by-name');
const output = document.querySelector('#output');

//Input fields
const daysEl = document.querySelector('#days');
const monthsEl = document.querySelector('#months');
const nameEl = document.querySelector('#name');


/*
* Eventlisteners buttons
*/

//Todays Name Day button, hide buttons and display timezone dropdown
buttonChooseToday.addEventListener('click', (e) => {

    chooseTimezoneEl.classList.remove('d-none');
    buttonsEl.classList.add('d-none');

    document.querySelector('#timezone').setAttribute('required', '');

});

//Search By Name-button, hide buttons and display possibility to search by name
buttonChooseByName.addEventListener('click', () => {

    searchByNameEl.classList.remove('d-none');
    buttonsEl.classList.add('d-none');
    nameEl.setAttribute('required', '');

});

//Search By Date-button, hide buttons and display possibility to search by date
buttonChooseByDate.addEventListener('click', () => {

    searchByDateEl.classList.remove('d-none');
    buttonsEl.classList.add('d-none');
    daysEl.setAttribute('required', '');
    monthsEl.setAttribute('required', '');

});

//Back-button
form.addEventListener('click', (e) => {

    if(e.target.textContent === 'Back'){

        searchByDateEl.classList.add('d-none');
        searchByNameEl.classList.add('d-none');
        chooseTimezoneEl.classList.add('d-none');

        daysEl.value = "";
        monthsEl.value = "";
        nameEl.value = "";

        daysEl.removeAttribute('required');
        monthsEl.removeAttribute('required');
        nameEl.removeAttribute('required');

        buttonsEl.classList.remove('d-none');

        output.innerHTML = '';
        
    }
});

//Search/submit button, check which search the user chose 
form.addEventListener('submit', (e) => {

    output.innerHTML = '';

    e.preventDefault();

    const inputName = nameEl.value.trim().toLowerCase();
    const inputMonth = monthsEl.value;
    const inputDay = daysEl.value;
    const inputCountry = document.querySelector('select#country').value;
    const inputTimezone = document.querySelector('select#timezone').value;

    if(inputName){

        nameEl.removeAttribute('required');
        nameEl.value = "";

        getNameDayByName(inputName, inputCountry);

    } else if(inputMonth && inputDay){

        daysEl.removeAttribute('required');
        monthsEl.removeAttribute('required');

        daysEl.value = "";
        monthsEl.value = "";

        getNameDayByDate(inputMonth, inputDay, inputCountry);

    } else if(inputCountry && inputTimezone){

        getNameDayToday(inputTimezone, inputCountry);
    }
});

/*
* Render data to the DOM
*/

//Render result of Search By Name in the DOM 
const renderNameResult = (inputName, month, day, othersWithNameDay) => {

    //Check if other people have name day the same day
    if(othersWithNameDay.length > 0){
        const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">${inputName} has name day ${day}/${month}.</h2>
            <p class="card-text">Others that have name day the same day are: ${othersWithNameDay}</p>
        </div>
    </div>
    `;

    output.innerHTML += html;
    } else{
        const html =`
        <div class="output-wrapper card col-md-6 mx-auto">
            <div class="card-body">
                <h2 class="card-title">${inputName} has name day ${day}/${month}.</h2>
            </div>
        </div>
        `;

        output.innerHTML += html;
    }

};

//Find out name day depending on date
const calcNamesByDate = (names, id, inputCountry) => {

    const para = document.querySelector(id);

    names.forEach((name) => {

        para.innerText = name.namedays[inputCountry];

    });

};

//Render result of Search By Date in the DOM 
const renderDateResult = (names, month, day, inputCountry) => {

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">The following has name day ${day}/${month}:</h2>
            <p class="card-text" id="names-by-date"></p>
        </div>
    </div>
    `;

    output.innerHTML = html;

    calcNamesByDate(names, "#names-by-date", inputCountry);
};

//Render result of Search Name Day Today in the DOM 
const renderTodayResult = (names, inputCountry) => {

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">The following has name day today:</h2>          
            <p class="card-text" id="names-today"></p>
        </div>
    </div>
    `;

    output.innerHTML = html;

    calcNamesByDate(names, "#names-today", inputCountry);

};


















