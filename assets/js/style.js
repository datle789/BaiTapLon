/* const main = {

    "cars":
        [
            { "name": "KLARA S - Xanh lục", "price": "39.900.000", "img": "./assets/img/klaras.png", "distance": "120km","address":"./assets/buyProduce/klaras-xanhluc.html","details":"./assets/productiondetail/detail-klaras-xanhluc.html"},
            { "name": "FELIZ - ĐỎ", "price": "24.900.000", "img": "./assets/img/feliz.png", "distance": "90km","address":"./assets/buyProduce/feliz-do.html","details":"./assets/productiondetail/detail-feliz-do.html" },
            { "name": "KLARA A2 - 2011", "price": "26.900.000", "img": "./assets/img/bike-klara-a2.jpg", "distance": "90km","address":"./assets/buyProduce/klaraa2-2011.html","details":"./assets/productiondetail/detail-klaraa2-2011.html" },
            { "name": "IMPES - Xanh đậm", "price": "14.900.000", "img": "./assets/img/impres-blue.jpg", "distance": "70km","address":"./assets/buyProduce/impes-xanhdam.html","details":"./assets/productiondetail/detail-impes-xanhdam.html" },
            { "name": "IMPES - Đỏ", "price": "14.900.000", "img": "./assets/img/impes-red.jpg", "distance": "70km","address":"./assets/buyProduce/impes-do.html","details":"./assets/productiondetail/detail-impes-do.html" },
            { "name": "KLARA S - Đen", "price": "39.900.000", "img": "./assets/img/klara-s-black.jpg", "distance": "120km","address":"./assets/buyProduce/klaras-den.html","details":"./assets/productiondetail/detail-klaras-den.html" },
        ]

}

const parent = document.querySelector('.parent')

main.cars.forEach((car) => {
    let item = document.createElement('div')
    item.innerHTML = `
    <img src="${car.img}">

    <div class="desc">
        <div class="row">
            <div class="col">
                <h3>${car.name}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <p class="text-prices">Giá bán</p>
            </div>
            <div class="col-6">
                <p><span class="text-cost">${car.price}</span> vnđ</p>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <p>Ưu đãi</p>
            </div>
            <div class="col-6">
                <p>Trả góp lãi suất 0%</p>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <p>Quãng đường</p>
            </div>
            <div class="col-6">
                <p>Lên tới ${car.distance}/1 lần sạc</p>
            </div>
        </div>
        <div class="row">
            <div class="col-6"><a href="" class="text-detail">Xem chi tiết</a></div>
            <div class="col-6"><a href="${car.address}" class="btn btn-buy">Mua ngay</a></div>
        </div>
    </div>
    `

    parent.appendChild(item)

}) */

var carApi = 'http://localhost:3000/car';


function start() {
    
    getcar(renderhtml)
}

start();

function getcar(callback) {
    fetch(carApi)
        .then(response => response.json())
        .then(callback)
}

function renderhtml(cars){
    var header = document.querySelector('.info-car')

    cars.forEach(car =>{
        let item = document.createElement('div')
        item.innerHTML = `
        <img src="./assets/img/${car.image}">

        <div class="desc">
            <div class="row">
                <div class="col">
                    <h3>${car.name}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="text-prices">Giá bán</p>
                </div>
                <div class="col-6">
                    <p><span class="text-cost">${car.price}</span> vnđ</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p>Ưu đãi</p>
                </div>
                <div class="col-6">
                    <p>Trả góp lãi suất 0%</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p>Quãng đường</p>
                </div>
                <div class="col-6">
                    <p>Lên tới ${car.distance}/1 lần sạc</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6"><a href="./assets/productiondetail/${car.details}" class="text-detail">Xem chi tiết</a></div>
                <div class="col-6"><a href="./assets/buyProduce/${car.address}" class="btn btn-buy">Mua ngay</a>
                </div>
            </div>
        `

        header.appendChild(item)
    })


}






