const dataB = JSON.parse(data);

const timetableBlock = document.querySelector('.timetable__block');

dataB.forEach(element => {
    const timetableEl = document.createElement('div');
    timetableEl.classList.add('timetable__element');

    const subtitle = document.createElement('h2');
    subtitle.classList.add('timetable__subtitle');
    subtitle.textContent = element.title;

    const time = document.createElement('p');
    time.classList.add('timetable__time');
    time.textContent = `Время проведения: ${element.time}`;

    const places = document.createElement('p');
    places.classList.add('timetable__places');
    places.textContent = `Количество мест: ${element.quanity}`;

    const placesAvail = document.createElement('p');
    placesAvail.classList.add('timetable__places-available');
    placesAvail.textContent = `Свободных мест: ${element.quanityAvail}`;


    const btnSignUp = document.createElement('button');
    btnSignUp.classList.add('btn');
    btnSignUp.classList.add('timetable__signup');
    btnSignUp.textContent = 'Записаться';
    btnSignUp.name = element.id;

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn');
    btnCancel.classList.add('timetable__cancel');
    btnCancel.textContent = 'Отменить запись';
    btnCancel.name = element.id;

    timetableEl.appendChild(subtitle);
    timetableEl.appendChild(time);
    timetableEl.appendChild(places);
    timetableEl.appendChild(placesAvail);
    timetableEl.appendChild(btnSignUp);
    timetableEl.appendChild(btnCancel);

    timetableBlock.appendChild(timetableEl);
});