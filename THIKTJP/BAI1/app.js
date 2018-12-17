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
                                            var PO = document.getElementById("PO");
                                              

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
                                           alert("số lượng hết hàng");
                                          
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

                                    var buyProduct2 = function()
                                    {
                                        if(sanpham.style.display=="none")
                                        {
                                            alert("bạn phải chọn số lượng đã");
                                           
                                        }
                                        else if (sanpham.style.display == "")
                                        {
                                            
                                            var PO_DU = PO.innerText;
                                            var tuan = confirm("Tên sản phẩm:"+PO_DU + "\n" + "số lượng sản phẩm đã mua:" + quantity.value + "\n" + "giá thành sản phẩm:" + price.innerText + "\n" + "tổng giá tiền thanh toán" +"$"+ total1.innerText + "\n" +  "ảnh của sản phẩm \n");

        
                                            if (tuan == true)
                                            {
                                                alert("đã mua thành công");
                                            }
                                             else
                                            {
                                                alert("đã hủy mua sản phẩm này");
                                                sanpham.style.display="none";
                                            }
                                        }
                                    }