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


var key = 0;
function keys(i){
    key = i;
}


function render(cars) {
    const heading = document.querySelector('.heading');


    console.log(cars)
    let htmls = cars.map((car, i) =>
        `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${car.name}</td>
        <td>${car.email}</td>
        <td>${car.address}</td>
        <td><button type="button" class="button btn-primary btn-car" onclick="keys(${i})">Chi tiết</button></td>
    </tr>


        `
    )

    heading.innerHTML = htmls.join('')
    
    var btns = document.querySelectorAll('.btn-car')
    console.log(btns)

    for(var btn of btns){
        btn.addEventListener('click', ()=>{
            var item = document.createElement('div')
            item.className = 'details'
            item.innerHTML = `
            <div class="question">
            <div style="text-align:center">
                <h3>Đơn hàng của khách hàng: ${cars[key].name}<h3>
            <div>
            <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Mã</th>
                                <th scope="col">Loại</th>
                                <th scope="col">Màu</th>
                                <th scope="col">Pin</th>
                                <th scope="col">Thành phố</th>
                                <th scope="col">Showroom</th>
                                <th scope="col">Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style='font-size:20px'>
                            <td>2020DA${cars[key].id}</td>
                            <td>${cars[key].title}</td>
                            <td>${cars[key].color}</td>
                            <td>${cars[key].battery}</td>
                            <td>${cars[key].city}</td>
                            <td>${cars[key].showroom}</td>
                            <td>${cars[key].total}</td>
                            </tr>

                        </tbody>
                    </table>
            <a type="button" class="close">ĐÓNG</a>
        </div>
            `

            heading.appendChild(item)

            var details = document.querySelector('.details')
            details.classList.add('open')
            var close = document.querySelector('.close')
            close.addEventListener('click', ()=>{
                details.classList.remove('open')
                close.href = '../../admin/users.html';
            })

        })
    }
   

}




function handlecreate() {
    const createbtn = document.querySelector('#add');
    createbtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var title = document.querySelector("#title")
        var total = document.querySelector('#total')


        if (name === "" || email === "" || address === "" || colorChange.value === "") {
            alert("vui lòng điền đầy đủ thông tin")
        } else {
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
            alert('Mua thành công, Vui lòng chờ thông báo')

        }



        /* colors.forEach(color => {
            color.addEventListener('click',()=>{
                colorChange.value = color.value;
            })
        }); */



    }
}




var colorChange = document.querySelector("#color-change");
var colors = document.querySelectorAll('input[name="color"]');
colors.forEach(color => {
    color.addEventListener('click', () => {
        colorChange.value = color.value;
    })
});

var service = document.querySelector("#service-change")
var batterys = document.querySelectorAll('input[name="service"]');

batterys.forEach(battery => {
    service.value = battery.value;
    battery.addEventListener('click', () => {
        service.value = battery.value;
    })
})


var cityChange = document.querySelector("#city-change")
var select = document.querySelector('#city');
cityChange.value = select.value;
select.addEventListener('change', () => {
    cityChange.value = select.value;
})

var showroomChange = document.querySelector("#showroom-change")
var showroomselect = document.querySelector('#showroom');
showroomChange.value = showroomselect.value;
showroomselect.addEventListener('change', () => {
    showroomChange.value = showroomselect.value;
})









