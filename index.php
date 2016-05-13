

<?php 

/* This is a sudoku game , this reads data from sudoku.txt and provides puzzles and answers */


echo '
<!DOCTYPE HTML>
<html>
	
	<head>
		
<!-- Latest compiled and minified CSS -->

		<script src="jquery.js" ></script>
		<link rel="stylesheet" href="custom.css">
	<link rel="stylesheet" href="bootstrap.min.css">
	


<!-- Latest compiled and minified JavaScript -->
<script src="bootstrap.min.js"></script>
		
	</head>
	
	<body style="background-color:black;">
		
		<div class="container">
		  <div class="jumbotron" style="background-color:green;">
		
		<h3 id="heading">Welcome to the Sudoku Puzzle arena. Test your mettle here! Press start to load a quick puzzle.</h3>
		
		<h4>  created by Danielle Beauchamp and Briana Thezard </h4>
		
		<div id="focus_div"><button class="btn btn-lg" onclick="start_sudoku();"> START </button></div>
		
		</div>
		</div>
		
		<div class="container">
		<div id="sudoku_pane" style="background-color:grey;">
			
			<div class="row">
			
			<div class="col-md-4">
			</div>
			
			<div class="col-md-4" id="sudoku_arena">
			</div>
			
			<div class="col-md-4" id="sudoku_solution">
			</div>
			
			</div>
			
		</div>
		</div>
		<script src="sudoku.js" ></script>
		
		
	</body>	
	
</html>
';