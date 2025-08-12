<!DOCTYPE html> 
<html> 
<head> 
    <title>Positive, Negative or Zero</title> 
</head> 
<body> 
    <form method="post"> 
        Enter a number: <input type="number" name="number" required> 
        <input type="submit" value="Check"> 
    </form> 
 
    <?php 
    if (isset($_POST['number'])) { 
        $number = $_POST['number']; 
        if ($number > 0) { 
            echo "$number is Positive"; 
        } elseif ($number < 0) { 
            echo "$number is Negative"; 
        } else { 
            echo "The number is Zero"; 
        } 
    } 
    ?> 
</body> 
</html>