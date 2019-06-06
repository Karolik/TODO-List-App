// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
  }); //before removes the "li", there is the effect of fading out
  event.stopPropagation(); //stops event bubbling (the parent "li" doesn't get fired when we click the span)
});

$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){ //Check for Enter 
    //Grab new todo text from input:
    let todoText = $(this).val();
    //Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    //Clear the input
    $(this).val("");
    console.log($(this).val()); //Print the value of the input
  }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
