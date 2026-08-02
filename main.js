const id= document.getElementById("ID");
const proName=document.getElementById("Proname");
const catogery=document.getElementById("category");
const price=document.getElementById("price");
const stockQnty=document.getElementById("StockQnty");
const imgUrl=document.getElementById("imgUrl");
const descrp=document.getElementById("description");
const status=document.getElementById("status");
const btn=document.getElementById("btnPro");


id.onkeyup= function(){
    if (id.value!=''){
        id.style.border=' 1px solid green';
    }
    else
    {
        id.style.border=' 1px solid #726f6f';
    }  
}

 let allProducts;
if (localStorage.product!= null){
    allProducts = JSON.parse(localStorage.product);

}
else {
allProducts=[];
}


btn.onclick=function()
{
    
    let newProduct = {
    proNumber: id.value,
    proName: proName.value,
    catgry: catogery.value,
    pric: price.value,
    stokQnty: stockQnty.value,
    imgUrl: imgUrl.value,
    descrption: descrp.value,
    status: status.value
}
allProducts.push(newProduct);
localStorage.setItem('product', JSON.stringify(allProducts));
// This is way is not enough because when we make reload, the data will be deleted. therefor we must use local storage
console.log(allProducts);


}





