var carApi = 'http://localhost:3000/users';

function start() {
    getcar(render)

    handlecreate()


}

start();

function getcar(callback) {
    fetch(carApi)
        .then(response => response.json())
        .then(callback)
}

function createcar(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(carApi, options)
        .then(response => response.json())
        .then(callback)
}

function handledeletecar(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(carApi + "/" + id, options)
        .then(response => response.json())
        .then(() => getcar(render))
}



function render(cars) {
    const heading = document.querySelector('.heading');


    let htmls = cars.map((car, i) =>
        `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${car.name}</td>
        <td>${car.email}</td>
        <td>${car.address}</td>
        <td>${car.title}</td>
        <td>${car.color}</td>
        <td>${car.battery}</td>
        <td>${car.city}</td>
        <td>${car.showroom}</td>
        <td>${car.total}</td>
        <td><button onclick="handledeletecar(${car.id})">xóa</button></td>
    </tr>

        `
    )

    heading.innerHTML = htmls.join('')

}


/* function render(cars) {
    const heading = document.querySelector('.heading');


    console.log(cars)
    let htmls = cars.map((car, i) =>
        `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${car.name}</td>
        <td>${car.email}</td>
        <td>${car.address}</td>
        <td>${car.type}</td>
        <td><button onclick="handledeletecar(${car.id})">xóa</button></td>
        <td><button class="btn btn-primary btn-feliz">click</button></td>
    </tr>


    <div class="detail-feliz">
        <div class="question">
            <h3>${car.title}</h3>
            <p>the number of question 30</p>
            <button type="button" class="close">ĐÓNG</button>
        </div>

    </div>

        `
    )

    heading.innerHTML = htmls.join('')

    var btns = document.querySelectorAll('.btn-feliz');
    const details = document.querySelector('.detail-feliz')
    const close = document.querySelector('.close')

    console.log(btns)

    function show() {
        details.classList.add('open')
    }

    function hide() {
        details.classList.remove('open')
    }

    for(var btn of btns) {
        btn.addEventListener("click", show)

    }


    close.addEventListener('click', hide)
} */



function handlecreate() {
    const createbtn = document.querySelector('#add');
    createbtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var title = document.querySelector("#title")
        var total = document.querySelector('#total')


        if (name === "" || email === "" || address === "" || colorChange.value ==="") {
            alert("Please enter")
        } else {
            add.href = "../HTML/form-success.html"

        }

        

        /* colors.forEach(color => {
            color.addEventListener('click',()=>{
                colorChange.value = color.value;
            })
        }); */
        
        var form = {
            name: name,
            email: email,
            address: address,
            title: title.innerHTML,
            color: colorChange.value,
            battery: service.value,
            city: cityChange.value,
            showroom: showroomChange.value,
            total: total.innerHTML
        }

        createcar(form, () => getcar(render))
        

    }
}




var colorChange = document.querySelector("#color-change");
var colors = document.querySelectorAll('input[name="color"]');
colors.forEach(color => {
    color.addEventListener('click',()=>{
        colorChange.value = color.value;
    })
});

var service = document.querySelector("#service-change")
var batterys = document.querySelectorAll('input[name="service"]');

batterys.forEach(battery => {
    service.value = battery.value;
    battery.addEventListener('click',()=>{
        service.value = battery.value;
    })
})


var cityChange = document.querySelector("#city-change")
var select = document.querySelector('#city');
cityChange.value = select.value;
select.addEventListener('change',()=>{
    cityChange.value = select.value;
})

var showroomChange = document.querySelector("#showroom-change")
var showroomselect = document.querySelector('#showroom');
showroomChange.value = showroomselect.value;
showroomselect.addEventListener('change',()=>{
    showroomChange.value = showroomselect.value;
})









