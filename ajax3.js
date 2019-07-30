$(document).ready(function(){
    $("#b1").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
                //console.log(data);
               // alert("click")
               var output=" "
               for(var i in data){
             output+="<div class='card' style='width: 18rem;'> <div class='card-body'>" 
             output+="<h5 class='card-title'>"+data[i].name+"</h5>"
             output+="<h6 class='card-subtitle mb-2 text-muted'>"+data[i].email+"</h6>"
             output+="<p class='card-text'>"+data[i].street+"</p> </div> </div>"
              
                output+="</div></div>"
                $(".d1").html(output);
                 
                  
                 
                 
               
             
                  //  output+="<tr> <td>"+data[i].id+ "</td>";
                  //  output+=" <td>"+data[i].name+ "</td>";
                  //  output+=" <td>"+data[i].username+ "</td>";
                  //  output+=" <td>"+data[i].email+ "</td>"
                 //   output+=" <td>"+data[i].address.street+ "</td>" 
                  //  output+=" <td>"+data[i].address.suite+ "</td>"
                  //  output+=" <td>"+data[i].address.city+ "</td>" 
                  //  output+=" <td>"+data[i].address.zipcode+ "</td></tr>";
                }
               
            }
          
        })
    });
})