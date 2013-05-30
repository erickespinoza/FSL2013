<?php
if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
   
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');      
    }
     
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
    $type = $_POST['type'];//
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Mensaje enviado desde la Pagina:.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "First Name: ".clean_string($first_name)." ";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
  
  if($type == "Información del Evento"){
    $email_to = "info@fsl.cr";
    $email_subject = "Información del Evento"; 
  }elseif ($type == "Prensa") {
    $email_to = "prensa@fsl.cr";
    $email_subject = "Prensa";
  }elseif ($type == "Bandas") {
    $email_to = "asanabria@fsl.cr";
    $email_subject = "Bandas";
  }else{
    $email_to = "produccion@fsl.cr";
    $email_subject = "Patrocinadores";
  } 
      
     
  // create email headers
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  mail($email_to, $email_subject, $email_message, $headers);


  //guardar datos en base de datos.
  // $con=mysqli_connect("localhost","root","egea19984","fsl");
  // // Check connection
  // if (mysqli_connect_errno())
  //   {
  //   echo "Failed to connect to MySQL: " . mysqli_connect_error();
  //   }

  // mysqli_query($con,"INSERT INTO mailInfo (first_name, last_name, contact, phone)
  // VALUES ('{$first_name}', '{$last_name}','{$email_from}','{$telephone}')");


  // mysqli_close($con);

  //redireccionar a info.html
  ?> <SCRIPT type="text/javascript">
     alert("Su mensaje ha sido correctamente");
     location.href="http://festsl.com/info.html";
  </SCRIPT>

  
  

  //header ("Location: http://festsl.com/info.html"); 
  //
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
}
?>