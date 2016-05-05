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
    type:'GET',
    url:'http://fake-people.benspoon.com/1fbe60f7/people',
    success: function(people) {
      $.each(people,function(i,people) {
        $people.append('<li>name:'+ people.name +',Age:'+ people.Age +'</li>');
      });
    },
     error: function() {
      alert('error loading people.');
    }
  });
   $('#Search-Person').on('click', function() {
    var people = {
       name: $name.val(),
       Age: $Age.val(),
    };
    $.ajax({
      type:'POST',
      url:'http://fake-people.benspoon.com/1fbe60f7/people',
      data:{Name:'Rice Sosa', Age:26},
      success: function(newpeople) {
        $people.append('<li>name:'+ newpeople.name +', Age:'+newpeople.Age +'</li>');
        
      },
      error: function(){
        alert('error saving contact');
      }
    });
    });
