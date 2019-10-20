//Prototype, Ajax, Callback

eventListiners();

function eventListiners() { 
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function () {
        //arayüz işlemleri
        
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translateWord(e) { 

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(err,response){
        if(err){
            //hata
            console.log(err);
        }
        else { 
            //response
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}