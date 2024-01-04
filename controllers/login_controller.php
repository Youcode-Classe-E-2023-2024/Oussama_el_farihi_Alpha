<?php
    if(isset($_POST['submit'])){
        User::login($_POST["email"], $_POST["password"]);
    } 
?> 