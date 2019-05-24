import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
           < div>
            <div className="banner jarallax">
              <div className="header">
                <div className="container">
                  <div className="header-left">
                    <div className="w3layouts-logo">
                      <h1>
                        <a href="index.html"><span>Photo</span>_nr3v</a>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom">
                <div className="container">
                  <div className="top-nav">
                    <nav className="navbar navbar-default">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      {/* Collect the nav links, forms, and other content for toggling */}
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                          {/* <li><a class="active" href="index.html">Home</a></li> */}
                          <li><a href="#about" className="scroll">About</a></li>
                          <li><a href="#services" className="scroll">Thương hiệu</a></li>
                          <li><a href="#gallery" className="scroll">Album</a></li>
                          <li><a href="#team" className="scroll">Team</a></li>
                          <li><a href="#blog" className="scroll">Blog</a></li>
                          <li><a href="#contact" className="scroll">Liên Hệ</a></li>
                        </ul>	
                        <div className="clearfix"> </div>
                      </div>	
                    </nav>	
                  </div>
                  {/* w3-banner */}
                  <div className="w3-banner">
                    <div id="typer" />
                    <div className="top-banner-right">
                      <ul>
                        <li><a className="facebook" href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a className="facebook" href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        <li><a className="facebook" href="#"><i className="fab fa-facebook-messenger" /></a></li>
                        <li><a className="facebook" href="#"><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                    <div className="w3ls-phone">
                      <h2><i className="fa fa-phone" aria-hidden="true" />974959735</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about" id="about">
              <div className="container">
                <div className="w3ls-heading">
                  <h3 id="titel">About Us</h3>
                  <p>Morbi in dui pretium, finibus sapien vel, bibendum ipsum</p>
                </div>
                <div className="agileits-about-grids">
                  <div className="col-md-6 agileits-about-grid">
                    <p>Aenean venenatis tortor a accumsan tincidunt. Pellentesque mollis consectetur nunc, dictum facilisis sapien placerat a. Phasellus vel aliquam orci. Nullam sagittis nisi a velit mattis consequat. Proin non venenatis nunc. Donec ac vehicula tellus. Vivamus nec urna venenatis nunc pharetra varius.</p>
                  </div>
                  <div className="col-md-6 agileits-about-grid">
                    <p>Nunc porttitor semper sem ac sodales. Integer luctus nunc sit amet magna feugiat, eu condimentum leo pellentesque. Praesent iaculis mauris at posuere efficitur. Aliquam at felis sit amet turpis suscipit vehicula. Curabitur ut hendrerit purus, vel tincidunt sapien. Phasellus posuere dui magna.</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="agileinfo-about-slide">
                  <div id="owl-demo" className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/1.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Justo congue</h4>
                          <p>Fusce laoreet</p>
                        </div>
                      </div>	
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/2.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Nulla facilisi</h4>
                          <p>Lorem ipsum</p>
                        </div>
                      </div>	
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/3.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Aenean sed</h4>
                          <p>Nunc tincidunt</p>
                        </div>
                      </div>	
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/7.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Justo congue</h4>
                          <p>Phasellus magna</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/4.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Justo congue</h4>
                          <p>Fusce laoreet</p>
                        </div>
                      </div>	
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/5.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Nulla facilisi</h4>
                          <p>Lorem ipsum</p>
                        </div>
                      </div>	
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/1.jpg" alt />
                        <div className="about-grid-caption"> 
                          <h4>Aenean sed</h4>
                          <p>Nunc tincidunt</p>
                        </div>
                      </div>	
                    </div>
                    <div className="item">
                      <div className="about-grid-info">
                        <img src="images/2.jpg" alt />
                        <div className="about-grid-caption">
                          <h4>Justo congue</h4>
                          <p>Phasellus magna</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-bottom" id="services">
              <div className="container">
                <div className="w3ls-heading">
                  <h3>Thương hiệu</h3>
                  <p>Những nhãn hiệu lớn trên toàn thế giới</p>
                </div>
                <div className="middle-bottom-grids">
                  <div className="col-md-6 w3l-one">
                    <div className="one">
                      <h4><span>01</span><a href="#">Canon</a></h4>
                      <p>Nguồn gốc của Canon là "Phòng thí nghiệm dụng cụ quang học chính xác" (Precision Optical Instruments Laboratory) được thành lập năm 1937 bởi bốn người: Takeshi Mitarai, Goro Yoshida, Saburo Uchida và Takeo Maeda. Sau đó, phòng thí nghiệm này đổi tên sang Seikikōgaku kenkyūsho </p>
                      {/* ảnh cột 1 */}
                      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to={0} className="active" />
                          <li data-target="#myCarousel" data-slide-to={1} />
                          <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="images/g1.jpg" alt="Los Angeles" id="logocanon" />
                          </div>
                          <div className="item">
                            <img src="images/g2.jpg" alt="Chicago" />
                          </div>
                          <div className="item">
                            <img src="images/g3.jpg" alt="New York" />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        {/*  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                  <span class="glyphicon glyphicon-chevron-left"></span>
                                                  <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                  <span class="glyphicon glyphicon-chevron-right"></span>
                                                  <span class="sr-only">Next</span>
                                                </a> */}
                      </div>
                      {/* end ảnh cột 1 */}
                    </div>
                    <div className="one-2">
                      <h4><span>02</span><a href="#">Sony</a></h4>
                      <p>Sony Alpha hay Sony α (alpha trong bảng chữ cái tiếng Hy Lạp) là dòng sản phẩm máy ảnh DSLR và SLT được Sony công bố vào ngày 5 tháng 6 năm 2006.[1] Sony α được thành lập và mở rộng dựa trên công nghệ máy ảnh của Konica Minolta và hệ thống ngàm ống kính của Minolta AF. Sony sở hữu 11.08% cổ phần của Tamron, công ty ống kính máy ảnh Nhật Bản[2] đang hợp tác sản xuất với Sony và Konica Minolta.</p>
                      {/* ảnh cột 2 */}
                      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to={0} className="active" />
                          <li data-target="#myCarousel" data-slide-to={1} />
                          <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="images/g1.jpg" alt="Los Angeles" />
                          </div>
                          <div className="item">
                            <img src="images/g2.jpg" alt="Chicago" />
                          </div>
                          <div className="item">
                            <img src="images/g3.jpg" alt="New York" />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        {/*  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                  <span class="glyphicon glyphicon-chevron-left"></span>
                                                  <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                  <span class="glyphicon glyphicon-chevron-right"></span>
                                                  <span class="sr-only">Next</span>
                                                </a> */}
                      </div>
                      {/* end ảnh cột 2 */}
                    </div>
                    <div className="one-3">
                      <h4><span>03</span><a href="#">Fujifilm</a></h4>
                      <p>Fujifilm được thành lập vào năm 1934 với mục đích sản xuất phim ảnh. Qua nhiều thập kỷ, chúng tôi đã đa dạng hóa tham gia các thị trường mới và tạo dựng sự hiện diện mạnh mẽ trên toàn cầu.</p>
                      {/* ảnh cột 3 */}
                      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to={0} className="active" />
                          <li data-target="#myCarousel" data-slide-to={1} />
                          <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="images/g1.jpg" alt="Los Angeles" />
                          </div>
                          <div className="item">
                            <img src="images/g2.jpg" alt="Chicago" />
                          </div>
                          <div className="item">
                            <img src="images/g3.jpg" alt="New York" />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        {/*  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a> */}
                      </div>
                      {/* end ảnh cột 3 */}
                    </div>
                  </div>
                  <div className="col-md-6 w3-two">
                    <div className="two">
                      <h4><span>04</span><a href="#">Nikon</a></h4>
                      <p>Công ty được lập năm 1917 với tên gọi Nippon Kōgaku Kōgyō (日本光学工業株式会社 "Japan Optical Industries"); sau đó đổi tên thành Nikon Corporation năm 1988</p>
                      {/* ảnh cột 4 */}
                      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to={0} className="active" />
                          <li data-target="#myCarousel" data-slide-to={1} />
                          <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="images/g1.jpg" alt="Los Angeles" />
                          </div>
                          <div className="item">
                            <img src="images/g2.jpg" alt="Chicago" />
                          </div>
                          <div className="item">
                            <img src="images/g3.jpg" alt="New York" />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        {/*  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a> */}
                      </div>
                      {/* end ảnh cột 4 */}
                    </div>
                    <div className="two-1">
                      <h4><span>05</span><a href="#">Kodak</a></h4>
                      <p>Duis venenatis, turpis eu bibendum porttitor, sapien quam ultricies tellus, ac rhoncus risus odio eget nunc. Pellentesque ac fermentum diam. Integer eu facilisis nunc, a iaculis felis. Pellentesque pellentesque tempor enim</p>
                      {/* ảnh cột 5*/}
                      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to={0} className="active" />
                          <li data-target="#myCarousel" data-slide-to={1} />
                          <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="images/g1.jpg" alt="Los Angeles" />
                          </div>
                          <div className="item">
                            <img src="images/g2.jpg" alt="Chicago" />
                          </div>
                          <div className="item">
                            <img src="images/g3.jpg" alt="New York" />
                          </div>
                        </div>
                      </div>
                      {/* end ảnh cột 5 */}
                    </div>
                    <div className="two-2">
                      <h4><span>06</span>Samsung</h4>
                      <p>Duis venenatis, turpis eu bibendum porttitor, sapien quam ultricies tellus, ac rhoncus risus odio eget nunc. Pellentesque ac fermentum diam. Integer eu facilisis nunc, a iaculis felis. Pellentesque pellentesque tempor enim</p>
                      {/* ảnh cột 6 */}
                      <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to={0} className="active" />
                          <li data-target="#myCarousel" data-slide-to={1} />
                          <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="images/g1.jpg" alt="Los Angeles" />
                          </div>
                          <div className="item">
                            <img src="images/g2.jpg" alt="Chicago" />
                          </div>
                          <div className="item">
                            <img src="images/g3.jpg" alt="New York" />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        {/*  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a> */}
                      </div>
                      {/* end ảnh cột 6*/}
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            {/* //middle-bottom */}
            {/* portfolio */}
            <div className="portfolio" id="gallery">
              <div className="container">
                <div className="w3ls-heading">
                  <h3>Gallery</h3>
                  <p>Morbi in dui pretium, finibus sapien vel, bibendum ipsum</p>
                </div>
                <div className="agileits_portfolio_grids">
                  <div className="col-md-3 agileits_portfolio_grid">
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g1.jpg">
                        <img src="images/g1.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g2.jpg">
                        <img src="images/g2.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g3.jpg">
                        <img src="images/g3.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 agileits_portfolio_grid">
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g4.jpg">
                        <img src="images/g4.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g5.jpg">
                        <img src="images/g5.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Monetary</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g6.jpg">
                        <img src="images/g6.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 agileits_portfolio_grid">
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g7.jpg">
                        <img src="images/g7.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g1.jpg">
                        <img src="images/g1.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g2.jpg">
                        <img src="images/g2.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 agileits_portfolio_grid">
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g3.jpg">
                        <img src="images/g3.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g4.jpg">
                        <img src="images/g4.jpg" alt=" " className="img-responsive" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                    <div className="agileinfo_portfolio_grid hovereffect">
                      <a className="cm-overlay" href="images/g5.jpg">
                        <img src="images/g5.jpg" alt=" " className="img-responsive" id="logocanon" />
                        <div className="overlay">
                          <h4>Photo Maker</h4>
                          <p>Nulla dui diam, gravida nec eros ut, congue.</p> 
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            {/* //portfolio */}
            {/* team */}
            <div className="team" id="team">
              <div className="container">
                <div className="w3ls-heading team-heading">
                  <h3>Our Team</h3>
                  <p>Chúng tôi luôn làm hài lòng tất cả</p>
                </div>
                <div className="inner_w3l_agile_grids">
                  <div id="horizontalTab">
                    <ul className="resp-tabs-list">
                      <li>
                        <img src="images/t11.jpg" alt=" " className="img-responsive" />
                      </li>
                      <li>
                        <img src="images/t22.jpg" alt=" " className="img-responsive" />
                      </li>
                      <li>
                        <img src="images/t33.jpg" alt=" " className="img-responsive" />
                      </li>
                      <li>
                        <img src="images/t44.jpg" alt=" " className="img-responsive" />
                      </li>
                    </ul>
                    <div className="resp-tabs-container">
                      <div className="tab1">
                        <div className="col-md-6 team-img-w3-agile">
                        </div>
                        <div className="col-md-6 team-Info-agileits">
                          <h4>Lucas Jimenez</h4>
                          <span>Photographer</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>
                          <div className="w3_agileits_social_media team_agile_w3l">
                            <ul className="social-icons3">
                              <li className="agileinfo_share">Follow In</li>
                              <li><a href="#" className="wthree_facebook"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>								
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                      <div className="tab2">
                        <div className="col-md-6 team-img-w3-agile">
                        </div>
                        <div className="col-md-6 team-Info-agileits">
                          <h4>Sarah Connor</h4>
                          <span>Photographer</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>	
                          <div className="w3_agileits_social_media team_agile_w3l">
                            <ul className="social-icons3">
                              <li className="agileinfo_share">Follow In</li>
                              <li><a href="#" className="wthree_facebook"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>									
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                      <div className="tab3">
                        <div className="col-md-6 team-img-w3-agile">
                        </div>
                        <div className="col-md-6 team-Info-agileits">
                          <h4>Ivan Simpson</h4>
                          <span>Photographer</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>
                          <div className="w3_agileits_social_media team_agile_w3l">
                            <ul className="social-icons3">
                              <li className="agileinfo_share">Follow In</li>
                              <li><a href="#" className="wthree_facebook"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>								
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                      <div className="tab4">
                        <div className="col-md-6 team-img-w3-agile">
                        </div>
                        <div className="col-md-6 team-Info-agileits">
                          <h4>Marc Gutierrez</h4>
                          <span>Photographer</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum dolor .</p>
                          <div className="w3_agileits_social_media team_agile_w3l">
                            <ul className="social-icons3">
                              <li className="agileinfo_share">Follow In</li>
                              <li><a href="#" className="wthree_facebook"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                              <li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                          </div>				
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //team */}
            {/* blog */}
            <div className="blog" id="blog">
              <div className="container">
                <div className="w3ls-heading">
                  <h3>Our Blog</h3>
                  <p>Morbi in dui pretium, finibus sapien vel, bibendum ipsum</p>
                </div>
                <div className="w3-agile-blog-grids">
                  <div className="w3-agile-blog-grid">
                    <div className="col-md-5 w3-agile-blog-left">
                      <a href="#" data-toggle="modal" data-target="#myModal"><img src="images/g2.jpg" alt /></a>
                    </div>
                    <div className="col-md-6 w3-agile-blog-right">
                      <div className="w3-agile-blog-right-top">
                        <div className="blog-left-left">
                          <i className="fas fa-pencil-ruler" />
                        </div>
                        <div className="blog-left-right-top">
                          <h4><a href="#" data-toggle="modal" data-target="#myModal">Integer et turpis augue. In hac habitasse platea dictumst.</a></h4>
                          <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2016 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                      <div className="w3-agile-blog-right-info">
                        <p>Nullam in dui dolor. Donec faucibus, est sed mattis placerat, lorem orci vestibulum lorem, vel accumsan nisl urna eget leo. Cras varius bibendum augue nec pretium. Aenean a ex ante. Nunc ut dignissim justo, ut commodo odio. Donec magna mi, accumsan a mi eu, fermentum tempus elit.</p>
                        <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="w3-agile-blog-grid">
                    <div className="col-md-5 w3-agile-blog-left">
                      <a href="#" data-toggle="modal" data-target="#myModal"><img src="images/g7.jpg" alt /></a>
                    </div>
                    <div className="col-md-6 w3-agile-blog-right">
                      <div className="w3-agile-blog-right-top">
                        <div className="blog-left-left">
                          <i className="fab fa-app-store" aria-hidden="true" />
                        </div>
                        <div className="blog-left-right-top">
                          <h4><a href="#" data-toggle="modal" data-target="#myModal">Integer et turpis augue. In hac habitasse platea dictumst.</a></h4>
                          <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2016 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                      <div className="w3-agile-blog-right-info">
                        <p>Nullam in dui dolor. Donec faucibus, est sed mattis placerat, lorem orci vestibulum lorem, vel accumsan nisl urna eget leo. Cras varius bibendum augue nec pretium. Aenean a ex ante. Nunc ut dignissim justo, ut commodo odio. Donec magna mi, accumsan a mi eu, fermentum tempus elit.</p>
                        <a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //blog */}
            {/* modal */}
            <div className="modal about-modal fade" id="myModal" tabIndex={-1} role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header"> 
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>						
                    <h4 className="modal-title"><span>Photo</span> Maker</h4>
                  </div> 
                  <div className="modal-body">
                    <div className="agileits-w3layouts-info">
                      <img src="images/7.jpg" alt />
                      <p>Duis venenatis, turpis eu bibendum porttitor, sapien quam ultricies tellus, ac rhoncus risus odio eget nunc. Pellentesque ac fermentum diam. Integer eu facilisis nunc, a iaculis felis. Pellentesque pellentesque tempor enim, in dapibus turpis porttitor quis. Suspendisse ultrices hendrerit massa. Nam id metus id tellus ultrices ullamcorper.  Cras tempor massa luctus, varius lacus sit amet, blandit lorem. Duis auctor in tortor sed tristique. Proin sed finibus sem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //modal */}
            {/* contact */}
            <div className="contact" id="contact">
              <div className="container">
                <div className="w3ls-heading">
                  <h3>Get In Touch</h3>
                  <p>Morbi in dui pretium, finibus sapien vel, bibendum ipsum</p>
                </div>
                <div className="contact-grids">
                  <div className="col-md-4 contact-left">
                    <div className="contact-info">
                      <div className="contact-info-left">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </div>
                      <div className="contact-info-right">
                        <h5>Address</h5>
                        <p>Eiusmod Tempor inc<br />
                          <span>1St Golden Place,</span>
                          Los Angeles 1256
                        </p>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-info-left">
                        <i className="fa fa-phone-square" aria-hidden="true" />
                      </div>
                      <div className="contact-info-right">
                        <h5>Mobile</h5>
                        <ul>
                          <li>+1 234 567 8901</li>
                          <li>+1 345 678 9012</li>
                        </ul>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-info-left">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </div>
                      <div className="contact-info-right">
                        <h5>E-Mail</h5>
                        <ul>
                          <li><a href="mailto:example@mail.com">mail@example.com</a></li>
                          <li><a href="mailto:example@mail.com">example@mail.com</a></li>
                        </ul>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                  <div className="col-md-8 contact-form">
                    <form action="#" method="post">
                      <input type="text" name="Name" placeholder="Name" required />
                      <input type="email" className="email" name="Email" placeholder="Email" required />
                      <textarea placeholder="Message" name="Message" required defaultValue={""} />
                      <input type="submit" defaultValue="SUBMIT" />
                    </form>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            {/* //contact */}

            <style>{`
           jQuery(document).ready(function($) {
            $(".scroll").click(function(event){		
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
            });
        });
           `}</style>

           <style>{`
            $(document).ready(function() {
                $().UItoTop({ easingType: 'easeOutQuart' });
                                    
                });
           `}</style>

            <style>{`
                $(document).ready(function() { 
                    $("#owl-demo").owlCarousel({
                 
                        autoPlay: 3000, //Set AutoPlay to 3 seconds
                        autoPlay:true,
                        items : 3,
                        itemsDesktop : [640,5],
                        itemsDesktopSmall : [414,4]
                 
                    });   
                }); 
           `}</style>

            <style>{`
              var win = $(window),
              foo = $('#typer');

          foo.typer(['Lorem.!!', 'You dont know', 'your beautiful']);

          // unneeded...
          win.resize(function(){
              var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));

              foo.css({
                  fontSize: fontSize * .8 + 'px'
              });
          }).resize();
           `}</style>

<style>{`
            $(document).ready(function() {
                $().UItoTop({ easingType: 'easeOutQuart' });
                                    
                });
           `}</style>

<style>{`
            $(document).ready(function () {
                $('#horizontalTab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion           
                width: 'auto', //auto or any width like 600px
                fit: true,   // 100% fit in a container
                closed: 'accordion', // Start closed if in accordion view
                activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
                }
                });
                $('#verticalTab').easyResponsiveTabs({
                type: 'vertical',
                width: 'auto',
                fit: true
                });
                });
           `}</style>
           </div>
        );
    }
}

export default Home;