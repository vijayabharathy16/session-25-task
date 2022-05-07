
async function kural(){

    try{
           
     var thiru = document.getElementById('Thirunumber').value; 
     if(thiru>1330 || thiru<1){
        alert("Please Enter a number Between 1 to 1330");
     }
     let kur = await fetch(`https://api-thirukkural.vercel.app/api?num=${thiru}`);
     let kur1 = await kur.json();
     console.log(kur1);
     document.getElementById('tamk').value=`${kur1.line1}\n${kur1.line2}`;
     document.getElementById('engk').value= kur1.eng;
     document.getElementById('tamsect').value= kur1.sect_tam;
     document.getElementById('chapgrp').value= kur1.chapgrp_tam;
     document.getElementById('tamchap').value= kur1.chap_tam;
     document.getElementById('tamexp').value= kur1.tam_exp;
     document.getElementById('engsect').value= kur1.sect_eng;
     document.getElementById('echapgrp').value= kur1.chapgrp_eng;
     document.getElementById('engchap').value= kur1.chap_eng;
     document.getElementById('engexp').value= kur1.eng_exp;
 }catch(error){
        console.log(error);
 }
 }