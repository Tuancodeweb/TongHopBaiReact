// lấy giá gốc
var price = document.getElementById("price");
    // lấy phần tử tăng giảm
        var quantity = document.getElementById("quantity");
            // lấy dữ liệu của phần tử sản phẩm
                var sanpham = document.getElementById("sanpham");
                    // lấy tăng giá trị 
                        var total1 = document.getElementById("total1");
                            // lấy  dữ liệu để xóa phần tử đó
                                var function1 = document.getElementById("function1");
                                    // lấy ảnh
                                     var hover_img = document.getElementById("hover_img");

    // sự kiện xóa
    var function1 = function()
    {
        sanpham.style.display="none";
    }
    //sự kiện cộng giá tiền và tăng tiến giá
    var changePrice = function()
    {
        total1.innerText = parseInt(quantity.value)*parseInt(price.innerText);
        if((quantity.value)<=1)
        {
            alert("đây là đơn vị tối thiểu");
        }
    }
    // nút sự kiện click
    var buyproduct = function()
    {
        if(sanpham.style.display =="none")
        {
            sanpham.style.display="";
            changePrice();
        }
        else if(parseInt(quantity.value)<1000)
        {
            quantity.value = parseInt(quantity.value)+1;
            changePrice();
        }
    }
    //hover
    var hover = function()
    {
        if(hover_img.style.display=="none")
        {
            hover_img.style.display="";
        }
        else
        {
            hover_img.style.display="none";
        }
    }