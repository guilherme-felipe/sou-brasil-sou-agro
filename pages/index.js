import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import logo from "../public/logo.png";
import header from "../public/header.png";
import produtor from "../public/produtor.jpg";
import ilustracao from "../public/ilustracao.png";
import bandeira from "../public/bandeira.webp";
import icon_ativo from "../public/icons/AdesivoAtivo.png";
import icon_sprout from "../public/icons/sprout.png";
import icon_star from "../public/icons/star.png";
import icon_love from "../public/icons/love.webp";
import parceiro1 from "../public/parceiros/1.png";
import orgulho1 from "../public/orgulho/1.png";
import orgulho2 from "../public/orgulho/2.png";
import orgulho3 from "../public/orgulho/3.png";
import orgulho4 from "../public/orgulho/4.png";
import orgulho5 from "../public/orgulho/5.png";
import orgulho6 from "../public/orgulho/6.png";
import orgulho7 from "../public/orgulho/7.png";

export default function Home() {
  useEffect(() => {
    new Glide(".glide", {
      keyboard: true,
      peek: 50,
      gap: 50,
      perView: 1,
      type: "slider",
    }).mount();

    new Glide(".glideSponsored", {
      keyboard: true,
      peek: 50,
      gap: 50,
      perView: 6,
      type: "slider",
    }).mount();

    new Glide(".glideTestemunial", {
      keyboard: true,
      peek: 50,
      gap: 50,
      perView: 1,
      type: "slider",
    }).mount();

    new Glide(".glideTestemunial2", {
      keyboard: true,
      peek: 50,
      gap: 50,
      perView: 1,
      type: "slider",
    }).mount();
  }, []);

  return (
    <>
      <div className="body-wrapper hs-content-id-49814602325 hs-landing-page hs-page"></div>

      <div data-global-resource-path="@hubspot/session/templates/partials/header.html">
        <header className="header">
          <div className="container-fluid header__dnd--top">
            <div className="row-fluid-wrapper">
              <div className="row-fluid">
                <div
                  className="span12 widget-span widget-type-cell "
                  data-widget-type="cell"
                  data-x="0"
                  data-w="12"
                >
                  <div className="row-fluid-wrapper row-depth-1 row-number-1 dnd-section">
                    <div className="row-fluid ">
                      <div
                        className="span12 widget-span widget-type-custom_widget dnd-module"
                        data-widget-type="custom_widget"
                        data-x="0"
                        data-w="12"
                      >
                        <div
                          id="hs_cos_wrapper_widget_1625161677872"
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <section
                            className="blog-post-listing"
                            id="blog-post-listing--widget_1625161677872"
                          >
                            <div className="blog-post-listing__listing"></div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header__container">
            <div className="header__logo">
              <div
                id="hs_cos_wrapper_header_logo"
                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-logo"
                data-hs-cos-general-type="widget"
                data-hs-cos-type="module"
              >
                <span
                  id="hs_cos_wrapper_header_logo_hs_logo_widget"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="logo"
                >
                  <a
                    href="//www.soubrasilsouagro.com.br/"
                    id="hs-link-header_logo_hs_logo_widget"
                    style={{ borderWidth: 0, border: 0 }}
                  >
                    <Image
                      src={logo}
                      className="logo"
                      style={{ borderWidth: 0, border: 0, height: 100 }}
                      width="750"
                      height="100%"
                      alt="Sem t??tulo-1"
                      title="Sem t??tulo-1"
                    />
                  </a>
                </span>
              </div>
            </div>

            <div className="header__menu">
              <input type="checkbox" id="nav-toggle" />
              <label className="header__navigation-toggle" htmlFor="nav-toggle">
                <span className="header__mobile-menu-open-icon">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="24"
                    aria-labelledby="bars1"
                  >
                    <title id="bars1">Open main menu</title>
                    <g id="layer1">
                      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </g>
                  </svg>
                </span>
                <span className="header__mobile-menu-close-icon">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="24"
                    aria-labelledby="times2"
                  >
                    <title id="times2">Close main menu</title>
                    <g id="layer1">
                      <path d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
                    </g>
                  </svg>
                </span>
              </label>
              <div className="header__navigation">
                <div
                  id="hs_cos_wrapper_header_navigation_primary"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <nav aria-label="Main menu" className="navigation-primary">
                    <ul className="submenu level-1"></ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="row-fluid-wrapper">
            <div className="row-fluid">
              <div
                className="span12 widget-span widget-type-cell "
                data-widget-type="cell"
                data-x="0"
                data-w="12"
              >
                <div className="row-fluid-wrapper row-depth-1 row-number-1 dnd-section">
                  <div className="row-fluid ">
                    <div
                      className="span12 widget-span widget-type-custom_widget dnd-module"
                      data-widget-type="custom_widget"
                      data-x="0"
                      data-w="12"
                    >
                      <div
                        id="hs_cos_wrapper_widget_1625161671702"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="module"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="body-container-wrapper">
        <div className="container-fluid body-container body-container--home-page">
          <div className="row-fluid-wrapper">
            <div className="row-fluid">
              <div
                className="span12 widget-span widget-type-cell "
                data-widget-type="cell"
                data-x="0"
                data-w="12"
              >
                <div className="row-fluid-wrapper row-depth-1 row-number-1 dnd_area-row-0-vertical-alignment dnd_area-row-0-force-full-width-section dnd-section dnd_area-row-0-padding dnd_area-row-0-background-image">
                  <div className="row-fluid ">
                    <div
                      className="span6 widget-span widget-type-cell dnd_area-column-1-padding dnd-column dnd_area-column-1-vertical-alignment"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="6"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-2 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget widget_1625434967192-flexbox-positioning dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_widget_1625434967192"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_widget_1625434967192_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="linked_image"
                              >
                                <Image
                                  src={header}
                                  className="hs-image-widget "
                                  style={{ maxWidth: "100%", height: "auto" }}
                                  alt="Logo - Branco + GD"
                                  title="Logo - Branco + GD"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row-fluid-wrapper row-depth-1 row-number-3 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd_area-module-2-hidden dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-2"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-2_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <div style={{ textAlign: "center" }}>
                                  <p style={{ color: "#fff" }}>
                                    Uma campanha da Gr??o Direto para refor??ar o
                                    orgulho do agroneg??cio brasileiro.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="span6 widget-span widget-type-cell cell_1625073795342-padding cell_1625073795342-vertical-alignment dnd-column cell_1625073795342-margin"
                      data-widget-type="cell"
                      data-x="6"
                      data-w="6"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module widget_1625582970736-hidden"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_widget_1625582970736"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              {/*<hr
                                style="
  width: 1%;
  border: 0 none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 1.0);
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
"
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-5 dnd_area-row-1-padding dnd_area-row-1-vertical-alignment dnd_area-row-1-max-width-section-centering dnd-section">
                  <div className="row-fluid ">
                    <div
                      className="span7 widget-span widget-type-cell dnd_area-column-4-vertical-alignment dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="7"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-5"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-5_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <h2>
                                  <span style={{ color: "#444444" }}>
                                    O produtor rural ?? o orgulho do Brasil!
                                  </span>
                                </h2>
                                <p style={{ fontWeight: "normal" }}>
                                  O produtor rural passa por v??rios desafios
                                  todos os dias. Neste momento, estamos passando
                                  por uma safrinha desafiadora. Essa campanha
                                  tem foco em mostrar a ra??a do produtor rural,
                                  que supera todos os desafios com garra,
                                  carregando no peito o orgulho e a for??a do
                                  agroneg??cio no Brasil!
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="span5 widget-span widget-type-cell dnd_area-column-7-vertical-alignment dnd-column"
                      data-widget-type="cell"
                      data-x="7"
                      data-w="5"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-7 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd_area-module-8-flexbox-positioning dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-8"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-8_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="linked_image"
                              >
                                <Image
                                  src={produtor}
                                  className="hs-image-widget "
                                  width="900"
                                  height="600"
                                  style={{ maxWidth: "100%", height: "auto" }}
                                  alt="Produtor+Frase-2"
                                  title="Produtor+Frase-2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-8 dnd_area-row-2-force-full-width-section dnd_area-row-2-padding dnd_area-row-2-background-color dnd-section dnd_area-row-2-vertical-alignment">
                  <div className="row-fluid ">
                    <div
                      className="span4 widget-span widget-type-cell cell_16254365198163-vertical-alignment dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="4"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-9 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module module_16254365198167-flexbox-positioning"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_module_16254365198167"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_module_16254365198167_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="linked_image"
                              >
                                <Image
                                  src={ilustracao}
                                  className="hs-image-widget "
                                  style={{ maxWidth: "100%", height: "auto" }}
                                  alt="AdesivoAtivo 3@3x"
                                  title="AdesivoAtivo 3@3x"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="span8 widget-span widget-type-cell cell_16254365198162-vertical-alignment dnd-column"
                      data-widget-type="cell"
                      data-x="4"
                      data-w="8"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-10 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_module_16254365198165"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_module_16254365198165_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <h2
                                  style={{ fontWeight: "bold", fontSize: 32 }}
                                >
                                  <span style={{ color: "#eeeeee" }}>
                                    O agroneg??cio no Brasil em destaque!
                                  </span>
                                </h2>
                                <p style={{ fontWeight: "normal" }}>
                                  <span style={{ color: "#eeeeee" }}>
                                    A campanha Sou Brasil, Sou Agro veio para
                                    refor??ar que o agroneg??cio brasileiro tem
                                    for??a, orgulho e ?? importante para a
                                    popula????o, economia e toda a sociedade. O
                                    destaque ?? a bandeira do Brasil, refor??ando
                                    que al??m de orgulho em ser do agro, tamb??m
                                    temos orgulho em sermos brasileiros!
                                  </span>
                                </p>
                                <h2
                                  style={{ fontSize: 32, fontWeight: "bold" }}
                                >
                                  <span style={{ color: "#eeeeee" }}>
                                    Sem foco pol??tico
                                  </span>
                                </h2>
                                <p style={{ fontWeight: "normal" }}>
                                  <span style={{ color: "#eeeeee" }}>
                                    Refor??amos que a campanha{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      Sou Brasil, Sou Agro
                                    </span>{" "}
                                    n??o tem rela????o alguma com o atual cen??rio
                                    pol??tico no Brasil. Esta campanha tem o
                                    objetivo apenas demostrar a import??ncia e
                                    orgulho que temos da agricultura. N??o nos
                                    responsabilizamos ou apoiamos qualquer uso
                                    de elementos da campanha com o objetivo
                                    pol??tico.
                                  </span>
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-11 dnd-section dnd_area-row-3-padding dnd_area-row-3-background-color">
                  <div className="row-fluid ">
                    <div
                      className="span12 widget-span widget-type-cell dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="12"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-12 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-10"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-10_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <div style={{ textAlign: "center" }}>
                                  <h4>Our Features</h4>
                                  <h2>
                                    <span style={{ color: "#444444" }}>
                                      Por que aderir ?? campanha?
                                    </span>
                                  </h2>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row-fluid-wrapper row-depth-1 row-number-13 dnd_area-column-9-row-1-vertical-alignment dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span4 widget-span widget-type-cell dnd_area-column-11-margin dnd-column dnd_area-column-11-vertical-alignment"
                            data-widget-type="cell"
                            data-x="0"
                            data-w="4"
                          >
                            <div className="row-fluid-wrapper row-depth-1 row-number-14 dnd-row">
                              <div className="row-fluid ">
                                <div
                                  className="span12 widget-span widget-type-custom_widget dnd-module"
                                  data-widget-type="custom_widget"
                                  data-x="0"
                                  data-w="12"
                                >
                                  <div
                                    id="hs_cos_wrapper_widget_1625071950662"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-gallery"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="module"
                                  >
                                    <span
                                      id="hs_cos_wrapper_widget_1625071950662_Gallery"
                                      className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_gallery"
                                      data-hs-cos-general-type="widget"
                                      data-hs-cos-type="gallery"
                                    >
                                      <div
                                        id="hs_cos_gallery_widget_1625071950662_Gallery"
                                        className="hs_cos_gallery lt-ie9"
                                      >
                                        <div
                                          id="hs_cos_gallery_widget_1625071950662_Gallery"
                                          className="hs_cos_gallery"
                                        >
                                          <div className="hs_cos_gallery_main slick-fixed-height-slider slick-initialized slick-slider">
                                            <div
                                              aria-live="polite"
                                              className="slick-list draggable"
                                            >
                                              <div
                                                className="slick-track"
                                                role="listbox"
                                                style={{
                                                  opacity: 1,
                                                  width: 298,
                                                }}
                                              >
                                                <div
                                                  className="hs_cos_gallery_slide slick-slide slick-current slick-active"
                                                  data-slick-index="0"
                                                  aria-hidden="false"
                                                  tabIndex="-1"
                                                  role="option"
                                                  aria-describedby="slick-slide00"
                                                  style={{ width: 298 }}
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row-fluid-wrapper row-depth-1 row-number-15 dnd-row">
                              <div className="row-fluid ">
                                <div
                                  className="span12 widget-span widget-type-custom_widget dnd-module"
                                  data-widget-type="custom_widget"
                                  data-x="0"
                                  data-w="12"
                                >
                                  <div
                                    id="hs_cos_wrapper_dnd_area-module-12"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="module"
                                  >
                                    <span
                                      id="hs_cos_wrapper_dnd_area-module-12_"
                                      className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                      data-hs-cos-general-type="widget"
                                      data-hs-cos-type="linked_image"
                                    >
                                      <Image
                                        src={bandeira}
                                        className="hs-image-widget "
                                        width="813"
                                        height="963"
                                        style={{
                                          maxWidth: "100%",
                                          height: "auto",
                                        }}
                                        alt="Bandeira"
                                        title="Bandeira"
                                        loading="lazy"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="span8 widget-span widget-type-cell dnd_area-column-13-vertical-alignment dnd-column"
                            data-widget-type="cell"
                            data-x="4"
                            data-w="8"
                          >
                            <div className="row-fluid-wrapper row-depth-1 row-number-16 dnd-row">
                              <div className="row-fluid ">
                                <div
                                  className="span6 widget-span widget-type-cell dnd-column"
                                  data-widget-type="cell"
                                  data-x="0"
                                  data-w="6"
                                >
                                  <div className="row-fluid-wrapper row-depth-2 row-number-1 dnd-row dnd_area-column-14-row-0-margin">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-15"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-15_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="linked_image"
                                          >
                                            <Image
                                              src={icon_love}
                                              className="hs-image-widget "
                                              width="49"
                                              height="49"
                                              style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                              }}
                                              alt="love"
                                              title="love"
                                              loading="lazy"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row-fluid-wrapper row-depth-2 row-number-2 dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-16"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-16_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="rich_text"
                                          >
                                            <h5>
                                              Demonstre seu amor ao agroneg??cio
                                            </h5>
                                            <p>
                                              Mostre que voc?? tem amor pela
                                              agricultura do Brasil!
                                            </p>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="span6 widget-span widget-type-cell dnd-column"
                                  data-widget-type="cell"
                                  data-x="6"
                                  data-w="6"
                                >
                                  <div className="row-fluid-wrapper row-depth-2 row-number-3 dnd_area-column-17-row-0-margin dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-18"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-18_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="linked_image"
                                          >
                                            <Image
                                              src={icon_sprout}
                                              className="hs-image-widget "
                                              width="49"
                                              height="49"
                                              style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                              }}
                                              alt="sprout"
                                              title="sprout"
                                              loading="lazy"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row-fluid-wrapper row-depth-2 row-number-4 dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-19"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-19_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="rich_text"
                                          >
                                            <h5>
                                              D?? for??a para a agricultura
                                              brasileira
                                            </h5>
                                            <p>
                                              Agro ?? desafio. Agro ?? supera????o!
                                              D?? for??a aos produtores rurais!
                                            </p>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row-fluid-wrapper row-depth-1 row-number-1 dnd-row">
                              <div className="row-fluid ">
                                <div
                                  className="span6 widget-span widget-type-cell dnd-column"
                                  data-widget-type="cell"
                                  data-x="0"
                                  data-w="6"
                                >
                                  <div className="row-fluid-wrapper row-depth-2 row-number-1 dnd_area-column-20-row-0-margin dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-21"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-21_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="linked_image"
                                          >
                                            <Image
                                              src={icon_star}
                                              className="hs-image-widget "
                                              width="49"
                                              height="49"
                                              style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                              }}
                                              alt="star"
                                              title="star"
                                              loading="lazy"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row-fluid-wrapper row-depth-2 row-number-2 dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-22"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-22_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="rich_text"
                                          >
                                            <h5>
                                              Mostre a import??ncia do
                                              agroneg??cio
                                            </h5>
                                            <p>
                                              O agro ?? um dos motores da
                                              economia brasileira.&nbsp;
                                            </p>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="span6 widget-span widget-type-cell dnd-column"
                                  data-widget-type="cell"
                                  data-x="6"
                                  data-w="6"
                                >
                                  <div className="row-fluid-wrapper row-depth-2 row-number-3 dnd_area-column-23-row-0-margin dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-24"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-24_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="linked_image"
                                          >
                                            <Image
                                              src={icon_ativo}
                                              className="hs-image-widget "
                                              width="52"
                                              height="57"
                                              style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                              }}
                                              alt="AdesivoAtivo 1@3x"
                                              title="AdesivoAtivo 1@3x"
                                              loading="lazy"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row-fluid-wrapper row-depth-2 row-number-4 dnd-row">
                                    <div className="row-fluid ">
                                      <div
                                        className="span12 widget-span widget-type-custom_widget dnd-module"
                                        data-widget-type="custom_widget"
                                        data-x="0"
                                        data-w="12"
                                      >
                                        <div
                                          id="hs_cos_wrapper_dnd_area-module-25"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="module"
                                        >
                                          <span
                                            id="hs_cos_wrapper_dnd_area-module-25_"
                                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                            data-hs-cos-general-type="widget"
                                            data-hs-cos-type="rich_text"
                                          >
                                            <h5>Tenha orgulho em ser agro!</h5>
                                            <p>
                                              O Brasil ?? forte. O agro ?? forte.
                                              O Brasil ?? Agro!
                                            </p>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-1 dnd-section dnd_area-row-4-force-full-width-section dnd_area-row-4-background-color dnd_area-row-4-padding dnd_area-row-4-vertical-alignment">
                  <div className="row-fluid ">
                    <div
                      className="span4 widget-span widget-type-cell cell_16255914907372-vertical-alignment dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="4"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-2 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget module_16255914907375-flexbox-positioning dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_module_16255914907375"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_module_16255914907375_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="linked_image"
                              >
                                <Image
                                  src={ilustracao}
                                  className="hs-image-widget "
                                  style={{ maxWidth: "100%", height: "auto" }}
                                  alt="AdesivoAtivo 3@3x"
                                  title="AdesivoAtivo 3@3x"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="span8 widget-span widget-type-cell cell_16255914907373-vertical-alignment dnd-column"
                      data-widget-type="cell"
                      data-x="4"
                      data-w="8"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-3 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_module_16255914907382"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_module_16255914907382_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <h2
                                  style={{ fontWeight: "bold", fontSize: 32 }}
                                >
                                  <span style={{ color: "#eeeeee" }}>
                                    Como participar da campanha?
                                  </span>
                                </h2>
                                <p style={{ fontWeight: "normal" }}>
                                  <span style={{ color: "#eeeeee" }}>
                                    Participar da campanha Sou Brasil, Sou Agro
                                    ?? s?? voc?? mostrar seu orgulho pelo
                                    agroneg??cio de alguma forma. Seja
                                    valorizando o agroneg??cio, mostrando sua
                                    import??ncia para o mundo. Poste uma foto
                                    mostrando seu orgulho e use a hashtag{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      #soubrasilsouagro{" "}
                                    </span>
                                    <span style={{ fontWeight: "normal" }}>
                                      mun
                                    </span>
                                  </span>
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-4 dnd-section">
                  <div className="row-fluid ">
                    <div
                      className="span12 widget-span widget-type-cell dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="12"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-5 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_module_1625590145525"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_module_1625590145525_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <div style={{ textAlign: "center" }}>
                                  <h2>
                                    <span style={{ color: "#444444" }}>
                                      #soubrasilsouagro
                                    </span>
                                  </h2>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-6 dnd-section">
                  <div className="row-fluid ">
                    <div
                      className="span12 widget-span widget-type-cell dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="12"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-7 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_widget_1625486872748"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <div className="social-links">
                                <a
                                  href="https://www.facebook.com"
                                  className="social-links__link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span
                                    id="hs_cos_wrapper_widget_1625486872748_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="icon"
                                  >
                                    <svg
                                      version="1.0"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 264 512"
                                      aria-labelledby="facebook-f1"
                                    >
                                      <title id="facebook-f1">
                                        Follow us on Facebook
                                      </title>
                                      <g id="layer1">
                                        <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                      </g>
                                    </svg>
                                  </span>
                                </a>

                                <a
                                  href="https://www.linkedin.com"
                                  className="social-links__link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span
                                    id="hs_cos_wrapper_widget_1625486872748_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="icon"
                                  >
                                    <svg
                                      version="1.0"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      aria-labelledby="linkedin-in2"
                                    >
                                      <title id="linkedin-in2">
                                        Follow us on LinkedIn
                                      </title>
                                      <g id="layer1">
                                        <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                </a>

                                <a
                                  href="https://www.twitter.com"
                                  className="social-links__link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span
                                    id="hs_cos_wrapper_widget_1625486872748_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="icon"
                                  >
                                    <svg
                                      version="1.0"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      aria-labelledby="twitter3"
                                    >
                                      <title id="twitter3">
                                        Follow us on Twitter
                                      </title>
                                      <g id="layer1">
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                </a>

                                <a
                                  href="https://www.instagram.com"
                                  className="social-links__link"
                                >
                                  <span
                                    id="hs_cos_wrapper_widget_1625486872748_"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="icon"
                                  >
                                    <svg
                                      version="1.0"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      aria-labelledby="instagram4"
                                    >
                                      <title id="instagram4">
                                        Follow us on Instagram
                                      </title>
                                      <g id="layer1">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                      </g>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row-fluid-wrapper row-depth-1 row-number-8 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-27"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <section
                                className="blog-post-listing"
                                id="blog-post-listing--dnd_area-module-27"
                              >
                                <div className="blog-post-listing__listing"></div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-9 dnd_area-row-7-background-color dnd-section">
                  <div className="row-fluid ">
                    <div
                      className="span8 widget-span widget-type-cell dnd_area-column-28-margin dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="8"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-10 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-29"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-29_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <h2>
                                  <span style={{ color: "#444444" }}>
                                    Quer mostrar seu orgulho pelo agroneg??cio
                                    brasileiro?
                                  </span>
                                </h2>
                                <p style={{ fontWeight: "normal" }}>
                                  <span style={{ color: "#444444" }}>
                                    A venda dos produtos da campanha{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      Sou Brasil, Sou Agro
                                    </span>{" "}
                                    s??o sens fins lucrativos. Todos os produtos
                                    s??o vendidos a pre??o de custo. O objetivo da
                                    campanha ?? apenas espalhar o orgulho do
                                    agroneg??cio para os 4 cantos do brasil!
                                  </span>
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row-fluid-wrapper row-depth-1 row-number-11 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-30"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <a
                                href="//www.hubspot.com"
                                className="button button--large"
                                id="button_dnd_area-module-30"
                                rel=""
                              >
                                Quero comprar
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="span4 widget-span widget-type-cell dnd-column"
                      data-widget-type="cell"
                      data-x="8"
                      data-w="4"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-12 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_widget_1625071971524"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-gallery"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_widget_1625071971524_Gallery"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_gallery"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="gallery"
                              >
                                <div
                                  id="hs_cos_gallery_widget_1625071971524_Gallery"
                                  className="hs_cos_gallery lt-ie9"
                                >
                                  <div
                                    id="hs_cos_gallery_widget_1625071971524_Gallery"
                                    className="hs_cos_gallery"
                                  >
                                    <div
                                      className="hs_cos_gallery_main slick-fixed-height-slider slick-initialized slick-slider"
                                      role="toolbar"
                                    >
                                      <div
                                        aria-live="polite"
                                        className="slick-list draggable glide"
                                      >
                                        <div
                                          className="slick-track glide__track"
                                          data-glide-el="track"
                                          role="listbox"
                                          style={{
                                            opacity: 1,
                                            width: 2799,
                                          }}
                                        >
                                          <ul
                                            className="glide__slides"
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                              padding: "24px 0px",
                                            }}
                                          >
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho1}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho2}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho3}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho4}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho5}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho6}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                            <div className="slick-slide-inner-wrapper">
                                              <Image
                                                src={orgulho7}
                                                alt="7"
                                                title="7"
                                                className=""
                                                style="opacity: 1;"
                                              />
                                            </div>
                                          </ul>
                                        </div>
                                        <div
                                          className="glide__bullets"
                                          data-glide-el="controls[nav]"
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=0`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=1`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=2`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=3`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=4`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=5`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                          <button
                                            className="glide__bullet btn"
                                            data-glide-dir={`=6`}
                                            style={{
                                              margin: "0 8px",
                                              backgroundColor: "#B8860B",
                                            }}
                                          ></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-13 dnd-section dnd_area-row-8-background-color">
                  <div className="row-fluid ">
                    <div
                      className="span12 widget-span widget-type-cell dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="12"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-14 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-34"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-34_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <div style={{ textAlign: "center" }}>
                                  <h2>
                                    <span>Quem mais apoia essa campanha</span>
                                  </h2>
                                  <h4>
                                    <span>
                                      Senar/ Emater (pedro)/ Esalqtec/ Agtech
                                      Garage/ Minist??rio da Agricultura / Epamig
                                    </span>
                                  </h4>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row-fluid-wrapper row-depth-1 row-number-15 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-cell dnd-column"
                            data-widget-type="cell"
                            data-x="0"
                            data-w="12"
                          >
                            <div className="row-fluid-wrapper row-depth-1 row-number-16 cell_1625486654753-row-0-padding dnd-row">
                              <div className="row-fluid ">
                                <div
                                  className="span12 widget-span widget-type-custom_widget dnd-module"
                                  data-widget-type="custom_widget"
                                  data-x="0"
                                  data-w="12"
                                >
                                  <div
                                    id="hs_cos_wrapper_module_1625486654754"
                                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-gallery"
                                    data-hs-cos-general-type="widget"
                                    data-hs-cos-type="module"
                                  >
                                    <span
                                      id="hs_cos_wrapper_module_1625486654754_Gallery"
                                      className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_gallery"
                                      data-hs-cos-general-type="widget"
                                      data-hs-cos-type="gallery"
                                    >
                                      <div
                                        id="hs_cos_gallery_module_1625486654754_Gallery"
                                        className="hs_cos_gallery lt-ie9"
                                      >
                                        <div
                                          id="hs_cos_gallery_module_1625486654754_Gallery"
                                          className="hs_cos_gallery"
                                        >
                                          <div className="hs_cos_gallery_main slick-fixed-height-slider slick-initialized slick-slider">
                                            <div
                                              aria-live="polite"
                                              className="slick-list draggable"
                                            >
                                              <div
                                                className="slick-track glideSponsored"
                                                role="listbox"
                                                style={{
                                                  opacity: 1,
                                                  width: 5800,
                                                }}
                                              >
                                                <div
                                                  className="hs_cos_gallery_slide slick-slide slick-cloned glide__track"
                                                  data-glide-el="track"
                                                  data-slick-index="-1"
                                                  aria-hidden="true"
                                                  tabIndex="-1"
                                                  style={{ width: 1160 }}
                                                >
                                                  <ul
                                                    className="glide__slides"
                                                    style={{
                                                      display: "flex",
                                                      justifyContent: "center",
                                                      padding: "24px 0px",
                                                    }}
                                                  >
                                                    <Image
                                                      src={parceiro1}
                                                      alt="AdesivoAtivo 1@3x-1"
                                                      title="AdesivoAtivo 1@3x-1"
                                                      style="opacity: 1;"
                                                    />
                                                    <Image
                                                      src={parceiro1}
                                                      alt="AdesivoAtivo 1@3x-1"
                                                      title="AdesivoAtivo 1@3x-1"
                                                      style="opacity: 1;"
                                                    />
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div
                          aria-live="testemunial"
                          className="row-fluid slick-list draggable glideTestemunial"
                        >
                          <div
                            className="slick-track glide__track"
                            data-glide-el="track"
                            role="listbox"
                            style={{
                              opacity: 1,
                              width: 2799,
                            }}
                          >
                            <ul
                              className="glide__slides"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "24px 0px",
                              }}
                            >
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                            </ul>
                          </div>
                          <div
                            className="glide__bullets"
                            data-glide-el="controls[nav]"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=0`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=1`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=2`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=3`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=4`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=5`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=6`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-fluid-wrapper row-depth-1 row-number-18 dnd-section">
                  <div className="row-fluid ">
                    <div
                      className="span12 widget-span widget-type-cell dnd-column"
                      data-widget-type="cell"
                      data-x="0"
                      data-w="12"
                    >
                      <div className="row-fluid-wrapper row-depth-1 row-number-19 dnd-row">
                        <div className="row-fluid ">
                          <div
                            className="span12 widget-span widget-type-custom_widget dnd-module"
                            data-widget-type="custom_widget"
                            data-x="0"
                            data-w="12"
                          >
                            <div
                              id="hs_cos_wrapper_dnd_area-module-51"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="module"
                            >
                              <span
                                id="hs_cos_wrapper_dnd_area-module-51_"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="rich_text"
                              >
                                <div style={{ textAlign: "center" }}>
                                  <h2>Depoimentos</h2>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div
                          aria-live="testemunial"
                          className="row-fluid slick-list draggable glideTestemunial2"
                        >
                          <div
                            className="slick-track glide__track"
                            data-glide-el="track"
                            role="listbox"
                            style={{
                              opacity: 1,
                              width: 2799,
                            }}
                          >
                            <ul
                              className="glide__slides"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "24px 0px",
                              }}
                            >
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                              <div className="testimonial">
                                <blockquote className="testimonial__content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation
                                  <cite className="testimonial__author__name">
                                    Lori Hahn
                                  </cite>
                                </blockquote>
                              </div>
                            </ul>
                          </div>
                          <div
                            className="glide__bullets"
                            data-glide-el="controls[nav]"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=0`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=1`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=2`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=3`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=4`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=5`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                            <button
                              className="glide__bullet btn"
                              data-glide-dir={`=6`}
                              style={{
                                margin: "0 8px",
                                backgroundColor: "#B8860B",
                              }}
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div data-global-resource-path="@hubspot/session/templates/partials/footer.html">
        <footer className="footer footer--site-page">
          <div className="footer__container footer__container--static">
            <div className="footer__row footer__row--one">
              <div className="footer__navigation">
                <div
                  id="hs_cos_wrapper_footer_menu_header_one"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-header"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_menu_header_one_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_header"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="header"
                  >
                    <h4>About</h4>
                  </span>
                </div>
                <div
                  id="hs_cos_wrapper_footer_menu_one"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-simple_menu"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_menu_one_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="simple_menu"
                  >
                    <div
                      id="hs_menu_wrapper_footer_menu_one_"
                      className="hs-menu-wrapper active-branch flyouts hs-menu-flow-vertical"
                      role="navigation"
                      data-sitemap-name=""
                      data-menu-id=""
                      aria-label="Navigation Menu"
                    >
                      <ul role="menu">
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item One
                          </a>
                        </li>
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item Two
                          </a>
                        </li>
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item Three
                          </a>
                        </li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>

              <div className="footer__navigation">
                <div
                  id="hs_cos_wrapper_footer_menu_header_two"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-header"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_menu_header_two_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_header"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="header"
                  >
                    <h4>Services</h4>
                  </span>
                </div>
                <div
                  id="hs_cos_wrapper_footer_menu_two"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-simple_menu"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_menu_two_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="simple_menu"
                  >
                    <div
                      id="hs_menu_wrapper_footer_menu_two_"
                      className="hs-menu-wrapper active-branch flyouts hs-menu-flow-vertical"
                      role="navigation"
                      data-sitemap-name=""
                      data-menu-id=""
                      aria-label="Navigation Menu"
                    >
                      <ul role="menu">
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item One
                          </a>
                        </li>
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item Two
                          </a>
                        </li>
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item Three
                          </a>
                        </li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>

              <div className="footer__navigation">
                <div
                  id="hs_cos_wrapper_footer_menu_header_three"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-header"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_menu_header_three_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_header"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="header"
                  >
                    <h4>News</h4>
                  </span>
                </div>
                <div
                  id="hs_cos_wrapper_footer_menu_three"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-simple_menu"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_menu_three_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="simple_menu"
                  >
                    <div
                      id="hs_menu_wrapper_footer_menu_three_"
                      className="hs-menu-wrapper active-branch flyouts hs-menu-flow-vertical"
                      role="navigation"
                      data-sitemap-name=""
                      data-menu-id=""
                      aria-label="Navigation Menu"
                    >
                      <ul role="menu">
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item One
                          </a>
                        </li>
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item Two
                          </a>
                        </li>
                        <li
                          className="hs-menu-item hs-menu-depth-1"
                          role="none"
                        >
                          <a href="#" role="menuitem" target="_self">
                            Menu Item Three
                          </a>
                        </li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>

              <div className="footer__form">
                <div
                  id="hs_cos_wrapper_footer_form"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-form"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <span
                    id="hs_cos_wrapper_footer_form_"
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_form"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="form"
                  ></span>
                </div>
              </div>
            </div>

            <div className="footer__row footer__row--two">
              <div className="footer__follow-me">
                <div
                  id="hs_cos_wrapper_footer__follow-me"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <div className="social-links">
                    <a href="" className="social-links__link">
                      <span
                        id="hs_cos_wrapper_footer__follow-me_"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="icon"
                      >
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 264 512"
                          aria-labelledby="facebook-f1"
                        >
                          <title id="facebook-f1">Follow us on Facebook</title>
                          <g id="layer1">
                            <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                          </g>
                        </svg>
                      </span>
                    </a>

                    <a href="" className="social-links__link">
                      <span
                        id="hs_cos_wrapper_footer__follow-me_"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="icon"
                      >
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          aria-labelledby="linkedin-in2"
                        >
                          <title id="linkedin-in2">Follow us on LinkedIn</title>
                          <g id="layer1">
                            <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                          </g>
                        </svg>
                      </span>
                    </a>

                    <a href="" className="social-links__link">
                      <span
                        id="hs_cos_wrapper_footer__follow-me_"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="icon"
                      >
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-labelledby="twitter3"
                        >
                          <title id="twitter3">Follow us on Twitter</title>
                          <g id="layer1">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </g>
                        </svg>
                      </span>
                    </a>

                    <a href="" className="social-links__link">
                      <span
                        id="hs_cos_wrapper_footer__follow-me_"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon social-links__icon"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="icon"
                      >
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          aria-labelledby="instagram4"
                        >
                          <title id="instagram4">Follow us on Instagram</title>
                          <g id="layer1">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
