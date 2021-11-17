# This file handles selecting the database
# Update 11-17-21 Documentation
# Update 10-27-21 Original Creation
<?php
	$username = "jordanmg_sparkData";
	$password = "ittechprep?";
	$database = "jordanmg_alltheway";
	$mysqli = new mysqli("localhost", $username, $password, $database);
	$mysqli->select_db($database) or die("Unable to select database");
?>
