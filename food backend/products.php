<?php
    include_once('core.php');
    $servern="localhost";
    $username="vansh";
    $pass="123";
    $db_name="food";
    $conn=new mysqli($servern,$username,$pass,$db_name);
    if($conn->connect_error){
        die("connection error: ".$conn->connect_error);
    }
    else{
        $sql='SELECT * FROM  products';
        $result=mysqli_query($conn,$sql);
        $products=mysqli_fetch_all($result,MYSQLI_ASSOC);
    }
    echo json_encode($products);

?>