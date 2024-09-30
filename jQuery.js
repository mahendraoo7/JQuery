$(function(){
  $('#btn').click(function(){
  const colors = [
    "#808080ed", "#798683", "#738c87", "#6c938b", "#66998f",
    "#609f93", "#59a696", "#53ac9a", "#4db39e", "#46b9a2",
    "#40bfa6", "#39c6aa", "#33ccad", "#2dd2b1", "#26d9b5",
    "#20dfb9", "#19e6bd", "#13ecc1", "#0df2c4", "#06f9c8"
  ];

  const fadeElements = Array.from({ length: 65 }, (_, i) => $(`.fade-${i + 1}`));

  fadeElements.forEach((element, index) => {
    element.fadeIn((index + 1) * 1000).css({
      height: '100px',
      width: '100px',
      border: "2px solid black",
      backgroundColor: colors[index % colors.length]
    });
  });
})})


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