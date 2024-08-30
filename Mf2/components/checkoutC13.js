import React from 'react'

export default function checkoutC1() {
  return (
    <div
    className="portfolio-modal modal fade"
    id="portfolioModal6"
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
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                alt=""
              />
              <p>
                Dreams is a free PSD web template built by{" "}
                <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>
                . Dreams is a modern one page web template designed for almost
                any purpose. It’s a beautiful template that’s designed with the
                Bootstrap framework in mind.
              </p>
              <p>
                You can download the PSD template in this portfolio sample item
                at{" "}
                <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">
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