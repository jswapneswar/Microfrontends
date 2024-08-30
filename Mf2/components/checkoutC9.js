import React from 'react'

export default function checkoutC1() {
  return (
    <div
    className="portfolio-modal modal fade"
    id="portfolioModal1"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <img
                className="img-responsive"
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                alt=""
              />
              <p>
                Use this area to describe your project. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Est blanditiis dolorem culpa
                incidunt minus dignissimos deserunt repellat aperiam quasi sunt
                officia expedita beatae cupiditate, maiores repudiandae,
                nostrum, reiciendis facere nemo!
              </p>
              <p>
                <strong>Want these icons in this portfolio item sample?</strong>
                You can download 60 of them for free, courtesy of{" "}
                <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">
                  RoundIcons.com
                </a>
                , or you can purchase the 1500 icon set{" "}
                <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">
                  here
                </a>
                .
              </p>
              <ul className="list-inline">
                <li>Date: July 2014</li>
                <li>Client: Round Icons</li>
                <li>Category: Graphic Design</li>
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                <i className="fa fa-times" /> Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}