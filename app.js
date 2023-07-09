
let orderItems = [];
let totalPrice = 0;

// function formatRupiah(angka) {
//   const formatter = new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//   });
//   return formatter.format(angka);
// }


function order(itemName, price, btnId) {
    const button = document.getElementById(btnId);
    
    if (button.classList.contains("btn-pesan")) {
        button.classList.remove("btn-pesan");
        button.classList.add("btn-terpesan");
        button.innerHTML = "Terpesan";
        
        orderItems.push(itemName);
        totalPrice += price;
        updateOrderList();
        updateTotalPrice();
    }
  }
  
      function order(itemName, price) {
        orderItems.push(itemName);
        totalPrice += price;
        updateOrderList();
        updateTotalPrice();
      }
  
      function updateOrderList() {
        const orderList = document.getElementById("order-list");
        orderList.innerHTML = "";
        orderItems.forEach(item => {
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(item));
          
          orderList.appendChild(li);
        });
      }
  
      function updateTotalPrice() {
        const totalPriceElement = document.getElementById("total-price");
        totalPriceElement.innerHTML = "Total Harga: Rp " +  totalPrice ;
      }
  

      function submitOrder() {
        if (orderItems.length === 0) {
          alert("Silakan pilih minuman terlebih dahulu.");
        } else {
          const orderSummary = "Pesanan Anda:\n" + orderItems.join("\n");
          alert(orderSummary);
        }
      }

      function resetOrder() {
        orderItems = [];
         totalPrice = 0;
         updateOrderList();
         updateTotalPrice();
    
    // Reset tombol pesan
    const buttons = document.getElementsByClassName("btn-terpesan");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.classList.remove("btn-terpesan");
      button.classList.add("btn-pesan");
      button.innerHTML = "Pilih Minuman";
    }
  }