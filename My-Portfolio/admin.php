<!-- php area started here -->

<?php
require_once('My-Portfolio-Connection-Database.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['admin'])) {
        $admin = mysqli_real_escape_string($connectionName, trim($_POST['admin']));
        $password = mysqli_real_escape_string($connectionName, trim($_POST['adminpassword']));
    }
    $quary = "SELECT * FROM `adminarea` WHERE `admin` = '$admin' AND `admin-password` = '$password' ";
    $fire = mysqli_query($connectionName, $quary);


    if ($fire) {
        if (mysqli_num_rows($fire) == 1) {
            session_start();
            $_SESSION['admin-log-in.php'] = true;
            $_SESSION['admin'] = $admin;
            echo '<script>
            window.location.href="view-contect.php";
        </script>';
            return ($admin);
        } else {
            echo "INVALID ADMIN-ID AND PASSWORD";
        }
    }

}
?>
<!-- php area ended here -->