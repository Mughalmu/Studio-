<?php
// Hostinger Contact Handler for Muhammad Asad Portfolio
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $company = strip_tags(trim($_POST["company"]));
    $service = strip_tags(trim($_POST["service"]));
    $details = trim($_POST["details"]);

    $recipient = "asadmughalmrp1987@gmail.com";
    $subject = "New Portfolio Contact: $name ($service)";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Service: $service\n\n";
    $email_content .= "Message:\n$details\n";

    $headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $headers)) {
        header("Location: index.html?status=success#contact");
    } else {
        header("Location: index.html?status=error#contact");
    }
} else {
    header("Location: index.html");
}
?>
