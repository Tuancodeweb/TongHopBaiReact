// lấy giá trị gốc của sản phẩm
var price = document.getElementById("price");
    // lấy giá trị tăng giảm của nút input
        var quantity = document.getElementById("quantity");
            // lấy giá trị của cả table để tạo hiệu ứng view\
                var sanpham = document.getElementById("sanpham");
                    // lấy giá trị total để tính tổng các giá trị
                        var total1 = document.getElementById("total1");
                            // lấy giá trị của nút xóa phần tử
                                var function1 = document.getElementById("function1");

                
// sử lý sự kiện xóa phần tử
var function1 = function()
{
    sanpham.style.display="none";
}
// hàm sử lý sự kiện tăng giảm giá trị và tính tổng giá trị
var changePrice = function()
{
    total1.innerText = parseInt(quantity.value) * parseInt(price.innerText);

    if((quantity.value)<=0)
    {
        sanpham.style.display="none";
    }
}
// hàm sử lý sự kiện khi ấn vào nút add to card
var buyProduct = function()
{
    if(sanpham.style.display=="none")
    {
        sanpham.style.display="";
        changePrice();
    }
    else if(parseInt(quantity.value)<1000)
    {
        quantity.value = parseInt(quantity.value);
        changePrice();
    }
}