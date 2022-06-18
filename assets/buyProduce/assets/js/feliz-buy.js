let color_para = document.querySelector('p')
let radioButtons = document.querySelectorAll('input[name="color"]')
let radioButtonServices = document.querySelectorAll('input[name="service"]')
let img = document.querySelector('img[name="product-img"]')
let rent_battery = document.querySelector('div[name="rent-battery"]')

//console.log(rent_battery)

for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected)
}

function showSelected(e){
    if(this.checked){
        color_para.textContent = `${this.value}`;
        
        if(this.id == 'RadioBlack'){
            img.src = `assets/img/BAQ.png`;
        }
        if(this.id == 'RadioGreen'){
            img.src = `assets/img/GNQ.png`;
        }
        if(this.id == 'RadioRed'){
            img.src = `assets/img/RET.png`;
        }
        if(this.id == 'RadioWhite'){
            img.src = `assets/img/WHR.png`;
        }
        
    }
}

for(const radioButtonService of radioButtonServices){
    radioButtonService.addEventListener('change', showRent)
}

function showRent(e){
    if(this.checked){
        if(this.id == 'RadioBuy'){
            rent_battery.id = "rent-display-none"
        }
        if(this.id == 'RadioRent'){
            //console.log("Rent")
            rent_battery.id = ""
        }
    }
}