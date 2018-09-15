import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
<div>
  <header classname="masthead">
    <div classname="container h-50">
      <div classname="row h-100">
        <div classname="col-lg-7 my-auto">
          <div classname="header-content mx-auto">
            <h1 classname="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
            <a href="/download" classname="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div classname="col-lg-5 my-auto">
          <div classname="device-container">
            <div classname="device-mockup iphone6_plus portrait white">
              <div classname="device">
                <div classname="screen">
                  <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" classname="img-fluid"  alt="app phone" />
                </div>
                <div classname="button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section classname="download bg-primary text-center" id="download">
    <div classname="container">
      <div classname="row">
        <div classname="col-md-8 mx-auto">
          <h2 classname="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
        </div>
      </div>
    </div>
  </section>
</div>

        );
    }
}

export default Home;