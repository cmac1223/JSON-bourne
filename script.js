$( document ).ready(function() {
    var secretStash = {};
    console.log( "ready!" );
    $( "#mission_one_btn" ).click(function() {
        $.get('https://api.myjson.com/bins/1680y')
            .done(function (item) {
                
                console.log(item);
                secretStash = item;
            });
    });


    $( "#mission_two_btn" ).click(storeItem);
    
    function storeItem() {
        console.log('1', secretStash);
        var unstringData = {
            passphrase: secretStash.passphrase,
        };
        var data = JSON.stringify({
            passphrase: secretStash.passphrase,
        });
        console.log(data);
        if (secretStash.passphrase) {
            $.ajax({
                url:"https://api.myjson.com/bins",
                type:"POST",
                data: data,
                contentType:"application/json; charset=utf-8",
                dataType:"json",
                success: function(data, textStatus, res){
                    console.log(data, textStatus, res);
                }
            }); 
        } else {
           // debugger;
            alert('You have to retrieve your secret stash first!')
        }   
            
    }
});

$.ajax({
    url:"https://api.myjson.com/bins",
    type:"POST",
    data:'{"key":"value"}',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){

    }
}); 


