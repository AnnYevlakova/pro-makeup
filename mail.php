

<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


$to  = 'ann.yevlakova@gmail.com'; 
$subject = 'Заявка - '.strip_tags($logo).' - '.$phone.'';
$from = "$email";
// текст письма
$message = '
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Заявка</title>
	</head>
	<body>
<p><strong>имя: &nbsp;</strong> '.$name.'</p>
<p><strong>телефон: &nbsp;</strong> '.$phone.'</p>
<p><strong>email: &nbsp;</strong> '.$email.'</p>
<p><strong>сообщение</strong> '.$message.'</p>
	</body>
</html>
';

$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: ann.yevlakova@gmail.com";

mail($to, $subject, $message, $headers)
or print "Не могу отправить письмо !!!"; 
echo "<center><b>Спасибо за отправку вашего сообщения <b><a href=index.html>Нажмите</a>, что бы вернуться на главную..."; 
exit;

?>

