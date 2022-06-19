/* const main = {

    "cars":
        [
            { "name": "KLARA S - Xanh lục", "price": "39.900.000", "img": "./assets/img/klaras.png", "distance": "120km","address":"./assets/buyProduce/klaras-xanhluc.html","details":"./assets/productiondetail/detail-klaras.html"},
            { "name": "FELIZ - ĐỎ", "price": "24.900.000", "img": "./assets/img/feliz.png", "distance": "90km","address":"./assets/buyProduce/feliz-do.html","details":"./assets/productiondetail/detail-feliz.html" },
            { "name": "KLARA A2 - 2011", "price": "26.900.000", "img": "./assets/img/bike-klara-a2.jpg", "distance": "90km","address":"./assets/buyProduce/klaraa2-2011.html","details":"./assets/productiondetail/detail-klaraa2-2011.html" },
            { "name": "IMPES - Xanh đậm", "price": "14.900.000", "img": "./assets/img/impres-blue.jpg", "distance": "70km","address":"./assets/buyProduce/impes-xanhdam.html","details":"./assets/productiondetail/detail-impes.html" },
            { "name": "IMPES - Đỏ", "price": "14.900.000", "img": "./assets/img/impes-red.jpg", "distance": "70km","address":"./assets/buyProduce/impes-do.html","details":"./assets/productiondetail/detail-impes.html" },
            { "name": "KLARA S - Đen", "price": "39.900.000", "img": "./assets/img/klara-s-black.jpg", "distance": "120km","address":"./assets/buyProduce/klaras-den.html","details":"./assets/productiondetail/detail-klaras.html" },
        ]
    
    "newcard": [
    {
      "id": 1,
      "name": "KLARA S (2022)",
      "price": "36.900.000 VNĐ",
      "distance": "194 km",
      "image": "bike-klara-s-2022.jpg",
      "address": "klaras.html",
      "details": "detail-klaras.html"
    },
    {
      "id": 2,
      "name": "FELIZ S",
      "price": "29.900.000 VNĐ",
      "distance": "198 km",
      "image": "bike-feliz-s.jpg",
      "address": "feliz-s.html",
      "details": "detail-feliz-s.html"
    }
  ],

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
var newcar = 'http://localhost:3000/newcard'


function start() {
    
    //getcar(renderhtml)
    getnewcar(rendernewcar)
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




function getnewcar(callback) {
    fetch(newcar)
        .then(response => response.json())
        .then(callback)
}


function rendernewcar(cars) {
    const heading = document.querySelector('.newcar');

    console.log(cars)
    let htmls = cars.map((car) =>
        `
        <div class="card card-border-none" style="margin-right:10px">
        <img class="card-img-top w-100 d-block" src="./assets/img/${car.image}" />
    <div class="card-body">
        <div class="row">
            <div class="col-6"><label class="col-form-label"><strong>${car.name}</strong><br></label>
            </div>
            <div class="col-6">
                <div class="div-price-newproduct" style="text-align: right;"><label
                        style="margin-top: 5px;color:#007bff;"><strong>${car.price}&nbsp;VNĐ</strong><br></label>
                </div>
            </div>
        </div>
        <p class="card-text" style="font-size: 12px;">Giá đã bao gồm VAT, 01 bộ sạc, không bao gồm
            pin<br></p>
        <hr>
        <div class="row">
            <div class="col-6"><label class="col-form-label"><strong>Ưu đãi</strong><br></label></div>
            <div class="col-6">
                <div class="div-price-newproduct" style="text-align: right;"><label
                        style="margin-top: 5px;"><strong>Trả góp lãi suất 0%</strong><br></label></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6"><label class="col-form-label"><strong>Quãng đường</strong><br></label>
            </div>
            <div class="col-6">
                <div class="div-price-newproduct" style="text-align: right;"><label
                        style="margin-top: 5px;"><strong>lên tới ${car.distance}/ 1 lần sạc</strong><br></label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div style="padding-top: 10px;"><a href="./assets/productiondetail/${car.details}"
                        style="font-weight: bold; text-decoration: none">XEM CHI TIẾT</a></div>
            </div>
            <div class="col-6">
                <div class="div-price-newproduct" style="text-align: center;">

                    <!-- create a like button -->
                    <a href="./assets/buyProduce/${car.address}" class=" btn-primary div-button-newproduct" type="button"
                        style="margin-top: 5px;padding: 5px;text-decoration: none;">MUA NGAY</a>
                </div>


            </div>
        </div>
    </div>
</div>
        `
    )

    heading.innerHTML = htmls.join('')
}





