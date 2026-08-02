const id= document.getElementById("ID");
const proName=document.getElementById("Proname");
const catogery=document.getElementById("category");
const price=document.getElementById("price");
const stockQnty=document.getElementById("StockQnty");
const imgUrl=document.getElementById("imgUrl");
const descrp=document.getElementById("description");
const status=document.getElementById("status");







id.onkeyup= function(){
    if (id.value!=''){
        id.style.border=' 1px solid green';
    }
    else
    {
        id.style.border=' 1px solid #726f6f';
    }  
}


