<?php
if (isset($_POST['submit'])) {
    $to = "n-ginosyan@mail.ru"; // replace with your email address
    $subject = "New Form Submission";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>