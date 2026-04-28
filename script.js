const SUPABASE_URL = "https://cxrofosdlooeyniddhdp.supabase.co"
const SUPABASE_KEY = ""sb_publishable_x2VXaOaw-K_ej6KvV-StEw_QXWqvHBq""

const client = supabase.createClient(SUPABASE_URL,SUPABASE_KEY)

async function loadProducts(){

const {data,error} = await client
.from("products")
.select("*")

if(error){
console.log(error)
return
}

const container = document.getElementById("product-grid")

container.innerHTML=""

data.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image_url}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<a href="${product.affiliate_link}" target="_blank" class="buy-btn">
View on Amazon
</a>

</div>

`

})

}

loadProducts()
