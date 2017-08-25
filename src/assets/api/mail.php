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

  $company = $content->company ? ' &mdash; '.$content->company : '';

  $message = '
  <!doctype HTML>
  <html>
    <head>
      <title>'.$subject.'</title>
    </head>
    <body>
      <div style="background: whitesmoke; position: relative; width: 100%; height: 100%; padding: 16px 0; margin: 0; line-height: 1.5;">
        <div style="padding: 0 16px">'.$content->name.' ('.$content->from.') '.$company.'</div>
        <div style="padding: 0 16px; margin-top: 16px">'.$content->message.'</div>
      </div>
    </body>
  </html>
  ';

  if(mail('', $subject, $message, $headers)) {
    echo true;
  } else {
    echo false;
  }
}

sendMail();