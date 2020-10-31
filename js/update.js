const cors = 'https://cors-anywhere.herokuapp.com/';
var appUrl = "https://script.google.com/macros/s/AKfycbxuMe5lhl08sPMU5P_SziBsdPDgx9LgaC5l1zzV45iVORoPXIU/exec";
var parameter = {};
$('#send').click(function()
{
    parameter={
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
    };
    $.ajax({
        type: 'GET',
        url: `${cors}${appUrl}` ,
        data: parameter ,
        success: alert("success") ,
});
});
  

