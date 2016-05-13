<?php 
require_once('functions.php');

if(isset($_GET['grid']))
{
if($_GET['grid']['grid_number']>=0&&$_GET['grid']['grid_number']<31&&is_numeric($_GET['grid']['grid_number']))
{
	$send_data=Read_data("sudoku.txt",$_GET['grid']['grid_number']);
	$json_data['success_data']=$send_data;
	echo json_encode($json_data);
}
else{
	echo "error_no_grid_number_index";
}
}
else{
	echo "error_no_grid_index";
}