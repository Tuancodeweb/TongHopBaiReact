var price1 = document.getElementById("price1");
	var price2 = document.getElementById("price2");
	var quantity1 = document.getElementById("quantity1");
	var quantity2 = document.getElementById("quantity2");
	var sanpham1 = document.getElementById("sanpham1");
	var sanpham2 = document.getElementById("sanpham2");
	var total1 = document.getElementById("total1");
	var total2 = document.getElementById("total2");
	var total = document.getElementById("total");
    var del1 = document.getElementById('function1');
    var del2 = document.getElementById('function2');

    var del1 = function(){
        sanpham1.style.display="none";
        quantity1.value='1';
    }
    var del2 = function(){
        sanpham2.style.display = "none";
        quantity2.value='1';
    }
	var total = function(){
		total.innerText = parseInt(total1.innerText)+parseInt(total2.innerText);
	}
	var changePrice1 = function(){
		total1.innerText = parseInt(quantity1.value)*parseInt(price1.innerText);
		total();
	}

	var changePrice12 = function(){
		total2.innerText = parseInt(quantity2.value)*parseInt(price2.innerText);
		total();
	}

	var buyProd1 = function(){
		if(sanpham1.style.display=="none"){
			sanpham1.style.display="";
			changePrice1();
		} else if(parseInt(quantity1.value)<1000) {
			quantity1.value=parseInt(quantity1.value)+1;
			changePrice1();
		}
	}

	var buyProd2 = function(){
		if(sanpham2.style.display=="none"){
			sanpham2.style.display="";
			changePrice12();
		} else if(parseInt(quantity2.value)<1000) {
			quantity2.value=parseInt(quantity2.value)+1;
			changePrice12();
		}
	}