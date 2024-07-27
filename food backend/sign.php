<?php
    header('Access-Control-Allow-Origin: *');
    include_once("core.php");

    $servern = "localhost";
    $username = "vansh";
    $pass = "123";
    $db_name = "food";
    $conn = new mysqli($servern, $username, $pass, $db_name);

    if($conn->connect_error){
        die("connection error: " . $conn->connect_error);
    } else {
        $fname = $_POST['fname'];
        $userInput = $_POST['userInput'];
        $passInput = $_POST['passInput'];
        $lname = $_POST['lname'];

        $sql = "INSERT INTO users (fname, lname, userInput, passInput) VALUES ('$fname', '$lname', '$userInput', '$passInput')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
?>
