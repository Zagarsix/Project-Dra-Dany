import React from 'react';
import { NavLink,Link } from "react-router-dom";

const BlogHome = () => {
return <>
    <main className="flex-shrink-0">
    {/* Page Content*/}
    <section className="py-5">
      <div className="container px-5">
        <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
        <div className="card border-0 shadow rounded-3 overflow-hidden">
          <div className="card-body p-0">
            <div className="row gx-0">
              <div className="col-lg-6 col-xl-5 py-lg-5">
                <div className="p-4 p-md-5">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    News
                  </div>
                  <div className="h2 fw-bolder">Article heading goes here</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique delectus ab doloremque, qui doloribus ea
                    officiis...
                  </p>
                  <NavLink className="stretched-link text-decoration-none" to="#!">
                    Read more
                    <i className="bi bi-arrow-right" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                <div
                  className="bg-featured-blog"
                  style={{
                    backgroundImage:
                      'url("https://dummyimage.com/700x350/343a40/6c757d")'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-light">
      <div className="container px-5">
        <div className="row gx-5">
          <div className="col-xl-8">
            <h2 className="fw-bolder fs-5 mb-4">News</h2>
            {/* News item*/}
            <div className="mb-4">
              <div className="small text-muted">May 12, 2022</div>
              <NavLink className="link-dark" to="#!">
                <h3>
                  Start Bootstrap releases Bootstrap 5 updates for templates and
                  themes
                </h3>
              </NavLink>
            </div>
            {/* News item*/}
            <div className="mb-5">
              <div className="small text-muted">May 5, 2022</div>
              <NavLink className="link-dark" to="#!">
                <h3>Bootstrap 5 has officially landed</h3>
              </NavLink>
            </div>
            {/* News item*/}
            <div className="mb-5">
              <div className="small text-muted">Apr 21, 2022</div>
              <NavLink className="link-dark" to="#!">
                <h3>
                  This is another news article headline, but this one is NavLink
                  little bit longer
                </h3>
              </NavLink>
            </div>
            <div className="text-end mb-5 mb-xl-0">
              <NavLink className="text-decoration-none" to="#!">
                More news
                <i className="bi bi-arrow-right" />
              </NavLink>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card border-0 h-100">
              <div className="card-body p-4">
                <div className="d-flex h-100 align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="h6 fw-bolder">Contact</div>
                    <p className="text-muted mb-4">
                      For press inquiries, email us at
                      <br />
                      <NavLink to="#!">press@domain.com</NavLink>
                    </p>
                    <div className="h6 fw-bolder">Follow us</div>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-twitter" />
                    </NavLink>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-facebook" />
                    </NavLink>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-linkedin" />
                    </NavLink>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-youtube" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog preview section*/}
    <section className="py-5">
      <div className="container px-5">
        <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img
                className="card-img-top"
                src="https://dummyimage.com/600x350/ced4da/6c757d"
                alt="..."
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                  News
                </div>
                <NavLink
                  className="text-decoration-none link-dark stretched-link"
                  to="#!"
                >
                  <div className="h5 card-title mb-3">Blog post title</div>
                </NavLink>
                <p className="card-text mb-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                    />
                    <div className="small">
                      <div className="fw-bold">Kelly Rowan</div>
                      <div className="text-muted">
                        March 12, 2022 · 6 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img
                className="card-img-top"
                src="https://dummyimage.com/600x350/adb5bd/495057"
                alt="..."
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                  Media
                </div>
                <NavLink
                  className="text-decoration-none link-dark stretched-link"
                  to="#!"
                >
                  <div className="h5 card-title mb-3">
                    Another blog post title
                  </div>
                </NavLink>
                <p className="card-text mb-0">
                  This text is NavLink bit longer to illustrate the adaptive height of
                  each card. Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                    />
                    <div className="small">
                      <div className="fw-bold">Josiah Barclay</div>
                      <div className="text-muted">
                        March 23, 2022 · 4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img
                className="card-img-top"
                src="https://dummyimage.com/600x350/6c757d/343a40"
                alt="..."
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                  News
                </div>
                <NavLink
                  className="text-decoration-none link-dark stretched-link"
                  to="#!"
                >
                  <div className="h5 card-title mb-3">
                    The last blog post title is NavLink little bit longer than the
                    others
                  </div>
                </NavLink>
                <p className="card-text mb-0">
                  Some more quick example text to build on the card title and
                  make up the bulk of the card's content.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                    />
                    <div className="small">
                      <div className="fw-bold">Evelyn Martinez</div>
                      <div className="text-muted">
                        April 2, 2022 · 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end mb-5 mb-xl-0">
          <NavLink className="text-decoration-none" to="#!">
            More stories
            <i className="bi bi-arrow-right" />
          </NavLink>
        </div>
      </div>
    </section>
  </main>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</>

}

export default BlogHome;