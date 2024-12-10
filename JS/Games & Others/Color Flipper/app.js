let heading = document.getElementById('heading');
let colorArray = [
    'F1f5f8',
    '#d6ffdd',
    '#fff2d6',
    '#ffc8bd',
    '#d0c2bf',
    '#b29a95',
    '#ffddd6',
    '#cf9b9c',
    '#fed7ce',
    '#e39e8e',
    '#fdb09e',
    '#af8476',
    '#fda8c0',
    '#ddb2aa',
    '#fccc94',
    '#fae2bb',
    '#000000',
    '#140f0e',
    '#281e1d',
    '#3c2d2c',
    '#503d3b',
    '#f9d69e',
    '#654c4a',
    '#795b58',
    '#8d6b67',
    '#a17a76',
    '#b58985',
    '#ca9994',
    '#dcaeae',
    '#d7a0a0',
    '#d19393',
    '#9e6060',
    '#c67878',
    '#dfa0b7',
    '#ac6d84',
    '#d889a5',
    '#91c497',
    '#dde2fa',
    '#e0e8e4',
    '#dddddd',
    '#eeeeee',
    '#faebd7'
];
console.log(colorArray.length)

let counter = 0;
fun = () => {
    if(counter>41){
        counter=0;
    }
    document.body.style.backgroundColor = colorArray[counter];
    heading.innerText = `background Color : ${colorArray[counter]}`;
    counter++;
}