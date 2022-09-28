// genel değişkenler

var durum = false , opt="" , sonuc = 0;


// nesnelerin oluşturulması

let rakam = document.querySelectorAll(".rakam");
let islem = document.querySelector("#islem");
let gosterge = document.querySelector("#gosterge");
var opr = document.querySelectorAll(".opr");
let btnC = document.querySelector(".btnC");
let btnCE = document.querySelector(".btnCE");
let esit = document.querySelector(".esit");
let nokta = document.querySelector(".nokta");


// rakam işlemleri


   // forEach ile tüm elemanları gezmesini saglıyoruz. element parametresi ile de hangisine tıklandıysa ona işlem yapılmasını saglıyoruz
   rakam.forEach(function (element) {
       element.onclick = function(){
            // başdaki sıfır kaldrımak için
            if(islem.textContent == "0" || durum){
                islem.textContent = "";
            }
            islem.textContent += this.textContent
            durum=false;
       }
   });

   opr.forEach(function(element){
    element.onclick = function(){
        durum=true;
        var opr=this.textContent;
        gosterge.textContent=gosterge.textContent + "" + islem.textContent + "" + opr;

        switch(opt) // hafızaya alınan işlem
        {
            //  switch case: işlem bir defa döner ve benim istediğim kısmı döndürür.
            case "+" : islem.textContent = (sonuc + Number(islem.textContent));break;
            case "-" : islem.textContent = (sonuc - Number(islem.textContent));break;
            case "/" : islem.textContent = (sonuc / Number(islem.textContent));break;
            case "x" : islem.textContent = (sonuc * Number(islem.textContent));break;
        }
        sonuc = Number(islem.textContent);
        opt=opr;
    }
})

btnC.onclick=function(){
    islem.textContent = "0";
}

btnCE.onclick=function(){
    islem.textContent = "0";
    gosterge.textContent = "";
    sonuc = "0";
    opt = "";
}

esit.onclick=function(){
    gosterge.textContent = "";
    durum = true;
    switch(opt)
    {
        case "+" : islem.textContent = (sonuc + Number(islem.textContent));break;
        case "-" : islem.textContent = (sonuc - Number(islem.textContent));break;
        case "/" : islem.textContent = (sonuc / Number(islem.textContent));break;
        case "x" : islem.textContent = (sonuc * Number(islem.textContent));break;
    }

    sonuc = Number(islem.textContent);
    islem.textContent = sonuc;
    sonuc = 0;
    opt = "";
}

nokta.onclick = function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent += "."
    }
    else if(durum){
        // durum hatalıysa 0 yap
        islem.textContent="0";
    }

    if(!islem.textContent.includes(".")){
        islem.textContent += "."
    }
    durum = false;
}