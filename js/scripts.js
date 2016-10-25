//Buisness Logic

//Factorial function non-recursive
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


//Recursive factorial function
var factorialRecursive = function(num) {
  if (num < 0) {
  return "choose a number >= 0"
  } else if (num <=1) {
  return 1
  } else {

    return (num * factorialRecursive(num-1));
  }
}

//Function to determine if a string is a palindrome.
var isPalindrome = function(string) {
  var originalArray = string.split("");
  var reverseArray = originalArray.slice().reverse();
  var isPal;

  for (var index = 0; index < originalArray.length; index ++) {
    if (originalArray[index] === reverseArray[index]) {
      isPal = true;
    } else  {
      isPal = false;
      break
    }
  }

  if (isPal === true) {
    return "This is a palindrome!"
  } else {
    return "this is NOT a palindrome!"
  }
}

var primeNumber = function(number) {
  var primeList = [];
  for(var i = 2; i <= number; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
     primeList.push(i);
   } else if (i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0) {
      primeList.push(i);
    }
  }
  return primeList;
};


//Interface Logic
$(document).ready(function() {
  $("#factorial").submit(function(event){
    event.preventDefault();
    $(".output").text(factorialRecursive(parseInt($("#input").val())));

  })
  $("#palindrome").submit(function(event){
    event.preventDefault();
    $(".output-palindrome").text(isPalindrome($("#input-pal").val()));

  })

  $("#primeNumber").submit(function(event){
    event.preventDefault();
    $(".output-pri").text(primeNumber(parseInt($("#input-pri").val())));
  });
})
