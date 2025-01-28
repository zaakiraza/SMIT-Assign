let personArray = [
    { name: "Perterson", imgUrl: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg', comments: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptate fuga porro, vel doloribus accusamus magnam ex mollitia maxime itaque?" },
    { name: "Smith Paul", imgUrl: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', comments: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptate fuga porro, vel doloribus accusamus magnam ex mollitia maxime itaque?" },
    { name: "Emma Watson", imgUrl: 'https://media.istockphoto.com/id/1141394561/photo/muslim-young-woman-wearing-hijab.jpg?s=612x612&w=0&k=20&c=9LSXQ1ofSA7__LrUsNBWIMP_3ala5AE_XDBnc9KB1AQ=', comments: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptate fuga porro, vel doloribus accusamus magnam ex mollitia maxime itaque?" }
]

const [person0, person1, person2] = personArray;
let count = 0;

let boxes = document.getElementById('boxes');
const fun = () => {
    const { name, imgUrl, comments } = person0
    boxes.innerHTML += `
    <div id="box">
        <h1>${name}</h1>
        <img src="${imgUrl}" alt="">
        <p>${comments}</p>
    </div>`
}
fun()

const checkForCount = (count) => {
    if (count > 2) {
        return count = 0;
    }
    if (count < 0) {
        return count = 2;
    }
}

const forwardSlider = () => {
    document.getElementById('box').remove();
    count++;
    if (count > 2 || count < 0) {
        count = checkForCount(count);
    }
    console.log(count);
    for (let i = 0; i < 3; i++) {
        if (count == i) {
            boxes.innerHTML += `
                <div id="box">
                    <h1>${personArray[count].name}</h1>
                    <img src="${personArray[count].imgUrl}" alt="">
                    <p>${personArray[count].comments}</p>
                </div>`
        }
        else{
            continue;
        }
    }
}

const backwardSlider = () => {
    document.getElementById('box').remove();
    count--;
    if (count > 2 || count < 0) {
        count = checkForCount(count);
    }
    console.log(count);
    for (let i = 0; i < 3; i++) {
        if (count == i) {
            boxes.innerHTML += `
                <div id="box">
                    <h1>${personArray[count].name}</h1>
                    <img src="${personArray[count].imgUrl}" alt="">
                    <p>${personArray[count].comments}</p>
                </div>`
        }
        else{
            continue;
        }
    }
}