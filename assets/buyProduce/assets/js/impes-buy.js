let color_para = document.querySelector('p')
let radioButtons = document.querySelectorAll('input[name="color"]')
let radioButtonServices = document.querySelectorAll('input[name="service"]')
let img = document.querySelector('img[name="product-img"]')
let rent_battery = document.querySelector('div[name="rent-battery"]')
var total = document.querySelector('#total')
//console.log(rent_battery)

for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected)
}

function showSelected(e){
    if(this.checked){
        color_para.textContent = `${this.value}`;
        
        if(this.id == 'RadioSky'){
            img.src = `assets/img/impes/BUQ.png`;
        }
        if(this.id == 'RadioBlue'){
            img.src = `assets/img/impes/BUR.png`;
        }
        if(this.id == 'RadioRed'){
            img.src = `assets/img/impes/RER.png`;
        }
        if(this.id == 'RadioWhite'){
            img.src = `assets/img/impes/WHS.png`;
        }
        if(this.id == 'RadioSilver'){
            img.src = `assets/img/impes/GEQ.png`;
        }
        
    }
}

for(const radioButtonService of radioButtonServices){
    radioButtonService.addEventListener('change', showRent)
}

function showRent(e){
    if(this.checked){
        if(this.id == 'RadioBuy'){
            //rent_battery.id = "rent-display-none"
            total.innerHTML = `<strong>24.900.000đ</strong>`;
        }
        if(this.id == 'RadioRent'){
            //console.log("Rent")
            //rent_battery.id = ""
            total.innerHTML = `<strong>23.990.000đ</strong>`;

        }
    }
}


