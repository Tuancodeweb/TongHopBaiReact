
sanpham = []
soluong = []
giatien = []

function addItem(){
  
  sanpham.push(document.getElementById('pname').innerText)
  soluong.push(parseInt(document.getElementById('pqty').value))
  giatien.push(document.getElementById('price').innerText)
  
  displayCart()
   
}

function displayCart(){
  
  
  cartdata = '<table><tr><th>sản phẩm</th><th>đơn vị giá</th><th>Giá tiền</th><th>tổng tiền</th></tr>';
  

  total = 0;
  
  for (i=0; i<sanpham.length; i++){
    total += soluong[i] * giatien[i] 

    cartdata += "<tr><td>" + sanpham[i] + "</td><td>" + soluong[i] + "</td><td>" + giatien[i] + "</td><td>" + soluong[i] * giatien[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  
  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata
  
}


function delElement(a){
  sanpham.splice(a, 1);
  soluong.splice(a, 1);
  giatien.splice(a, 1);
  displayCart()
}






sanpham = []
soluong = []
giatien = []

function addItem1(){
  
  sanpham.push(document.getElementById('pname1').innerText)
  soluong.push(parseInt(document.getElementById('pqty1').value))
  giatien.push(document.getElementById('price1').innerText)
  
  displayCart()
   
}

function displayCart(){
  
  
  cartdata = '<table><tr><th>sản phẩm</th><th>đơn vị giá</th><th>Giá tiền</th><th>tổng tiền</th></tr>';
  
  total = 0;
  
  for (i=0; i<sanpham.length; i++){
    total += soluong[i] * giatien[i]
    cartdata += "<tr><td>" + sanpham[i] + "</td><td>" + soluong[i] + "</td><td>" + giatien[i] + "</td><td>" + soluong[i] * giatien[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  
  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata
  
}


function delElement(a){
  sanpham.splice(a, 1);
  soluong.splice(a, 1)
  giatien.splice(a, 1)
  displayCart()
}