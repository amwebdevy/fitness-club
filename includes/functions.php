<?php 

// Return current page name (file name)
function page_name() {
  if ( basename($_SERVER['PHP_SELF'],'.php') == 'index' ):
    return 'home';    
  else:
    return basename($_SERVER['PHP_SELF'],'.php'); 
  endif;
}
