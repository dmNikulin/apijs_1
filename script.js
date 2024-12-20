const btnSign = document.querySelectorAll('.timetable__signup');
const btnCancel = document.querySelectorAll('.timetable__cancel');
const quanityAvailableUpdate = document.querySelectorAll('.timetable__places-available');

let isRegistred = false;


btnSign.forEach(element => {
    element.addEventListener('click', function() {
        switch (element.name) {
            case element.name:
                if (dataB[element.name].quanityAvail == 0) {
                    alert('Свободных мест для записи больше нет.');
                    element.setAttribute('disabled', 'disabled');
                    break;
                } else {
                    if (isRegistred === false) {
                        dataB[element.name].quanityAvail -= 1;
                        quanityAvailableUpdate[element.name].textContent = `Свободных мест: ${dataB[element.name].quanityAvail}`;
                        //element.setAttribute('disabled', 'disabled');
                        isRegistred = true;
                        break;
                    }
                }
            default:
                break;
        }
    })
});

btnCancel.forEach(element => {
    element.addEventListener('click', function() {
        switch (element.name) {
            case element.name:
                if (isRegistred === true) {
                    dataB[element.name].quanityAvail += 1;
                    quanityAvailableUpdate[element.name].textContent = `Свободных мест: ${dataB[element.name].quanityAvail}`;
                    //element.setAttribute('disabled', 'disabled');
                    isRegistred = false;
                } else {
                    break;
                }
                break;
            default:
                break;
        }
    })
});