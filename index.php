# This file handles the table on the webiste,
# as well as the interactive map on the page.
# Update 11-17-21 Documentation
# Update 11-16-21 Original Creation
<?php session_start();?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>All The Way</title>
    <link href="style.css" type="text/css" rel="stylesheet" />
</head>

<body>
    <?php
		include("connection.php");
	?>
    <div id="banner">
        <h1>ALL THE WAY</h1>
    </div>
    <div id="sortBar">
        <h2>Sort</h2>
    </div>
    <!-- 
    Table containing the name, type, hours
    price, and menu of the project.
    -->
    <div id="restaurants">
        <table>
            <tr>
                <th>Restaurant</th>
                <th>Today's Hours</th>
                <th>Type of Restaurant</th>

                <th>Price</th>
                <th>Rating</th>
                <th>Menu</th>
            </tr>
            <?php 
            $result= mysql_query ("SELECT * FROM restaurants) or die("SELECT Error: ".mysql_error());
             while($row = mysqli_fetch_array($result))
             { 
            echo "<tr>"; 
            echo "<td>" . $row['name'] . "</td>'" 
            echo "<td>'. $row['hours'] . '</td>"; 
            echo "<td>' . $row['type'] . '</td>"; 
            echo "<td>' . $row['price'] . '</td>";
            echo "<td>' . $row['rating'] . '</td>";
            echo "<td><a href='" . $row['menu'] . "' target='_blank'>Menu</a></td>";
            echo "</tr>"; 
             }
            ?>

        </table>
    </div>


    <!-- 
    Interactive map in an iframe, allows for zoom in an scrolling, etc.
    Utilizes the google API. 
    -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19594.861747414187!2d-84.73272122468907!3d39.50800192131636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1634578577015!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    <div id="footer">
        <p>© 2021 Five Guys, Catches &amp Tries. All Rights Reserved.</p>
    </div>
</body>

</html>
