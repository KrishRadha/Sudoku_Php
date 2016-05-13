
var numeric;
var alphas;


/* ---------------------------------------------------------------------------------------------------------------------------*/
function Sudoku_fill_test(id_of_the_div,data)
{
  var sud_html ='<table class="tablez"><tbody>';
  for(var i=0;i<81;i++)
  {
    if(i%9==0)
    {
      sud_html=sud_html+"<tr>";
    }
    else if(i%9==9)
    {
       sud_html=sud_html+"</tr>";
    }
    if(data[i]!='o')
    sud_html=sud_html+"<td><input type='text' style='background-color:black;color:white;' placeholder="+data[i]+"  id='check_me_id_"+i+"' disabled/></td>";
    else
    sud_html=sud_html+"<td><input type='text'  id='check_me_id_"+i+"'/></td>";
  }
  sud_html =sud_html+'</tbody></table>';
  $("#"+id_of_the_div).html(sud_html);
 // console.log(sud_html);
  
}

/* ---------------------------------------------------------------------------------------------------------------------------*/

function start_sudoku()
{
	var grid_number = Math.floor( Math.random()*30);
	if(grid_number==30)
	grid_number=29;
	
	$("document").ready(function(){
		
		  $.ajax({
      url: 'http://localhost/sudoku/data.php',
      data: {grid:{
         grid_number:grid_number
      }},
     
      dataType: 'json',
      success: function(data_r) {
        // respectively format the sudoku puzzle using the received data and solution.
        if(data_r.hasOwnProperty('success_data'))
        {
         numeric= data_r['success_data']['numeric'];
         alphas = data_r['success_data']['alpha'];  
        
        var sudoku_test=[];
        for(var i=0;i<81;i++)
        {
          if(alphas[i]=='o')
          sudoku_test[i]=alphas[i];
          else
           sudoku_test[i]=numeric[i];
          
        }
        Sudoku_fill_test("sudoku_arena",sudoku_test);
        
        $('#focus_div').html('<p><button class="btn btn-lg btn-warning" onclick="check_present_sudoku();"> Check present state </button> <button class="btn btn-lg btn-danger" onclick="check_sudoku_solution();"> Check Solution! </button> <button class="btn btn-lg btn-default" onclick="start_sudoku();"> Load Another Puzzle </button> </p>');
        $("#heading").html("Try Hard before you check the solution. Answers are not important, the process you go through to get them is!");        
        }
        else{
           $('#focus_div').html('<p>An error has occurred,please reload the page second </p>');
        }   
        
        
          
        
      },
      type: 'GET',
       error: function() {
         $('#focus_div').html('<p>An error has occurred,please reload the page first</p>');
      },    
   });
    $("#sudoku_solution").html('');
		
	});
	
	
}
/* ---------------------------------------------------------------------------------------------------------------------------*/
function check_present_sudoku()
{
  $("document").ready(function(){
    
    var check_pars =[];
      var sud_html ='<table class="tablez"><tbody>';
    for(var i=0;i<81;i++)
    {
      check_pars[i]=$("#check_me_id_"+i).val();
      if(i%9==0)
    {
      sud_html=sud_html+"<tr>";
    }
    else if(i%9==9)
    {
       sud_html=sud_html+"</tr>";
    }
      
      if(alphas[i]=='x')
      {
        sud_html=sud_html+"<td><input type='text' style='background-color:black;color:white;' value="+numeric[i]+"  id='check_me_id_"+i+"' disabled/></td>";
      }
      else
      {
        if(check_pars[i]=='')
        sud_html=sud_html+"<td><input type='text'  id='check_me_id_"+i+"'/></td>";
        else if(check_pars[i]==numeric[i])
        {
           sud_html=sud_html+"<td><input type='text' style='background-color:green;' value="+numeric[i]+"  id='check_me_id_"+i+"' /></td>";
        }
        else
        {
          sud_html=sud_html+"<td><input type='text' style='background-color:red;' value="+check_pars[i]+"  id='check_me_id_"+i+"'/></td>";
        }
      
            }
      
    }
      sud_html =sud_html+'</tbody></table>';
  $("#sudoku_arena").html(sud_html);
      
    
  });
  
  
}

/* ---------------------------------------------------------------------------------------------------------------------------*/
function check_sudoku_solution()
{
  console.log('checkin');
   var sud_html ='<table class="tablez"><tbody>';
  for(var i=0;i<81;i++)
  {
    if(i%9==0)
    {
      sud_html=sud_html+"<tr>";
    }
    else if(i%9==9)
    {
       sud_html=sud_html+"</tr>";
    }
    if(alphas[i]=='x')
    sud_html=sud_html+"<td><input type='text' style='background-color:black;color:white;' placeholder="+numeric[i]+"   disabled/></td>";
    else
    sud_html=sud_html+"<td><input type='text' style='background-color:yellow'  value="+numeric[i]+" disabled  /></td>";
  }
  sud_html =sud_html+'</tbody></table>';
  $("document").ready(function(){
  $("#sudoku_solution").html(sud_html);
  });
  console.log(sud_html);
}

/* ---------------------------------------------------------------------------------------------------------------------------*/