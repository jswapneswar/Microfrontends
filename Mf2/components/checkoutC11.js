import React from 'react'

export default function checkoutC1() {
  return (
    <div
    className="portfolio-modal modal fade"
    id="portfolioModal4"
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
                className="img-responsive img-centered"
                src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0"
                alt=""
              />
              <p>
                Start Bootstrap's Agency theme is based on Golden, a free PSD
                website template built by{" "}
                <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>
                . Golden is a modern and clean one page web template that was
                made exclusively for Best PSD Freebies. This template has a
                great portfolio, timeline, and meet your team sections that can
                be easily modified to fit your needs.
              </p>
              <p>
                You can download the PSD template in this portfolio sample item
                at{" "}
                <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">
                  FreebiesXpress.com
                </a>
                .
              </p>
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