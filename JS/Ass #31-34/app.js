let currentDate = new Date();
document.write(`${currentDate}<br><br>`);

let month = currentDate.getMonth();
switch (month) {
    case 0:
        document.write("January");
        break;

    case 1:
        document.write("febuary");
        break;

    case 2:
        document.write("March");
        break;

    case 3:
        document.write("April");
        break;

    case 4:
        document.write("May");
        break;

    case 5:
        document.write("June");
        break;

    case 6:
        document.write("July");
        break;

    case 7:
        document.write("August");
        break;

    case 8:
        document.write("September");
        break;

    case 9:
        document.write("October");
        break;

    case 10:
        document.write("November");
        break;

    case 11:
        document.write("December");
        break;

    default:
        break;
};

document.write(`<br><br>${currentDate}.get`);

if(month== "jan" || month=="Feb"){
    console.log("It's Funday");
}

for(let i=0 ; i<15 ; i++){
    console.log(currentDate.getDay);
}
