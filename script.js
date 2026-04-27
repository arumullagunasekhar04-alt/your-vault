


<script>
  // 1. YOUR CONNECTION KEYS
  const SUPABASE_URL = "https://cxrofosdlooeyniddhdp.supabase.co"; 
  const SUPABASE_KEY = "PASTE_YOUR_PUBLISHABLE_ANON_KEY_HERE";
  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // 2. THE "ADD BUTTON" FUNCTION
  async function addProduct() {
    const name = document.getElementById('prodName').value;
    const price = document.getElementById('prodPrice').value;
    const link = document.getElementById('prodLink').value;
    const img = document.getElementById('prodImg').value;

    if(!name || !link) return alert("Please fill in Name and Link!");

    const { error } = await supabase
      .from('products')
      .insert([{ name: name, price: price, affiliate_link: link, image_url: img }]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Success! Product added to Your Vault.");
      location.reload(); 
    }
  }

  // 3. LOAD PRODUCTS ON HOME PAGE
  async function loadProducts() {
    const { data, error } = await supabase.from('products').select('*');
    if (data) {
      const container = document.getElementById('product-grid'); // Ensure this ID matches your HTML
      if(!container) return;
      container.innerHTML = ''; 
      data.forEach(product => {
        container.innerHTML += `
          <div class="product-card">
            <img src="${product.image_url || 'https://via.placeholder.com/150'}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.affiliate_link}" target="_blank" class="buy-btn">View on Amazon</a>
          </div>`;
      });
    }
  }
  loadProducts();
const SUPABASE_URL = "https://cxrofosdlooeyniddhdp.supabase.co/rest/v1/"
const SUPABASE_KEY = "sb_publishable_x2VXaOaw-K_ej6KvV-StEw_QXWqvHBq"
</script>

