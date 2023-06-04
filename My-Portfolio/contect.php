<?php

require_once('My-Portfolio-Connection-Database.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $phone = $_POST['phone'];
        $text = $_POST['text'];
    }

    // inserting to database quarry

    $data_base = "INSERT INTO `contact me` ( `Name`, `Email`, `Subject`,`phone`, `Text`) VALUES ( '$name', '$email', '$subject', '$phone' ,'$text')";
    $result = mysqli_query($connectionName, $data_base);
    if ($result) {
        echo '<div class="alert alert-success d-flex text-center" role="alert">
    <h4 class="alert-heading text-capitalize">Well done!</h4>
    <br>
    <p class="text-capitalize">your data is inserted succesfull</p>
    </div>';
    }
    else{
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>error</strong> your data  is not inserted due to some technical error--!<br>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>'.mysqli_connect_error();
    }
}
?>