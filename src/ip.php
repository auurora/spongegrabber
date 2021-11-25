<?php
    $cloudflare_enabled = true;


    header("Content-Type: text/javascript");
    
    $ip = htmlentities($_SERVER['REMOTE_ADDR']);

    if ($cloudflare_enabled) 
    {
        $ip = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }

    $ip = preg_replace('/[^0-9a-f.:]/', '', $ip);

    die ("window.ip = '$ip';");
?>
