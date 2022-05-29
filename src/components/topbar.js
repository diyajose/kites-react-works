function Topbar() {
  return (
    <div className="App">
      { /*  <!-- ======= Top Bar ======= --> */}
      <section id="topbar" class="d-none d-lg-flex align-items-center fixed-top topbar-transparent">
        <div class="container text-right">
          <i class="icofont-phone"></i> +91 8138 0009 33
          <i class="social-links">
            <a href="https://twitter.com/FoundationKites" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="http://facebook.com/kitesfoundationfb" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="https://instagram.com/kitesfoundation" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCoyxzgTZee1t068TJ0o44fg" class="youtube"><i
              class="bx bxl-youtube"></i></a>
            <a href="https://www.linkedin.com/company/kites-foundation" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </i>
          {/*  <!-- 
                <i class="icofont-clock-time icofont-rotate-180"></i> Mon-Sat: 11:00 AM - 23:00 PM   --> */}
        </div>
      </section>
    </div >

  );
}

export default Topbar;