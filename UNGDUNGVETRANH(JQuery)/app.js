


function EventClickcolor ($param) 
{
	// body...
	// xóa thằng selected cũ
	 $(".controls").find('.selected').removeClass('selected');

		$param.addClass('selected');

		color=$param.css("background-color");
}





var color;

// CHỌN MÀU
$(document).ready(function() 
{
	color = $('.selected').css("background-color");

	$(".controls").find('li').click(function(event) 
	{
		/* Act on the event */
		
		 EventClickcolor ($(this)) ;
		

	});

	$("#revealcolorSelect").click(function(event) 
	{
		/* Act on the event */
		if($("#colorSelect").css("display") === "none" )
		{
			$("#colorSelect").show();
		}
		else
		{
			$("#colorSelect").hide();
		}
	});



	$("input[type=range]").change(function(event) 
	{
		/* Act on the event */
		var Red = $("#red").val();
		var Green = $("#green").val();
		var Blue = $("#blue").val();

		$("#newcolor").css("background-color","rgb("+ Red +","+ Green +" , "+ Blue +")");
	});

	$("#addColor").click(function(event) 
	{
		var Red = $("#red").val();
		var Green = $("#green").val();
		var Blue = $("#blue").val();

		/* Act on the event */
		var $addlinew = $('<li></li>');

		$addlinew.css("background-color","rgb("+ Red +","+ Green +" , "+ Blue +")");

		$(".controls").children('ul').append($addlinew);




		$addlinew.click(function() 
		{
			 EventClickcolor ($(this)) ;
		});
		$addlinew.click();

	});





	// bắt đầu xử lý vẽ
	var lastEvent;

	var isMauseDown;

	var canvas = $("canvas")[0];

	var context = canvas.getContext("2d");
	// ISmause nhằm xác định khi user chưa click chuột ở giai đoạn này
	//đây chỉ là giai đoạn thiết lập vẽ và vẽ ở đâu 

	isMauseDown = false;
	// xác đinh cho user xem người ta có click chuột trái không

	$(canvas).mousedown(function(event) 
	{
		// lastEvent còn có tác dụng cập nhật lại hành động đang thực thi
		lastEvent = event;
		/* Act on the event */
		// đây là giai đoạn chính thức USER đặt bút vẽ
		isMauseDown = true;
		console.log(lastEvent.offsetX + "," + lastEvent.offsetY);

					$(canvas).mouseup(function(event) 
					{
						/* Act on the event */
						isMauseDown = false;
					});
// với  beginPath() nó sẽ reset màu 
		context.beginPath();


	});

	$(canvas).mousemove(function(event) 
	{

		// var Red = $(".red").val();
		// var Blue = $(".blue").val();
		// var yellow = $(".yellow").val();


		// var color = (Red,Blue,yellow);

		/* Act on the event */
		if(isMauseDown == true)
		{
			context.moveTo(lastEvent.offsetX , lastEvent.offsetY);
			context.lineTo(event.offsetX , event.offsetY);


			context.strokeStyle = color;
			context.stroke();

			lastEvent = event;
		}
	});



});
