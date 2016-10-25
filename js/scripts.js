var factorial = function(num) {
	if (num < 0) {
  return "choose a number >= 0"
  } else if (num <=1) {
  return 1
  } else {
  	var startNum = 1;
 	 for(var i = 2; i <= num; i++) {
  		startNum = startNum * i;
  	}
   return startNum
  }
}

$(document).ready(function() {
  $("#factorial").submit(function(event){
    event.preventDefault();
    $(".output").text(factorial(parseInt($("#input").val())));

  })
})
