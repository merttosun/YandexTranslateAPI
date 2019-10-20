//prototypes

function Translate(word,language) { 
    this.apikey = "trnsl.1.1.20191013T112853Z.ec127f18104692cd.e29e0d604b3b57c5e8d1a0357180996c6b59b560";
    this.word = word;
    this.language = language;

    //XHR OBJECT
    this.xhr = new XMLHttpRequest();


}

Translate.prototype.translateWord = function(callback) {
    //Ajax İşlemleri
    //arrow functionla yapamıyoruz bind thise çevireceği için otomatik olarak, bu scopeda window içinde arar olmaz o yüzden
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint,true); // asenkron get requ baglantımızı açyırouz
    
    this.xhr.onload = () => { 
        if(this.xhr.status==200){
            const json = JSON.parse (this.xhr.responseText);
            const text = json.text[0];
            
            
            callback(null,text); //asenkron işlemi senkron hale çevirme
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }else { 
            
            callback("Bir Hata Oluştu",null)
        }


    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}