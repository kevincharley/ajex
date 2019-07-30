$(document).ready(function(){
    $("#b1").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
                //console.log(data);
               // alert("click")
                var output="<table class='table'><thead><tr><th>name</th><th>dob</th><th>college</th><th>mob</th></tr></thead>"
                for(var i in data){
                    output+="<tr> <td>"+data[i].id+ "</td>";
                    output+=" <td>"+data[i].name+ "</td>";
                    output+=" <td>"+data[i].username+ "</td>";
                    output+=" <td>"+data[i].email+ "</td>"
                    output+=" <td>"+data[i].address.street+ "</td>" 
                    output+=" <td>"+data[i].address.suite+ "</td>"
                    output+=" <td>"+data[i].address.city+ "</td>" 
                    output+=" <td>"+data[i].address.zipcode+ "</td></tr>";
                }
                output+="</table>"
                $(".d1").html(output);
            }
          
        })
    });
})