<?php

if (empty(file_get_contents('php://input'))) {
  die('No data were sent.');
}

function sendMail() {
  $content = json_decode(file_get_contents('php://input'));

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $headers .= 'To: FrontFlow <'.$content->to.'>' . "\r\n";
  $headers .= 'From: '.$content->name.' <'.$content->from.'>' . "\r\n";

  $subject = 'New contact from FrontFlow.';

  $message = '
  <!doctype HTML>
  <html>
    <head>
      <title>'.$subject.'</title>
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <th><b>Name</b></th>
            <th><b>Email</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>'.$content->name.'</td>
            <td>'.$content->from.'</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead>
          <tr>
            <th><b>Message</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>'.$content->message.'</td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  ';

  if(mail($content->to, $subject, $message, $headers)) {
    echo true;
  } else {
    echo 'Mail could not be sent';
  }
}

sendMail();