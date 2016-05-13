<?php
function Read_data($file,$index_state)
{
	$sudoku = fopen($file, "r") or die("We were unable to find the file sudoku.txt");
	 $alpha=0;       //keeps track of array for letters x and o

  $numeric=0;     //keeps track of array for sudoko numbers

  while(!feof($sudoku))// while using the sudoku.txt file
  {
    $line= trim(fgetc($sudoku));// trim whitespace

    if(ctype_digit($line))
	{         //if statement puts numbers in an array

      $s_nums[$numeric]=$line;// this portion puts all of the number tables into an array

      $numeric=$numeric+1;
    }

    if(ctype_alpha($line)) //puts letters in seperate array, the x and o
    {

      $s_alphas[$alpha]=$line;

      $alpha=$alpha+1;
    }
  }
  
  
  
  
  $sudoku_data = Array(30);
  
  
  for($i=0;$i<30;$i++)
  {
    $sudoku_data[$i]=Array();
    $sudoku_data[$i]['numeric']=Array(81);
    $count=0;
    for($j=($i*81);$j<($i+1)*81;$j++)
    {
      
      $sudoku_data[$i]['numeric'][$count]=$s_nums[$j];
      $count++;
    }
     $sudoku_data[$i]['alpha']=Array(81);
     $count=0;
    for($j=($i*81);$j<($i+1)*81;$j++)
    {
      
      $sudoku_data[$i]['alpha'][$count]=$s_alphas[$j];
      $count++;
    }
  }
  
  return ($sudoku_data[$index_state]);
}