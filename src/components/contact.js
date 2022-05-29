function Contact() {
    return (
      <div className="App">
          {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2><span>Contact</span> Us</h2>
          <p>Your interest and support is what fuels our journey, please feel free to contact us in case of any queries
            or suggestions.</p>
        </div>
      </div>

      <div class="map">
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3925.3509163405956!2d76.1524232!3d10.3137756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39d6773f93f42c92!2sKites%20Foundation!5e0!3m2!1sen!2sin!4v1646399581395!5m2!1sen!2sin"
          frameborder="0" style={{border:'0', width: '100%', height: '350px'}} allowfullscreen aria-hidden="false" tabindex="0" title="nil"></iframe>
      </div>

      <div class="container mt-5">

        <div class="info-wrap">
          <div class="row">
            <div class="col-lg-3 col-md-6 info">
              <i class="icofont-google-map"></i>
              <h4>Location:</h4>
              <p>Perinjanam,Thrissur<br/> Kerala 680686</p>
            </div>

            <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i class="icofont-clock-time icofont-rotate-90"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday:<br/>10:00 AM - 05:00 PM</p>
            </div>


            <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i class="icofont-envelope"></i>
              <h4>Email:</h4>
              <p>info@kitesfoundation.org<br/>office@kitesfoundation.org</p>
            </div>

            <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i class="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+91 8138 0009 33<br/>+91 8138 0009 35</p>
            </div>
          </div>
        </div>

        {/* <!--      <form action="forms/contact.php" method="post" role="form" class="php-email-form">
          <div class="form-row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div class="validate"></div>
            </div>
            <div class="col-md-6 form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div class="validate"></div>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div>
        </form>
   --> */}
      </div>
    </section>{/* <!-- End Contact Section --> */}

    </div >

);
}

export default Contact;
    
