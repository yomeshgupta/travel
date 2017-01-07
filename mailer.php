<?php
if(isset($_POST['submit'])) {
    $to = "youremailaddress";
    $subject = "Enquiry from Travel";

    // data the visitor provided
    $name_field = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $plan_field = filter_var($_POST['plan'], FILTER_SANITIZE_STRING);
    $email_field = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $newsletter_field = filter_var($_POST['newsletter'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    //constructing the message
    $body = " From: $name_field\n\n Plan: $plan_field\n\n E-Mail: $email_field\n\n Newsletter: $newsletter_field\n\n Message: $message\n\n";

    // ...and away we go!
    mail($to, $subject, $body);
 
    // redirect to confirmation
    header('Location: http://www.yomeshgupta/com/demos/travel/index.html');
}
?>