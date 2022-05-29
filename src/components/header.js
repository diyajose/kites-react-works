function Header() {
    return (
      <div className="App">
        {/* <!-- ======= Header ======= --> */}
        {/* <!--<div class="container d-flex align-items-center">--> */}
        <header id="header" class="fixed-top d-flex align-items-center header-transparent" style={{ minHeight: '100px' }} >
        <div class="container d-flex align-items-center">
  
          <div class="logo mr-auto">
  
            <a href="index.html"><img src="https://cdn.kites.foundation/img/templogo.png" alt="" class="img-fluid" style={{maxWidth: '100%' ,minHeight: '55px'}}></img></a>
          </div>
          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active"><a href="index.html">Home</a></li>
  
              <li class="drop-down"><a href="a">About Us</a>
                <ul>
                  <li><a href="a">Our Story</a></li>
                  <li><a href="vision.html">Vision & Mission</a></li>
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Team</a>
                    <ul>
                      <li><a href="boardofdirectors.html">Board of Directors</a></li>
                      <li><a href="executive.html">Executive Committee</a></li>
                      <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Department</a>
                        <ul>
                          <li><a href="education.html">Education</a></li>
                          <li><a href="a">Livelihood</a></li>
                          <li><a href="a">Rang</a></li>
                          <li><a href="a">Environment</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="partners.html">Our Partners</a></li>
                  <li><a href="faq.html">FAQ</a></li>
  
                </ul>
              </li>
  
              <li class="drop-down"><a href="a">Our Initiatives</a>
                <ul>
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Education</a>
                    <ul>
                      <li><a href="microlearning.html">Microlearning Hub</a></li>
                      <li><a href="umeed.html">Umeed</a></li>
                      <li><a href="http://sumedha.org.in/">Sumedha</a></li>
                      {/*  <!-- <li><a href="mysanta.html">My Santa</a></li> --> */}
                    </ul>
                  </li>
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Health</a>
                    <ul>
                      <li><a href="flattenthecurve.html">Flatten the curve</a></li>
                      {/*  <!-- <li><a href="#">Blood Bank</a></li> --> */}
                    </ul>
                  </li>
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Environment</a>
                    <ul>
                      <li><a href="perunthode.html">Perunthode Project</a></li>
                      <li><a href="summerpots.html">Summerpots</a></li>
                      <li><a href="punarjjani.html">Punarjjani</a></li>
                      {/* <!--<li><a href="#">Million Trees</a></li> --> */}
                    </ul>
                  </li>
  
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Livelihood</a>
                    <ul>
                      <li><a href="mysanta.html">My Santa</a></li>
                      <li><a href="bookfarm.html">Book Farm</a></li>
                    </ul>
                  </li>
  
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Technology</a>
                    <ul>
                      <li><a href="vibgyormunnar.html">Munnar Vibgyor Tourism</a></li>
                      <li><a href="c4munnar.html">Code4Munnar</a></li>
  
                    </ul>
                  </li>
  
                  <li class="drop-down"><i class="fas fa-angle-right"></i><a href="a">Art & Culture</a>
                    <ul>
                      <li><a href="rang.html">Rang Fest</a></li>
                      <li><a href="kitesbooks.html">Kites Books</a></li>
                      <li><a href="voiceofindia.html">Voice of India</a></li>
  
  
                    </ul>
                  </li>
                  <li><a href="kalamawards/index.html">Kalam Awards</a></li>
  
                </ul>
              </li>
  
              <li class="drop-down"><a href="a">Impact</a>
                <ul>
                  {/* <!-- <li><a href="#">Their Stories</a></li> --> */}
                  <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
              </li>
  
              <li class="drop-down"><a href="a">Media</a>
                <ul>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="news.html">News</a></li>
                  <li><a href="videos.html">Video</a></li>
                </ul>
              </li>
  
  
  
              <li><a href="#contact">Contact</a></li>
  
              <li class="book-a-table text-center"><a href="join.html">Join Us</a></li>
              <li class="book-a-table text-center"><a href="changemaker.html">ChangeMaker</a></li>
              {/*  <!-- <li class="book-a-table text-center"><a href="https://rzp.io/l/Bookfarm">Donate</a> -->
              <!-- <li class="book-a-table text-center"><a href="https://docs.google.com/forms/d/e/1FAIpQLSetfYY_b6EMPejEQAl7Xk7k_NtX5PRiXrcQw6e44s2iZ9z35g/viewform?usp=sf_link">RANG 2.0</a>
            </li> -->
            <!--<li class="book-a-table1 text-center"><a href="https://kitesfoundation.org/c4munnar">Code4Munnar</a></li>--> */}
            </ul>
          </nav>{/* <!-- .nav-menu --> */}
        </div>
      </header>{/* <!-- End Header --> */ }
      </div >
  
    );
  }
  
  export default Header;