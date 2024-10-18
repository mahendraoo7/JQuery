$(function(){
    $('#btn').click(function() {
        $('div').children().css({
            backgroundColor : 'yellow'
        })
    })
})

$(function() { 
          $('#btn').click(function(){
              $('div').siblings().css({
                  backgroundColor : 'yellow'
              })
          })
      })

$(function() {
    $('#btn').click(function() {
        $('ul').children().css({
            color : 'red',
            backgroundColor : 'black'
        })
    })
})