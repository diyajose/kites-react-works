function About() {
    return (
      <div className="App">

{/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">

          <div class="col-lg-5 align-items-stretch video-box"
            style={{backgroundImage: 'url("https://cdn.kites.foundation/img/about.jpg")'}}>
            <a href="https://www.youtube.com/watch?v=_RwnMjX2wPg" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"><i></i></a>
          </div>

          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

            <div class="content">
              <h3><span style={{color: 'orange'}}>our Vision</span></h3>
            <h4><span style={{color: '#4f4b46'}}>Organisational Goal</span></h4>
            <ul>
              <li><i class="bx bx-check-double"></i>Build a unique functional model of the organization that can create
                scalable social impact in national and international levels.</li>
            </ul>
            <h4><span style={{color: '#4f4b46'}}>Community Goal</span></h4>
            <ul>
              <li><i class="bx bx-check-double"></i>To channelise the power of productive youth engagement on various
                fronts to facilitate a ‘Youth-Led development' through community-driven solutions.</li>
            </ul>
              <h3><span style={{color: 'orange'}}>our Mission</span></h3>
              <ul>
                <li><i class="bx bx-check-double"></i> To incubate and celebrate transformative individual ideas through collective effort to
                  build leaders of tomorrow, capable of responding to the new challenges.
                  </li>
                <li><i class="bx bx-check-double"></i>To identify and resolve community-based problems with desirable solutions by joining hands with various stakeholders including industry, academia, civil society and the Government.</li>
                <li><i class="bx bx-check-double"></i> 
                  To engage in quality knowledge generation through research to facilitate informed actions.
                  </li>
                <li><i class="bx bx-check-double"></i> To explore the potential of youth networking within and outside the nation.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>{/* <!-- End About Section --> */}
    </div >
  
  );
}

export default About;