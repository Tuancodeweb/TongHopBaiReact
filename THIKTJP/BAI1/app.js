// can thiệp vào giá gốc của sản phẩm
    var price = document.getElementById("price");
        // can thiệp vào ô xuất dữ liệu ở table
            var sanpham = document.getElementById("sanpham");
                //can thiệp vào mục tăng số hạng ở input number
                    var quantity = document.getElementById("quantity");
                        // can thiệp  lấy giá trị ở mụ total
                            var total1 = document.getElementById("total1");
                                // can thiệp vào nút xóa
                                    var function1 = document.getElementById("function1");
                                        


                                    // sự kiện xóa sản phẩm
                                    var function1 = function()
                                    {
                                        sanpham.style.display="none";
                                    }

                                    // sư kiện tăng giá trị và tính tổng total

                                    var changePrice = function()
                                    {
                                        // tăng giá trị và tính tiền
                                       total1.innerText = parseInt(price.innerText) * parseInt(quantity.value);
                                       if((quantity.value)>=6)
                                       {
                                           alert("sản phẩm đã hết");
                                           if(sanpham.style.display=="")
                                           {
                                            quantity.value="5";

                                           }
                                       }
                                    }

                                    // sự kiện mua hàng

                                    var buyProduct = function()
                                    {
                                        if(sanpham.style.display=="none")
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