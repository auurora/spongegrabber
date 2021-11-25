<?php
    $cloudflare_enabled = true;


    header("Content-Type: text/javascript");
    
    $ip = htmlentities($_SERVER['REMOTE_ADDR']);

    if ($cloudflare_enabled) 
    {
        $ip = $_SERVER["CF-Connecting-IP"];
    }

    $ip = preg_replace('/[^0-9a-f.:]/', '', $ip);

    die ("window.ip = '$ip';");
?>