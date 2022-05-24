let courses = [
    { name: "Courses in England", prices: [null, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

    let requiredRange1 = [undefined, 200],
        requiredRange2 = [100, 350],
        requiredRange3 = [200, undefined];


function cardCreator (item) {

    document.querySelector('.cards').innerHTML = '';

    for (const course of item) {
        let minPrice = course.prices[0], maxPrice = course.prices[1];
    
    
        if (maxPrice === null && minPrice != null) {
            document.querySelector('.cards').innerHTML += `
            <div class="card">
                <h2>${course.name}</h2>
                <div class="prices">From ${course.prices[0]}</div>
            </div>`
        } 
        else if (minPrice != null && maxPrice != null) {
            document.querySelector('.cards').innerHTML += `
            <div class="card">
                <h2>${course.name}</h2>
                <div class="prices">From ${course.prices[0]} to ${course.prices[1]}</div>
            </div>`
        } 
        else if (minPrice === null && maxPrice != null) {
            document.querySelector('.cards').innerHTML += `
            <div class="card">
                <h2>${course.name}</h2>
                <div class="prices">To ${course.prices[1]}</div>
            </div>`
        } 
        else if (minPrice === null && maxPrice === null){
            document.querySelector('.cards').innerHTML += `
            <div class="card">
                <h2>${course.name}</h2>
                <div class="prices">For all</div>
            </div>`
        } 
    };
}

cardCreator(courses);



function filter (from = 0, to = 1000) {

    let newCourses = [];

    for (const course of courses) {
        let minPrice = course.prices[0], maxPrice = course.prices[1];

        if (maxPrice === null && to > minPrice) {
            newCourses.push(course);
        }       
        for (let i = from; i <= to; i++) {
                    if ( i >= minPrice && i <= maxPrice ) {
                        newCourses.push(course);
                        break;
                    }
            }
    }

    cardCreator(newCourses);
}


// filter(...requiredRange2);

document.querySelector('.requiredRange1').addEventListener('click', ()=> {
    filter(...requiredRange1);
});

document.querySelector('.requiredRange2').addEventListener('click', ()=> {
    filter(...requiredRange2);
});

document.querySelector('.requiredRange3').addEventListener('click', ()=> {
    filter(...requiredRange3);
});