// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let create= document.createElement('div')
// create.classList.add('wrap')
// create.classList.add('collapse')
// create.classList.add('alpha')
// create.classList.add('beta')
// create.style.background='gray'
// create.style.color='black'
// create.style.fontsize='100px'
// document.body.appendChild(create)
// document.body.appendChild(create.cloneNode(true))
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array=['Main','Products','About us','Contacts']
// let menuarr=document.getElementsByClassName('menu')[0]
// for (const string of array) {
//     let li= document.createElement("li")
//     li.innerText= string
//     menuarr.appendChild(li)
// }


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]
// for (const element of coursesAndDurationArray) {
//     let info=document.createElement('div')
//     info.innerText=`${element.title} ${element.monthDuration}`
//     document.body.appendChild(info)
// }
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divelement=document.createElement('div').classList.add('item')
//     let h1element=document.createElement('h1').classList.add('heading')
//     h1element.innerText=coursesAndDurationArrayElement.title
//
//     let pelement=document.createElement('p').classList.add('description')
//     pelement.innerText=coursesAndDurationArrayElement.monthDuration
//
//     divelement.appendChild(h1element)
//     divelement.appendChild(pelement)
//     document.body.appendChild(divelement)
// }