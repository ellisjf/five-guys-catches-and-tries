<?php
	$username = "jordanmg_sparkData";
	$password = "ittechprep?";
	$database = "jordanmg_alltheway";
	$mysqli = new mysqli("localhost", $username, $password, $database);
	$mysqli->select_db($database) or die("Unable to select database");
?>