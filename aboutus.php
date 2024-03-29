<?php
    require "body/menucode.php";
?>
<?php 
    session_start();
    if (isset($_SESSION["lang"]) && ($_SESSION["lang"] == "TH")){
        require("body/th.php");
    } else {
        require("body/en.php");
    }
    session_write_close();
?>

<!DOCTYPE html>
<html lang="EN">

<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/datatables.min.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/color.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap" rel="stylesheet">
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/datatables.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TIPsDB</title>
</head>

<body>
<?php
    require "body/body.php";
?>
</body>

</html>