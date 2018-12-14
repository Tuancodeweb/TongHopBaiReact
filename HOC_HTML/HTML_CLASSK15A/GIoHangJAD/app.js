function toDoDelete(item) {
    item.remove();
}

function toDoBookingLater(item) {
    var bookingLater = document.querySelector('.shop-cart-booking-later');
    if (bookingLater.firstElementChild.nodeName === "P")
    {
        bookingLater.removeChild(bookingLater.firstElementChild);
    }
    bookingLater.appendChild(item);
    var link = item.querySelector('#bookingLater');
    link.innerText = "Đưa vào giỏ hàng";
}

document.querySelector('.shop-cart').addEventListener('click', function(evt)
{
    var itemNode = evt.target.closest('div.item-row');

    if (!itemNode) {
        return;
    }

    if (evt.target.matches('a#del')) {
        toDoDelete(itemNode);
        return;
    }

    if (evt.target.matches('a#bookingLater')) {
        toDoBookingLater(itemNode);
    }
});
