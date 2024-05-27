import React from 'react';
import { Link } from "react-router-dom";

import fotoDany from "../../img/wallpaper.jpg";
import tapadurasResina from "../../img/tapaduras-de-resina.jpg";
import botox from "../../img/Inyección-de-botox.jpg";
import tuboVale from "../../img/Vale-tubo.jpg";
import iconDP from "../../img/iconDP2.jpg";

const Home = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Header*/}
      <header className="bg-dark py-5">
        <div className="containerDany px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Dra. Dany:<br></br>
                  Odontología y Estética
                </h1>
                <p className="lead fw-bolder text-white mb-4" style={{borderColor:"purple"}}>
                  Nuestra misión es crear sonrisas.
                  Recupera tu sonrisa en una semana.
                  También haz que tu rostro sonría y que tu felicidad sea su mejor regalo.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <Link
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    to="#features"
                  >
                    Agendar Cita
                  </Link>
                  <Link className="btn btn-outline-light btn-lg px-4" to="/odontologia">
                    Conocer más...
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="Dany rounded-3 p-2 m-1"
                src={fotoDany}
                alt="..."
              />
            </div> */}
            {/* Carousel*/}
            <div id="carousel" className="carousel slide col-lg-4 col-xl-5 col-xxl-6 d-xl-block text-center">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to={3}
                  aria-label="Slide 4"
                />
                <button
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide-to={4}
                  aria-label="Slide 5"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={fotoDany} className="Dany rounded-3" alt="mesoterapia: Dra Dany con inyección de vitaminas" />
                  <div className="carousel-caption d-none d-md-block" id="description">
                    <h5>Mesoterapia con dermapen</h5>
                    <p>Inyección de vitaminas, ácido hialurónico y coctéles.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={tapadurasResina} className="Dany rounded-3" alt="tapadura de amalgama v/s tapadura de resina blanca" />
                  <div className="carousel-caption d-none d-md-block" id="description">
                    <h5>Tapaduras blancas</h5>
                    <p>Cambio de amalgama por tapadura de resina, desde $ 40.000</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={botox} className="Dany rounded-3" alt="Dra. Dany aplicando bótox a paciente en la frente" />
                  <div className="carousel-caption d-none d-md-block" id="description">
                    <h5>Aplicación de bótox</h5>
                    <p>Aplicación por zonas desde los $ 90.000</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={tuboVale} className="Dany rounded-3" alt="Niña feliz mientras es atendida" />
                  <div className="carousel-caption d-none d-md-block" id="description">
                    <h5>Odontopediatría</h5>
                    <p>Atención integral para niños desde el primer añito.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={iconDP} className="Dany rounded-3" alt="logo corporativo" />
                  <div className="carousel-caption d-none d-md-block" id="description">
                    <h5>Dra. Dany</h5>
                    {/* <p>Odontología y Estética facial</p> */}
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Features section*/}
      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <i className="fa-solid fa-ranking-star fa-5x mb-2" style={{color:"purple"}}/>
              <h2 className="fw-bolder mb-0" style={{color:"purple"}}>Marcando la diferencia:</h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-collection" />
                  </div>
                  <h2 className="h5 text-white-50"><i className="fa-solid fa-magnifying-glass-chart" /> Diagnóstico integral</h2>
                  <p className="mb-0">
                    Diágnostico realizado con alta precisión, en base a análisis clínico y examen radiológico.<br/>
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/contacto"> Leer más...</Link>
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-building" />
                  </div>
                  <h2 className="h5 text-white-50"><i className="fa-solid fa-hand-holding-dollar" /> Métodos de pago</h2>
                  <p className="mb-0">
                    Tratamientos al alcance de tu presupuesto, con la asesoría de tu odontólogo.<br/>
                    Contamos con todo medio de pago: tarjeta de crédito, transferencia y efectivo.<br/>
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/precios"> Leer más...</Link>
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2" />
                  </div>
                  <h2 className="h5 text-white-50"><i className="fa-solid fa-briefcase-medical" /> Productos de alta gama</h2>
                  <p className="mb-0">
                    Productos de alta calidad con certificación alemana. Elige siempre lo mejor para ti.<br/>
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/estetica-facial"> Leer más...</Link>
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2" />
                  </div>
                  <h2 className="h5 text-white-50"><i className="fa-solid fa-user-doctor" /> Confianza profesional</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the heading.<br/>
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/nuestra-mision"> Leer más...</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section*/}
      <div className="py-5 bg-light">
        <div className="container px-5 my-5 text-white">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">
                  "Working with Start Bootstrap templates has saved me tons of
                  development time when building new projects! Starting with Link
                  Bootstrap template just makes things easier!"
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="rounded-circle me-3"
                    src="https://dummyimage.com/40x40/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="fw-bold">
                    Tom Ato
                    <span className="fw-bold text-primary mx-1">/</span>
                    CEO, Pomodoro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog preview section*/}
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">From our blog</h2>
                <p className="lead fw-normal mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                  fugit ratione dicta mollitia. Officiis ad.
                </p>
              </div>
            </div>
          </div>
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
                  <Link
                    className="text-decoration-none link-dark stretched-link"
                    to="#!"
                  >
                    <h5 className="card-title mb-3">Blog post title</h5>
                  </Link>
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
                  <Link
                    className="text-decoration-none link-dark stretched-link"
                    to="#!"
                  >
                    <h5 className="card-title mb-3">Another blog post title</h5>
                  </Link>
                  <p className="card-text mb-0">
                    This text is Link bit longer to illustrate the adaptive height of
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
                  <Link
                    className="text-decoration-none link-dark stretched-link"
                    to="#!"
                  >
                    <h5 className="card-title mb-3">
                      The last blog post title is Link little bit longer than the
                      others
                    </h5>
                  </Link>
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
          {/* Call to action*/}
          <aside className="bg-gradient rounded-3 p-4 p-sm-5 mt-5">
            <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
              <div className="mb-4 mb-xl-0">
                <div className="fs-3 fw-bold text-white">
                  New products, delivered to you.
                </div>
                <div className="text-white-50">
                  Sign up for our newsletter for the latest updates.
                </div>
              </div>
              <div className="ms-xl-4">
                <div className="input-group mb-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email address..."
                    aria-label="Email address..."
                    aria-describedby="button-newsletter"
                  />
                  <button
                    className="btn btn-outline-light"
                    id="button-newsletter"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
                <div className="small text-white-50">
                  We care about privacy, and will never share your data.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
    {/* Bootstrap core JS*/}
    {/* Core theme JS*/}
  </>
}

export default Home;