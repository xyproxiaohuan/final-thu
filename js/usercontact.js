$(function(){
  var $people= $('people');
  var $name=$('#name');
  var $Age=$('#Age');
  var $EyeColor=$('#EyeColor');
  var $Gender=$('#Gender');
  var $Address=$('#Address');
 
$("#hide").on('click',function(){
  $("h3").hide();
 });
});
  $("#show").on('click',function(){
  $("h3").show();
});

  
  $.ajax({
   url: "https://fake-people.benspoon.com/b4ce90e8/people",
  success: function(res) {
        $('.name').on("click", function(){
           $('#people').empty();
        res.forEach(function(person){
      $('#people').append("<li>" + person.name + "</li>" ).toggle();
    });

        });
  }     
  });
  (function(){
        $('#Find-person').on('click', function() {
             var person = {};
            person.name = $('#name').val();
    
    $.ajax({
      type:'POST',
      url:'http://fake-people.benspoon.com/b4ce90e8/people',
      data:person,
      success: function(res) {
        console.log(res)     
         },
      error: function(){
        alert('error saving contact');
      }
    });
    });
    })();

