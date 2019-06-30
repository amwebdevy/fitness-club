<?php include 'includes/functions.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fitness Club</title> 
  <meta name="description" content="Premium Fitness Training">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:700" rel="stylesheet">
</head>

<body>

  <div class="fc-container fc-container-<?php echo page_name(); ?>">
    
    <section class="section-1">
      
      <header class="fc-header">  
        
        <div class="fc-header-wrapper">
        
        <!-- Nav-toggle -->
        <div class="toggle">
          <a class="btn-toggle"><span class="fcicon fc-burger"></span></a>
        </div>
        
        <div class="logo">
          <a href="index.php">
            <span class="fcicon fc-logo"></span>
          </a>
        </div>
        
        <div class="fc-nav open">
          <ul>
            <li <?php ( page_name() == 'home' ? print 'class="active"' : ''); ?>><a href="index.php">HOME</a></li>
            <li <?php ( page_name() == 'about' ? print 'class="active"' : ''); ?>><a href="about.php">ABOUT</a></li>
            <li <?php ( page_name() == 'services' ? print 'class="active"' : ''); ?>><a href="services.php">SERVICES</a></li>
            <li <?php ( page_name() == 'contact' ? print 'class="active"' : ''); ?>><a href="contact.php">CONTACT</a></li>
          </ul>  
        </div>   
        
        </div><!-- .fc-header-wrapper -->

      </header>
    
      <div class="bg-overlay"></div>