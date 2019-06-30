<?php include 'header.php'; ?>

    <div class="section-content section-1-content">
      
      <h1>LET'S WORK TOGETHER</h1>
      <h3>CONTACT US</h3>
      
    </div><!-- .section-1-content -->
   
  </section><!-- .section-1 -->

  <section class="section-2">

    <div class="section-content section-2-content">
      
      <div class="contact-wrapper">
        
        <h1>LET'S WORK TOGETHER</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      
        <div class="fc-contact-info">

          <div class="info-block">
            <p><span class="fc-icon fc-location"></span></p>
            <h3>123 LOREM IPSUM, EXAMPLE St. <span>Something, New Jersery, USA 08093</span></h3>
          </div>

          <div class="info-block">
            <p><span class="fc-icon fc-phone"></span></p>
            <h3>CALL US <span>987-234-0098</span></h3>
          </div>

          <div class="info-block">
            <p><span class="fc-icon fc-envelope"></span></p>
            <h3>MAIL US <span>example@examplemail.com</span></h3>
          </div>

        </div><!-- .fc-contact-info" -->
        
      </div><!-- .contact-wrapper -->

    </div><!-- .section-2-content -->
    
  </section><!-- .section-2 -->

  <section class="section-3">

    <div class="bg-overlay"></div>
    
    <div class="section-content section-3-content">
      
      <div class="content-img">
        <img src="img/png/contact.png" alt="Person 3">
      </div>
      
      <div class="contact-form-container">
        <form id="fcContactForm" class="fc-contact-form" action="/fitness-club/includes/contact.php" method="post">

          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control fc-form-control" id="mail-name" name="name">
            <small class="text-danger form-control-msg">Your Name is Required</small> 
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control fc-form-control" id="mail-email" name="email">
            <small class="text-danger form-control-msg">Your Email is Required</small> 
          </div>
          
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control fc-form-control" id="mail-phone" name="phone">
            <small class="text-danger form-control-msg">Your Phone Number is Required</small> 
          </div>
          
          <div class="form-group">
            <label>Interested In</label>
            <select name="interest" id="mail-interest">
              <option>Personal Training</option>
              <option>Group Training</option>
              <option>Nutrition Counseling</option>
              <option>Online Consultation</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="mail-message" class="form-control fc-form-control"></textarea>
            <small class="text-danger form-control-msg">A Message is Required</small>
          </div>

          <div class="submit-container">
            <button id="mail-submit" type="submit" class="fc-submit" name="submit"><span>SUBMIT</span></button>
            <small class="text-info form-control-msg js-form-submission">Submission in process, please wait..</small>
            <small class="text-success form-control-msg js-form-success">Message successfully submitted, thank you!</small>
            <small class="text-danger form-control-msg js-form-error">There was a problem with the Contact Form, please try again!</small>
          </div>

          <p id="form-message"></p>
        </form>
      </div><!-- .contact-form-container -->

    </div><!-- .section-3-content -->
    
  </section><!-- .section-3 -->


<?php include 'footer.php'; ?>