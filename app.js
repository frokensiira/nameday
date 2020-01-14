const buttonChooseToday = document.querySelector('#button-choose-today');

const buttonChooseByName = document.querySelector('#button-choose-by-name');

const buttonChooseByDate = document.querySelector('#button-choose-by-date');

const form = document.querySelector('form');

const output = document.querySelector('#output');

document.querySelector('select#country').addEventListener('click', (e) => {
    console.log(e.target);
});

//Handle Todays Name Day button, hide buttons and display timezone dropdown
buttonChooseToday.addEventListener('click', (e) => {
    
    document.querySelector('#choose-timezone').classList.remove('d-none');
    document.querySelector('#buttons').classList.add('d-none');
    document.querySelector('#timezone').setAttribute('required', '');

});

//Handle Search By Name-button, hide buttons and display possibility to search by name
buttonChooseByName.addEventListener('click', () => {

    document.querySelector('#search-by-name').classList.remove('d-none');
    document.querySelector('#buttons').classList.add('d-none');
    document.querySelector('#name').setAttribute('required', '');

});

//Handle Search By Date-button, hide buttons and display possibility to search by date
buttonChooseByDate.addEventListener('click', () => {

    document.querySelector('#search-by-date').classList.remove('d-none');
    document.querySelector('#buttons').classList.add('d-none');
    document.querySelector('#days').setAttribute('required', '');
    document.querySelector('#months').setAttribute('required', '');
});

//Handle Back-button, so the user can go back to the beginning
form.addEventListener('click', (e) => {

    if(e.target.textContent === 'Back'){
        document.querySelector('#search-by-date').classList.add('d-none');
        document.querySelector('#search-by-name').classList.add('d-none');
        document.querySelector('#choose-timezone').classList.add('d-none');
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
    const inputTimezone = document.querySelector('select#timezone').value;

    if(inputName){

        getNameDayByName(inputName, inputCountry);
        document.querySelector('#name').removeAttribute('required');
        document.querySelector('#name').value = "";

    } else if(inputMonth && inputDay){
        document.querySelector('#days').removeAttribute('required');
        document.querySelector('#months').removeAttribute('required');
        getNameDayByDate(inputMonth, inputDay, inputCountry);
        
        //Clear the date fields for new search
        document.querySelector('#months').value = "";
        document.querySelector('#days').value = "";

    } else if(inputCountry && inputTimezone){
        console.log(e.target);

        console.log(`country is ${inputCountry} and timezone is ${inputTimezone}`);
        getNameDayToday(inputTimezone, inputCountry);
    }
});

const calcNamesByDate = (names) => {

    const list = document.querySelector('#name-list');

    const listItem = document.createElement('li');

    console.log('names:', names);

    names.forEach((name) => {

        const nameArray = Object.values(name);

        const nameByCountry = Object.values(nameArray[1]);

        console.log(nameByCountry);

        listItem.innerText = nameByCountry[0];
        list.append(listItem);

    });

};

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
};

//Show result of search by name in the DOM 
const renderNameResult = (inputName, month, day, othersWithNameDay) => {

    console.log('in renderNameresult', inputName, month, day);

    console.log('in the rendernameresult function before html');

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body">
            <h2 class="card-title">${inputName} has name day ${day}/${month}.</h2>
            <p class="card-text">Others that have name day the same day are: ${othersWithNameDay}</p>
        </div>
    </div>
    `;

    output.innerHTML += html;
};

const renderTodayResult = (names) => {

    const html =`
    <div class="output-wrapper card col-md-6 mx-auto">
        <div class="card-body" id="names-today">
            <h2 class="card-title">The following has name day today:</h2>
            
        </div>
    </div>
    `;

    output.innerHTML = html;

    const div = document.querySelector('#names-today');

    const para = document.createElement('p');

    names.forEach((name) => {

        console.log(name);

        const nameArray = Object.values(name);

        const nameByCountry = Object.values(nameArray[1]);

        console.log(nameByCountry);

        para.innerText = nameByCountry[0];
        div.append(para);
    }); 

};

//<ul id="names-today"></ul>



const points = [42, 3, 16, 8, 84];

const filteredPoints = [];

for(let i = 0; i < points.length; i++ ){

    
    if(points[i] > 8){
        filteredPoints.push(points[i]);
        
    }
    
}

console.log(filteredPoints);












