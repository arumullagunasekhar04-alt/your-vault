


<script>
  
const SUPABASE_URL = "https://cxrofosdlooeyniddhdp.supabase.co/rest/v1/"
const SUPABASE_KEY = "sb_publishable_x2VXaOaw-K_ej6KvV-StEw_QXWqvHBq"
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function loadProducts(){

const { data } = await client
.from("products")
.select("*")

const container = document.getElementById("product-grid")

data.forEach(product => {

container.innerHTML += `
<div>
<img src="${product.image_url}" width="200">
<h3>${product.name}</h3>
<p>${product.price}</p>
<a href="${product.affiliate_link}" target="_blank">Buy</a>
</div>
`

})

}

loadProducts()

</script>

