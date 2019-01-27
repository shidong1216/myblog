// check off speciafic todos bu clicking

$("ul").on("click","li", function(){
	$(this).toggleClass('completed');
});

//click on x to deleted to do

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){

		var todoText = $(this).val();
		$(this).val("");
		//creat a new li and add it ti ul, 
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText+"</li>");
	}
});
	
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})