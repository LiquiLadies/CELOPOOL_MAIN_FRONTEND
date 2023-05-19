import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>CeloPool</title>
        <meta content="CeloPool" property="og:title" />
        <meta content="CeloPool" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="icon.jpg" rel="shortcut icon" type="image/x-icon" />
        <link href="icon.jpg" rel="apple-touch-icon" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script>
            <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
            
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               '../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-NJSWZX5');
            </script> */}
      </Head>
      <div className="body-dark-blue">
        <div className="page-wrapper">
          <div className="global-el__wrap">
            <div className="global-css">
              <div className="w-embed">{/* Cut styles will be here */}</div>
            </div>
            <div
              data-collapse="medium"
              data-animation="default"
              data-duration="500"
              data-w-id="7dba0d88-d345-440c-0c1d-ab48d809024b"
              data-easing="ease-out"
              data-easing2="ease-out"
              role="banner"
              className="navigation-bar w-nav"
            >
              <div className="nav__horizontal-container">
                <div className="flex items-center">
                  <a
                    href="index.html"
                    className="nav-logo text-3xl font-semibold font-mono"
                  >
                    CeloPool
                  </a>
                </div>
                <div className="nav__links-wrp">
                  <nav role="navigation" className="nav__menu w-nav-menu">
                    <div className="nav__menu__container">
                    <a
                        href="https://celopool-dex-frontend-ajbwvr6ni-celopool.vercel.app/"
                        target="_blank"
                        className="nav__link nav-bar__link"
                      >
                        DEX
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="nav__link nav-bar__link"
                      >
                        STAKE
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="nav__link nav-bar__link"
                      >
                        BOND
                      </a>
                      <a href="#" className="nav__link nav-bar__link">
                        Flex loans
                      </a>
                      {/* <a
                        href="#"
                        aria-current="page"
                        className="nav__link nav-bar__link w--current"
                      >
                        Bondii Bond
                      </a> */}
                      <a
                        href="#"
                        target="_blank"
                        className="nav__link nav-bar__link"
                      >
                        FAQ
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="nav__link nav-bar__link"
                      >
                        Vote
                      </a>
                    </div>
                  </nav>
                  <div
                    id="w-node-_7dba0d88-d345-440c-0c1d-ab48d809026e-d8090248"
                    className="nav__menu-btn w-nav-button"
                  >
                    <div className="nav__burger">
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-3"></div>
                    </div>
                  </div>
                  <a
                    href="/market"
                    target="_blank"
                    className="btn-pr w-inline-block"
                  >
                    <div className="btn-text-cont">
                      <div className="btn-text-ghost">Launch App</div>
                      <div className="btn-text">Launch App</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <main className="main-wrapper">
            <div
              data-w-id="0f725b7b-0a5e-484b-e3fa-e7df7a77337e"
              className="s-hero wf-section"
            >
              <div className="vertical-container">
                <div className="horizontal-container">
                  <div className="pro-hero__container">
                    <div
                      id="w-node-b6cd0007-e921-aba8-7f6e-980995e76d16-d3c7e579"
                      className="center__tablet"
                    >
                      <div className="mar-bot-32">
                        <div>
                          <h1
                            data-w-id="b6cd0007-e921-aba8-7f6e-980995e76d19"
                            style={{
                              fontSize: "50px",
                              fontWeight: "bold",
                              lineHeight: "1.25",
                            }}
                          >
                            Bond Marketplace For Protocol Owned Liquidity
                          </h1>
                        </div>
                      </div>

                      <div className="mar-bot-80">
                        <div className="max-width-400">
                          <p
                            data-w-id="b6cd0007-e921-aba8-7f6e-980995e76d1c"
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                              opacity: "1",
                            }}
                          >
                            Introducing CeloPool unique cross-chain bonding
                            mechanism to other protocols as a service
                          </p>
                        </div>
                      </div>

                      <div
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: "1",
                        }}
                        className="btn__horizontal-container"
                      >
                        <a
                          href="#"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="btn-pr dark w-inline-block"
                        >
                          <div className="btn-text-cont">
                            <div className="btn-text-ghost alt">
                              Bonds Marketplace
                            </div>
                            <div className="btn-text">Bonds Marketplace</div>
                          </div>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn-pr alt dark w-inline-block"
                        >
                          <div className="btn-text-cont">
                            <div className="btn-text-ghost">LEARN MORE</div>
                            <div className="btn-text">LEARN MORE</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div
                      id="w-node-b6cd0007-e921-aba8-7f6e-980995e76d21-d3c7e579"
                      style={{ opacity: "1" }}
                      className="eco-hero__animation-wrp"
                    >
                      <div className="c-card overflow-hidden">
                        <div
                          data-poster-url="https://assets.website-files.com/621f51702b01b7fee7ff903a/6228b885b3fc54a4678137cf_Olympus_Portal_Animation_06_TS-poster-00001.jpg"
                          data-video-urls="https://assets.website-files.com/621f51702b01b7fee7ff903a/6228b885b3fc54a4678137cf_Olympus_Portal_Animation_06_TS-transcode.mp4,https://assets.website-files.com/621f51702b01b7fee7ff903a/6228b885b3fc54a4678137cf_Olympus_Portal_Animation_06_TS-transcode.webm"
                          data-autoplay="true"
                          data-loop="true"
                          data-wf-ignore="true"
                          className="pro-hero__bg-video w-background-video w-background-video-atom"
                        >
                          <img className="content-cover" src="celopool.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="s-pro__partners wf-section">
              <div className="vertical-container">
                <div className="horizontal-container">
                  <div className="mar-bot-58">
                    <div className="slide-in">
                      <h2
                        className="t-align-center"
                        style={{
                          fontSize: "50px",
                          fontWeight: "bold",
                          lineHeight: "1.25",
                        }}
                      >
                        CeloPool Partners
                      </h2>
                    </div>
                  </div>
                  <div className="slide-in">
                    <div
                      data-delay="4000"
                      data-animation="slide"
                      className="pro-partners__slider w-slider"
                      data-autoplay="false"
                      data-easing="ease"
                      data-hide-arrows="false"
                      data-disable-swipe="false"
                      data-autoplay-limit="0"
                      data-nav-spacing="3"
                      data-duration="500"
                      data-infinite="true"
                    >
                      <div className="w-slider-mask">
                        <div className="w-slide">
                          <div className="pr-partners__grid">
                            <div id="w-node-d0c714ac-3ae4-776a-6ade-e1027615a28d-d3c7e579">
                              <a
                                href="#"
                                // href="https://barnbridge.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Ubeswap</h3>
                                <img
                                  src="../partners-assets/1.svg"
                                  loading="lazy"
                                  alt="Ubeswap"
                                  width={90}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                // href="https://www.pendle.finance/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Moola Market</h3>
                                <img
                                  src="../partners-assets/2.svg"
                                  loading="lazy"
                                  alt="Moola Market"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Valora</h3>
                                <img
                                  src="../partners-assets/3.png"
                                  loading="lazy"
                                  alt="Valora "
                                  width={20}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                            <div id="w-node-d0c714ac-3ae4-776a-6ade-e1027615a29a-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Impact Market</h3>
                                <img
                                  src="../partners-assets/5.png"
                                  loading="lazy"
                                  alt="Impact Market"
                                  width={50}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Autify Network</h3>
                                <img
                                  src="../partners-assets/6.png"
                                  loading="lazy"
                                  alt="Autify Network"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Plastiks</h3>
                                <img
                                  src="../partners-assets/7.svg"
                                  loading="lazy"
                                  alt="Plastiks"
                                  width={80}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                            <div id="w-node-d0c714ac-3ae4-776a-6ade-e1027615a2a7-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Grameen Foundation</h3>
                                <img
                                  src="../partners-assets/8.svg"
                                  loading="lazy"
                                  alt="Grameen Foundation"
                                  width={70}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Uniswap</h3>
                                <img
                                  src="../partners-assets/9.png"
                                  loading="lazy"
                                  alt="Uniswap"
                                  // width={60}
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                // href="https://www.liquiddriver.finance/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Mercy Corps</h3>
                                <img
                                  src="../partners-assets/10.jpg"
                                  loading="lazy"
                                  alt="Mercy Corps"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                            <div id="w-node-d0c714ac-3ae4-776a-6ade-e1027615a2b4-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Circonomy</h3>
                                <img
                                  src="../partners-assets/11.svg"
                                  loading="lazy"
                                  alt="Circonomy"
                                  width={20}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">CarbonPath</h3>
                                <img
                                  src="../partners-assets/12.jpg"
                                  loading="lazy"
                                  alt="CarbonPath"
                                  width={20}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">OpenC</h3>
                                <img
                                  src="../partners-assets/13.png"
                                  loading="lazy"
                                  alt="OpenC"
                                  width={20}
                                  // className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="pr-partners__grid">
                            <div id="w-node-a2f027d8-d0bf-4c90-c825-a2b540397c8b-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Scream</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2bd582c0844a6375d0d6_scream_logo.svg"
                                  loading="lazy"
                                  alt="Scream"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Everipedia</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2ccdd128c7273339e187_everipedia_logo.svg"
                                  loading="lazy"
                                  alt="Everipedia"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Shapeshift</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2d2edd48a9bc9ab96776_shapeshift_logo.svg"
                                  loading="lazy"
                                  alt="Shapeshift"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                            <div id="w-node-a2f027d8-d0bf-4c90-c825-a2b540397c98-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">SpiritSwap</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2c0b07cec74c2febed8b_spirit_logo.svg"
                                  loading="lazy"
                                  alt="Spiritswap"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">mStable</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2ce407cec720a8ebeea0_mstable_logo.svg"
                                  loading="lazy"
                                  alt="mStable"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Beethoven-x</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2d4361dfcda7595998fd_beethoven_logo.svg"
                                  loading="lazy"
                                  alt="Beethoven"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                            <div id="w-node-a2f027d8-d0bf-4c90-c825-a2b540397ca5-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Bankless</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2c31d128c79fd239db5b_bankless_logo.svg"
                                  loading="lazy"
                                  alt="Bankless"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Gro Protocol</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2d0047b7e270e3efb6ad_gro_logo.svg"
                                  loading="lazy"
                                  alt="GRO"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Hundred Finance</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2d5707cec7bb6eebf1d1_hundred_logo.svg"
                                  loading="lazy"
                                  alt="Hundred"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                            <div id="w-node-a2f027d8-d0bf-4c90-c825-a2b540397cb2-d3c7e579">
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">KeeperDAO</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2caf808016144927bfb3_keepr.svg"
                                  loading="lazy"
                                  alt="Keeper"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                              <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="pr-partners__link w-inline-block"
                              >
                                <h3 className="t-24">Angle Protocol</h3>
                                <img
                                  src="../assets.website-files.com/621f51702b01b7fee7ff903a/624a2d174644a2e1b962995b_angle_logo.svg"
                                  loading="lazy"
                                  alt="Angle"
                                  className="pr-partners__link-icon"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="display-none w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                      </div>
                      <div className="display-none w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                      </div>
                      <div className="pro-partners__slider__nav w-slider-nav w-round"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-pro__solv-problem wf-section">
              <div className="vertical-container">
                <div className="horizontal-container">
                  <div className="pro-solv-problem__container">
                    <div
                      id="w-node-_4b1d8434-bc09-acd1-12af-c97171bb6cd3-d3c7e579"
                      className="slide-in"
                    >
                      <h2
                        style={{
                          fontSize: "50px",
                          fontWeight: "bold",
                          lineHeight: "1.25",
                        }}
                      >
                        The Problem with Existing Yield Farms
                      </h2>
                    </div>
                    <div
                      id="w-node-d7a07ad2-6af0-a457-4367-3fd1090b0f6b-d3c7e579"
                      className="slide-in-3"
                    >
                      <div className="c-card dark-grey">
                        <div className="pro-solve-preoblem__conent">
                          <div className="mar-bot-32">
                            <div className="horizontal-center-space-between">
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/6228d1b9526c84d448970d99_icon.svg"
                                loading="lazy"
                                alt=""
                                className="pro-solve-problem__icon"
                              />
                              <div className="t-align-right">
                                <div className="t-16 text-medium t-br-grey text-all-caps">
                                  — Nansen, Analysis of Masterchef
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mar-bot-80">
                            <div className="pro-solve-problem__divider"></div>
                          </div>
                          <div className="pr-solve-problem__card__grid">
                            <div
                              id="w-node-_0f887184-406b-bd4a-0d15-5982ab4e34c2-d3c7e579"
                              className="div-block-3"
                            >
                              <div className="mar-bot-16 mar-top-auto">
                                <div className="t-16 text-medium text-all-caps">
                                  FIRST
                                  <br />
                                  24 hours
                                </div>
                              </div>
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/6228d01fc8eca94a8c6ebe4d_graph%201%20desktop.svg"
                                loading="lazy"
                                alt=""
                                className="pro-solve-problem__graph1__desk"
                              />
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/6228d4613b80a4d69f763bd9_graph%201%20mobile.svg"
                                loading="lazy"
                                alt=""
                                className="pro-solve-problem__graph1__mob"
                              />
                            </div>
                            <div
                              id="w-node-_629f1a46-cca0-d887-5c13-02dcc2ecbd13-d3c7e579"
                              className="div-block-3"
                            >
                              <div className="mar-bot-16 mar-top-auto">
                                <div className="t-16 text-medium text-all-caps">
                                  Day 3
                                </div>
                              </div>
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/6228d01fa38299712f8afb35_graph%202%20desktop.svg"
                                loading="lazy"
                                alt=""
                                className="pro-solve-problem__graph1__desk"
                              />
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/6228d45f3b80a438b1763bcf_graph%202%20mobile.svg"
                                loading="lazy"
                                alt=""
                                className="pro-solve-problem__graph1__mob"
                              />
                            </div>
                            <div
                              id="w-node-_4f674400-5c19-8b99-c215-f3ac90f1e9ba-d3c7e579"
                              className="div-block-4"
                            >
                              <div className="pr-solve-problem__vert-divider"></div>
                              <div className="mar-bot-8">
                                <h3 className="t-100">58%</h3>
                              </div>
                              <div className="max-width-250">
                                <p>
                                  of yield farmers that enter a farm on the day
                                  it launches remain after 24 hours.
                                </p>
                              </div>
                            </div>
                            <div
                              id="w-node-_915bee22-a1f3-f832-d334-a5ec58594f96-d3c7e579"
                              className="div-block-4"
                            >
                              <div className="pr-solve-problem__vert-divider"></div>
                              <div className="mar-bot-8">
                                <h3 className="t-100">30%</h3>
                              </div>
                              <div className="max-width-200">
                                <p>
                                  30% of the initial users remain after 72
                                  hours.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_74dce01c-9e91-8ab0-5132-2a3a31c9612e-d3c7e579"
                      className="slide-in-6"
                    >
                      <div
                        id="w-node-_373e956a-318a-e362-2ef0-cfcec370d058-d3c7e579"
                        className="pro-solve-problem__features-grid"
                      >
                        <div id="w-node-_17911884-fac0-6d6e-c40e-81ff64f2a011-d3c7e579">
                          <div className="mar-bot-8">
                            <h4 className="inner-headings">Sell Pressure</h4>
                          </div>
                          <div>
                            <p>
                              Token prices are highly subject to sell pressure
                              from the yield farming community, making price
                              unstable.
                            </p>
                          </div>
                        </div>
                        <div id="w-node-_4bf109aa-1e18-c8df-353c-590e71921f13-d3c7e579">
                          <div className="mar-bot-8">
                            <h4 className="inner-headings">
                              Transient Liquidity
                            </h4>
                          </div>
                          <div className="max-width-200">
                            <p>
                              Liquidity in yield farms is highly transient and
                              unreliable for the protocol.
                            </p>
                          </div>
                        </div>
                        <div id="w-node-_8a952a55-ef9c-0b4c-0730-3ece55943afa-d3c7e579">
                          <div className="mar-bot-8">
                            <h4 className="inner-headings">Impermanent Loss</h4>
                          </div>
                          <div>
                            <p>
                              Due to the mechanics of yield farms, the upside
                              when a token appreciates in value is capped due to
                              impermanent loss.
                            </p>
                          </div>
                        </div>
                        <div id="w-node-fa8251bf-8f5b-b85a-3cd5-38063c7b8b4c-d3c7e579">
                          <div className="mar-bot-8">
                            <h4 className="inner-headings">Price Volatility</h4>
                          </div>
                          <div className="max-width-250">
                            <p>
                              Volatile token prices negatively impact
                              communities and cause instability for the
                              protocol.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-pro__about wf-section">
              <div className="vertical-container">
                <div className="horizontal-container">
                  <div className="mar-bot-150">
                    <div className="pro-about__container1">
                      <div
                        id="w-node-fa101fb9-b436-b262-5187-f3a601fc2bb6-d3c7e579"
                        className="max-width-450"
                      >
                        <div className="slide-in">
                          <h2
                            style={{
                              fontSize: "50px",
                              fontWeight: "bold",
                              lineHeight: "1.25",
                            }}
                          >
                            What is CeloPool?
                          </h2>
                        </div>
                      </div>
                      <div
                        id="w-node-c856d35e-e080-44ec-44c3-d5e99564c68f-d3c7e579"
                        className="max-width-650"
                      >
                        <div className="slide-in-3">
                          <p>
                            CeloPool introduces the innovative bonding mechanism
                            of CeloPool as a service for other protocols. CeloPool allows a
                            user to exchange existing liquidity for the
                            protocol’s native token at a discount. In exchange,
                            the protocol owns the liquidity instead of renting
                            it, which helps secure longevity and price stability
                            for everyone involved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="pro-about__container2">
                    <div
                      id="w-node-_9803ec17-9963-aac7-3156-a631cee85549-d3c7e579"
                      className="t-align-center__mobile"
                    >
                      <div className="mar-bot-8">
                        <h3 className="t-36">Community</h3>
                      </div>
                      <p>Swap LPS to receive discounted tokens</p>
                    </div>

                    <div
                      id="w-node-_56233f01-5ecc-a395-d844-b889412b392d-d3c7e579"
                      className="t-align-center"
                    >
                      <div className="mar-bot-80">
                        <h3 className="t-36">A win, win for all</h3>
                      </div>
                    </div>

                    <div
                      id="w-node-_70c4b5c1-61f0-2f76-673e-39e49a5ee851-d3c7e579"
                      className="t-align-right t-align-center__mobile"
                    >
                      <div className="mar-bot-8">
                        <h3 className="t-36">Protocol</h3>
                      </div>
                      <p>Diversified treasuries to protect liquidity</p>
                    </div>
                    <div id="w-node-_7a35d8b5-b28f-4822-136f-2cf3cd696859-d3c7e579">
                      <div className="pro-about__cards-wrp">
                        <div
                          id="w-node-_4029a17b-ec3d-39b0-5bfc-41c2b4689dd4-d3c7e579"
                          className="c-card dark-grey"
                        >
                          <div className="pro-about__card__container">
                            <div className="vertical-center t-align-center">
                              <div className="mar-bot-24">
                                <h4 className="inner-headings">Better Price</h4>
                              </div>
                              <div className="max-width-200">
                                <p>Opportunity to buy discounted tokens</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_3679b728-04ce-caf8-9019-ec2f21f2fe1d-d3c7e579"
                          className="c-card dark-grey"
                        >
                          <div className="pro-about__card__container">
                            <div className="vertical-center t-align-center">
                              <div className="mar-bot-24">
                                <h4 className="inner-headings">Lower Risk</h4>
                              </div>
                              <div className="max-width-200">
                                <p>No exposure to Impermanent loss</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      src="polybond.png"
                      loading="lazy"
                      id="w-node-_2ff62803-3fbf-d238-ab81-4be2465db5cc-d3c7e579"
                      alt=""
                      className="pro-about__graphic-desk"
                    />
                    <img
                      src="nahim tentacles png.png"
                      loading="lazy"
                      id="w-node-_045810da-329b-d018-ffb4-e7d5e19dd1a8-d3c7e579"
                      alt=""
                      className="pro-about__graphic-mob"
                    />

                    <div id="w-node-_4ee4d577-61e2-98bd-5af4-4d346f114087-d3c7e579">
                      <div className="pro-about__cards-wrp">
                        <div
                          id="w-node-_4ee4d577-61e2-98bd-5af4-4d346f114089-d3c7e579"
                          className="c-card dark-grey"
                        >
                          <div className="pro-about__card__container">
                            <div className="vertical-center t-align-center">
                              <div className="mar-bot-24">
                                <h4 className="inner-headings">
                                  Long-Term Liquidity
                                </h4>
                              </div>
                              <div className="max-width-100">
                                <p>Grow your liquidity floor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-_4ee4d577-61e2-98bd-5af4-4d346f114092-d3c7e579"
                          className="c-card dark-grey"
                        >
                          <div className="pro-about__card__container">
                            <div className="vertical-center t-align-center">
                              <div className="mar-bot-24">
                                <h4 className="inner-headings">
                                  New Revenue Streams
                                </h4>
                              </div>
                              <div className="max-width-150">
                                <p>Capture fees from DEX trades</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="s-cta-prefooter wf-section">
              <div className="vertical-container">
                <div className="horizontal-container">
                  <div className="vertical-center">
                    <div className="mar-bot-40">
                      <div className="max-width-550">
                        <div className="slide-in">
                          <h2
                            className="t-align-center"
                            style={{
                              fontSize: "50px",
                              fontWeight: "bold",
                              lineHeight: "1.25",
                            }}
                          >
                            Explore our Bonds Marketplace
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="mar-bot-58">
                      <div className="slide-in">
                        <p className="t-align-center">
                          Bonds give you a superior market rate.
                        </p>
                      </div>
                    </div>
                    <div className="mar-bot-58">
                      <div className="slide-in">
                        <a
                          href="/market"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn-pr dark w-inline-block"
                        >
                          <div className="btn-text-cont">
                            <div className="btn-text-ghost alt">
                              Bonds MARKETPLACE
                            </div>
                            <div className="btn-text">Bonds MARKETPLACE</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="max-width-1300">
                      <div className="slide-in">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="footer-blue wf-section">
            <div className="vertical-container gap-130">
              <div className="horizontal-container mar-bot-58">
                <div className="footer__container">
                  <div id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0df-3639f0d9">
                    <div className="mar-bot-58">
                      <a
                        href="index.html"
                        className="footer__brand w-inline-block text-2xl font-semibold font-mono"
                      >
                        CeloPool
                      </a>
                    </div>
                    <div className="footer__social-links__wrp">
                      <a
                        id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0e4-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/622369b6a395099f1a779d22_1.svg"
                          loading="lazy"
                          alt="twitter"
                          className="footer__social__icon"
                        />
                      </a>
                      <a
                        id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0e6-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/622369b64625dd72cd6e31a1_2.svg"
                          loading="lazy"
                          alt="discord"
                          className="footer__social__icon"
                        />
                      </a>
                      <a
                        id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0e8-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/622369b636f18be6eacf49c4_3.svg"
                          loading="lazy"
                          alt="github"
                          className="footer__social__icon"
                        />
                      </a>
                      <a
                        id="w-node-_4f5f315c-1541-7af3-1da4-e762a6cd0d35-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/624455737d5b01732aaa9a63_7.svg"
                          loading="lazy"
                          alt="instagram"
                          className="footer__social__icon"
                        />
                      </a>
                      <a
                        id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0ea-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/622369b6bf2cca49909d6eb5_4.svg"
                          loading="lazy"
                          alt="telegram"
                          className="footer__social__icon"
                        />
                      </a>
                      <a
                        id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0ec-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/622369b7d8b8d2bb231c33e1_5.svg"
                          loading="lazy"
                          alt="youtube"
                          className="footer__social__icon"
                        />
                      </a>
                      <a
                        id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0ee-3639f0d9"
                        href="#"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="footer__social-link w-inline-block"
                      >
                        <img
                          src="../assets.website-files.com/621f51702b01b7fee7ff903a/622369b7e403e7ddc4ce0939_6.svg"
                          loading="lazy"
                          alt=""
                          className="footer__social__icon"
                        />
                      </a>
                    </div>
                  </div>

                  <div id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f0f0-3639f0d9">
                    <div className="mar-bot-32">
                      <h3 className="t-24">Products</h3>
                    </div>
                    <div>
                      <div className="mar-bot-32">
                        <a
                          href="#"
                          aria-current="page"
                          className="nav__link w--current"
                        >
                          CeloPool
                        </a>
                      </div>
                      <div className="mar-bot-32">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav__link"
                        >
                          STAKING
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav__link"
                        >
                          BONDS
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="w-node-_53e45fb5-9d72-c442-cbd6-6edd3639f10c-3639f0d9">
                    <div className="mar-bot-32">
                      <h3 className="t-24">Contact us</h3>
                    </div>
                    <div>
                      <div className="mar-bot-32">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav__link"
                        >
                          JOIN CeloPool DISCORD
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="nav__link"
                        >
                          Media inquiries
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="w-node-c3dc0562-b736-e5a5-a6c3-1436e8917091-3639f0d9">
                    <div className="mar-bot-32">
                      <h3 className="t-24">CeloPool Monthly Digest</h3>
                    </div>

                    <div className="footer__form-block w-form">
                      <form
                        id="wf-form-Footer-form"
                        name="wf-form-Footer-form"
                        data-name="Footer form"
                        method="get"
                        className="footer__form mar-bot-8"
                      >
                        <input
                          type="text"
                          className="footer__form__input w-input"
                          maxLength="256"
                          name="email"
                          data-name="Email"
                          placeholder="Email address"
                          id="footer-email"
                        />
                        <div className="footer__form-submit">
                          <a
                            href="#"
                            className="btn-arr form-submit w-inline-block"
                          >
                            <div className="btn-text-cont">
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/622227e9065f1e0d7777466d_icon.png"
                                loading="lazy"
                                alt="Arrow"
                                className="btn__arrow-icon"
                              />
                              <img
                                src="../assets.website-files.com/621f51702b01b7fee7ff903a/622227e9065f1e0d7777466d_icon.png"
                                loading="lazy"
                                alt="Arrow"
                                className="btn__arrow-icon__2"
                              />
                            </div>
                          </a>
                        </div>
                        <input
                          type="submit"
                          value="Submit"
                          data-wait="Please wait..."
                          id="submit-footer-form"
                          className="display-none w-button"
                        />
                      </form>

                      <div className="t-16">
                        <div className="footer__form-message">
                          Form state message
                        </div>
                      </div>

                      <div className="footer__form-success w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>

                      <div className="footer__form-error w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontal-container">
                <div className="footer__container">
                  <div
                    id="w-node-f38f793c-c0b3-7cb3-ad3a-fe3a26428d05-3639f0d9"
                    className="footer__form"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
