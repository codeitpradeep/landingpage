

const getproduct = async()=>{
    try{
        const results = await fetch("./data/products.json");
        const data = await results.json();
        console.log(data.products);
            const products =data.products;
        return products;
    } catch(err){
        console.log(err)
    }
}

window.addEventListener("DOMContentLoaded",async () =>{
    const products = await getproduct();
    console.log(products);
    displayproductsitems(products);
});

const categoryCenter = document.querySelector(".category__center");

//\img\BP\Mix
const displayproductsitems= items => {
    let displayproducts = items.map(product =>
      `   <div class="product category__product category__productView">
      <div class="product__header">
          <img src="./img/BP/Mix/${product.title}/${product.filename}" alt="">
      </div>
      
  </div>`  );
  displayproducts =displayproducts.join('')
  if(categoryCenter){
      categoryCenter.innerHTML = displayproducts;
  }
};    


const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");

if(categoryContainer){
    categoryContainer.addEventListener("click", async e => {
        const target = e.target.closest(".section__title");
        console.log(target);

        if (!target) return;

        const id = target.dataset.id;
        console.log(id);
        const productshow = await getproduct();// check here 

        if(id){
            Array.from(filterBtn).forEach(btn => {
                btn.classList.remove("active");
            });
            target.classList.add("active");

            let menuCategory = productshow.filter(product => {
                console.log(product.category);
                if(product.category == id){
                    return product;
                }
            });
            if(id == "All Product"){
                displayproductsitems(productshow);
                console.log(productshow);
            }else{
                displayproductsitems(menuCategory);
                console.log(menuCategory);
            }

        }
    });
}