const inputTag=document.getElementsByClassName("Types")[0];
const orderListTag=document.getElementsByClassName("orderLists")[0];
// const btnButton=document.getElementById("btn-add");
//<i class="fas fa-trash-alt"></i>
//<i class="fas fa-trash-alt"></i>
let productId=1;

const handleChange=(handlepara)=>{
    const inputValue=handlepara.target.value;
    const parentDiv=document.createElement("div");
    const spanTag=document.createElement("span");
    const trashIcon=document.createElement("i");
    const productContainer=document.createElement("div");

    productContainer.classList.add('productcontainer');
    trashIcon.classList.add('fas','fa-trash-alt');

    trashIcon.addEventListener("click",()=>{
        productContainer.remove();
    })

    parentDiv.classList.add('product');

    parentDiv.addEventListener("click",()=>{
        const classExist=parentDiv.classList.contains("purchased");
        if (classExist) {
            parentDiv.classList.remove("purchased");
        }else{
            parentDiv.classList.add("purchased");
        }
    })

    spanTag.id=productId;
    const concatination=productId.toString() + ". " + inputValue;

    spanTag.append(concatination);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv,trashIcon);
    orderListTag.append(productContainer);
    inputTag.value="";

    productId += 1;
}

inputTag.addEventListener("change",handleChange);
