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

  const MS_FOR_HTTPS_FAILURE = 5000;
  $.orig_ajax = $.ajax;
  $.ajax = function(params)
  {
    var complete = false;
    var success = params.success;
    var error = params.error;
    params.success = function() {
      if(!complete) {
        complete = true;
        if(success) success.apply(this,arguments);
      }
    }
    params.error = function() {
      if(!complete) {
        complete = true;
        if(error) error.apply(this,arguments);
      }
    }
    setTimeout(function() {
      if(!complete) {
        complete = true;
        alert("Please ensure your self-signed HTTPS certificate has been accepted. "
          + params.url);
        if(params.error)
          params.error( {},
            "Connection failure",
            "Timed out while waiting to connect to remote resource. " +
            "Possibly could not authenticate HTTPS certificate." );
      }
    }, MS_FOR_HTTPS_FAILURE);

    $.orig_ajax(params);
  }
  $.ajax({
    type:'GET',
    url:'http://fake-people.benspoon.com/b4ce90e8/people',
    success: function(people){
      $.each(people,function(i,person){
        $people.append('<li>name:'+ person.name +',age: '+ person.age +'</li>');
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
    
$('#delete-person').on('click', function() {
      var personId = $('#selectedPerson').data('id');

      $.ajax({
        method: "DELETE", 
        url: "http://fake-people.benspoon.com/b4ce90e8/people/" + personId,
        success: function (res) {
           console.log(res)
           // res should be an empty oject if the delete succeeded
        }
      });
    });
    })();

