import React from 'react'

export default function checkoutC1() {
  return (
    <div
      className="portfolio-modal modal fade"
      id="portfolioModal5"
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
                  src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6"
                  alt=""
                />
                <p>
                  Escape is a free PSD web template built by{" "}
                  <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>
                  . Escape is a one page web template that was designed with
                  agencies in mind. This template is ideal for those looking for a
                  simple one page solution to describe your business and offer
                  your services.
                </p>
                <p>
                  You can download the PSD template in this portfolio sample item
                  at{" "}
                  <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">
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