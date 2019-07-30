$(document).ready(function(){
    $("#b1").click(function(){
        $.ajax({
            type:"GET",
            url:"http://10.0.2.64:8080/mydata.json",
            success:function(data){
                //console.log(data);
               // alert("click")
                var output="<table class='table'><thead><tr><th>name</th><th>dob</th><th>college</th><th>mob</th></tr></thead>"
                for(var i in data){
                    output+="<tr> <td>"+data[i].name+ "</td>";
                    output+=" <td>"+data[i].dob+ "</td>";
                    output+=" <td>"+data[i].college+ "</td>";
                    output+=" <td>"+data[i].mob+ "</td> </tr>";
                }
                output+="</table>"
                $(".d1").html(output);
            }
          
        })
    });
})