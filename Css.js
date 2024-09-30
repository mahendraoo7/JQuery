// What is jQuery?
// jQuery is a lightweight, "write less, do more", JavaScript library.

// The purpose of jQuery is to make it much easier to use JavaScript on your website.

// jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

// jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

// The jQuery library contains the following features:

// HTML/DOM manipulation
// CSS manipulation
// HTML event methods
// Effects and animations
// AJAX
// Utilities

// $(document).ready(function(){

//     // jQuery methods go here...
  
//   });

// jQuery Selectors

// Example
// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").hide();
//   });
// });

// $("*")	Selects all elements	
// $(this)	Selects the current HTML element	
// $("p.intro")	Selects all <p> elements with class="intro"	
// $("p:first")	Selects the first <p> element	
// $("ul li:first")	Selects the first <li> element of the first <ul>	
// $("ul li:first-child")	Selects the first <li> element of every <ul>	
// $("[href]")	Selects all elements with an href attribute	
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
// $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
// $(":button")	Selects all <button> elements and <input> elements of type="button"	
// $("tr:even")	Selects all even <tr> elements	
// $("tr:odd")	Selects all odd <tr> elements



/*  jQuery Get Html Method */

/*
text()
html()
val()
*/

// $(function(){
//     $('#btn').click(function(){
//         console.log($('#heading').text())
//     })
// })


// $(function(){
//     $('#btn').click(function(){
//         console.log($('#heading').html())
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         console.log($('#inputs').val())
//     })
// })

/*  jQuery Set Html Method */

// $(function(){
//     $('#btn').click(function(){
//         $('#heading').text('<span>This is Heading Tag</span>')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#heading').html('<span>This is Heading Tag</span>')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#inputs').val('This is Heading Tag')
//     })
// })

/* Jquery Add Method */


// $(function(){
//     $('#btn').dblclick(function(){
//         $('#heading').append('<span>Elements</span>')
//     })
// })

// $(function(){
//     $('#btn').dblclick(function(){
//         $('#heading').prepend('<span>Elements</span>')
//     })
// })

// $(function(){
//     $('#btn').dblclick(function(){
//         $('#heading').after('<span>Elements</span>')
//     })
// })

// $(function(){
//     $('#btn').dblclick(function(){
//         $('#heading').before('<span>Elements</span>')
//     })
// })







/* innerHtml , innerText and textContent */

// let Dom = document.getElementById('heading').innerHTML
// let Dom1 = document.getElementById('heading').textContent
// let Dom2 = document.getElementById('heading').innerText

// console.log(Dom);
// console.log(Dom1);
// console.log(Dom2);