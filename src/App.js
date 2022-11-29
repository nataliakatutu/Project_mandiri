import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  
  const [Tentang,setTentang]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:3004/Tentang')
    .then((res) => setTentang(res.data));
  },[]);
  return (
<div>
  <div>
    {/*header section start */}
    <div className="header_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
          </div>
          <div className="col-md-9">
            <div className="menu_text">
              <ul>
                <div className="togle_3">
                  <div className="menu_main">
                    <div className="padding_left0"><a href="#">DAFTAR</a>
                      <span className="padding_left0"><a href="#">LOGIN</a></span></div>
                  </div>
                  <div className="shoping_bag"><img src="images/search-icon.png" /></div>
                </div> 
                <div id="myNav" className="overlay">
                  <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
                  <div className="overlay-content">
                    <a href="index.html">HOME</a>
                    <a href="services.html">LAYANAN</a>
                    <a href="about.html">ABOUT</a>
                    <a href="choose.html">PILIHAN</a>
                    <a href="team.html">TIM</a>
                    <a href="contact.html">KONTAK NATAL</a>
                  </div>
                </div>
                <span className="navbar-toggler-icon" />
                <span onclick="openNav()"><img src="images/toggle-icon.png" className="toggle_menu" /></span>
              </ul>
            </div>      
          </div>
        </div>
      </div>
      {/* banner section start */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <h1 className="banner_taital">Buat Rumah</h1> 
              <h1 className="banner_taital_1">anda BERSIH</h1>
              <h1 className="banner_taital_1">dari KEJOROKANMU</h1>
              <p className="banner_text">Kebersihan adalah awal untuk mendatangkan JODOH :*</p>
              <div className="contact_bt"><a href="contact.html">KONTAK NATAL<span className="contact_padding"><img src="images/contact-icon.png" /></span></a></div>
            </div>
            <div className="col-sm-2">
              <div className="play_icon"><a href="#"><img src="images/play-icon.png" /></a></div>
            </div>
            <div className="col-sm-5">
              <div><img src="images/img-1.png" className="image_1" /></div>
            </div>
          </div>
        </div>
      </div>
      {/* banner section end */}
    </div>
    {/* header section end */}
    {/* services section start */}
    <div className="services_section layout_padding">
      <div className="container">
        <h1 className="services_taital"><span>LAYANAN</span> <img src="images/icon-1.png" /> <span style={{color: '#1f1f1f'}}>KAMI</span></h1>
        <p className="services_text">Kami melayani dengan sepenuh hati, karena kepuasan pelanggan adalah hal yang utama hehehe</p>
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="services_section_2 layout_padding">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box_section active">
                      <div className="tiles_img" />
                      <h3 className="tile_text active">Tile &amp; Grout</h3>
                      <p className="lorem_text active"> Jika Lantai anda sudah buluk, kami bisa merubahnya menjadi terlihat seperti baru</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box_section">
                      <div className="tiles_img_1" />
                      <h3 className="tile_text">Pembersihan Karpet</h3>
                      <p className="lorem_text">Jika anda memiliki karpet yang tidak terpakai, jangan dibuang ges. Kami menyediakan layanan pembersihan untuk karpet anda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="services_section_2 layout_padding">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box_section active">
                      <div className="tiles_img" />
                      <h3 className="tile_text active">Tile &amp; Grout</h3>
                      <p className="lorem_text active">Jangan ganti baru ya ges, masih bisa di perbaiki kok mwehehhe </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box_section">
                      <div className="tiles_img_1" />
                      <h3 className="tile_text">Pembersihan Karpet</h3>
                      <p className="lorem_text">Daripada beli baru, mending pakai jasa kami </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="services_section_2 layout_padding">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box_section active">
                      <div className="tiles_img" />
                      <h3 className="tile_text active">Tile &amp; Grout</h3>
                      <p className="lorem_text active"> Bayar sewajarnya ya </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box_section">
                      <div className="tiles_img_1" />
                      <h3 className="tile_text">Pembersihan Karpet</h3>
                      <p className="lorem_text">Tidak melayani hutang ya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left" />
          </a>
          <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
    {/* services section start */}
    {/* about section start */}
    <div className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div><img src="images/img-2.png" className="image_2" /></div>
          </div>
          <div className="col-md-6">
            <h1 className="services_taital"><span>TENTANG </span> <img src="images/icon-1.png" /> <span style={{color: '#1f1f1f'}}>PEMBERSIHAN</span></h1>
            <p className="ipsum_text">Kami membersihkan dengan sepenuh hati, jadi BAYAR kami sewajarnya yaaa. Rumah yang bersih adalah cerminan diri pemiliknya. jadi, ayo bersihkan rumah anda menggunakan jasa kami</p>
            <div className="contact_bt_1"><a href="#">BACA LANJUTAN<span className="contact_padding"><img src="images/contact-icon1.png" /></span></a></div>
          </div>
        </div>
      </div>
    </div>
    {/* about section end */}
    {/* choose section start */}
    <div className="choose_section layout_padding">
      <div className="container">
        <h1 className="choose_taital"><span>KENAPA </span> <img src="images/icon-1.png" /> <span style={{color: '#1f1f1f'}}>PILIH KAMI?</span></h1>
        <p className="choose_text">Sudah banyak yang memakai jasa kami. jadi tunggu apalagi gesss?</p>
        <div className="choose_section_2 layout_padding">

{
          Tentang.map(item => {
            return (
              <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="choose_box">
                  <h1 className="client_taital">{item.rating}</h1>
                  <h4 className="client_text">{item.judul}</h4>
                </div>
              </div>
              
            </div>
            )
          }
          )

}
          <div className="image_3"><img src="images/img-3.png" /></div>
          <div className="get_bt"><a href="#">Dapatkan penawaran bukan GRATISAN</a></div>
        </div>
      </div>
    </div>
    {/* choose section end */}
    {/* team section start */}
    <div className="team_section layout_padding">
      <div className="container">
        <h1 className="choose_taital"><span>Tim </span> <img src="images/icon-1.png" /> <span style={{color: '#1f1f1f'}}>Kami</span></h1>
        <p className="choose_text">Hanya aku dan para pekerja. </p>
        <div className="team_section_2 layout_padding">
          <div className="container">
            <div className="images_main_1">
              <div className="row">
                <div className="col-sm-5">
                  <div className="image_4"><img src="images/img-4.png" /></div>
                  <h6 className="follow_text">Follow Us</h6>
                  <div className="follow_social_icon">
                    <ul>
                      <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                      <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                      <li><a href="#"><img src="images/linkden-icon.png" /></a></li>
                      <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-7">
                  <h2 className="consectetur_text">Konstruksi</h2>
                  <p className="dummy_text">Kami menggunakan alat baru ya bukan yang sudah setahun dipakai terus</p>
                </div>
              </div>
            </div>
            <div className="images_main">
              <div className="row">
                <div className="col-sm-7">
                  <h2 className="consectetur_text_1">Tentang CAPICLEAN</h2>
                  <p className="dummy_text_1">Jasa yang bisa dibilang baru tapi sudah banyak berkorban untuk melawan kejorokan rumah anda</p>
                </div>
                <div className="col-sm-5">
                  <div className="image_4"><img src="images/img-5.png" /></div>
                  <h6 className="follow_text">Follow Us</h6>
                  <div className="follow_social_icon">
                    <ul>
                      <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                      <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                      <li><a href="#"><img src="images/linkden-icon.png" /></a></li>
                      <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="images_main_1">
              <div className="row">
                <div className="col-sm-5">
                  <div className="image_4"><img src="images/img-6.png" /></div>
                  <h6 className="follow_text">Follow Us</h6>
                  <div className="follow_social_icon">
                    <ul>
                      <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                      <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                      <li><a href="#"><img src="images/linkden-icon.png" /></a></li>
                      <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-7">
                  <h2 className="consectetur_text">So?</h2>
                  <p className="dummy_text">Jadi, tunggu apalagi nih ges, kapan lagi dapat pelayanan yang murah no abal-abal dari jasa kami? cus pake jasa kami</p>
                </div>
              </div>
            </div>
            <div className="images_main">
              <div className="row">
                <div className="col-sm-7">
                  <h2 className="consectetur_text_1">Penawaran Lainnya</h2>
                  <p className="dummy_text_1">Kami juga menerima Laundry, Sedot WC, Perawatan taman</p>
                </div>
                <div className="col-sm-5">
                  <div className="image_4"><img src="images/img-7.png" /></div>
                  <h6 className="follow_text">Follow Us</h6>
                  <div className="follow_social_icon">
                    <ul>
                      <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                      <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                      <li><a href="#"><img src="images/linkden-icon.png" /></a></li>
                      <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* team section start */}
    {/* newsletter section start */}
    <div className="newsletter_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="newsletter_text">Surat Kabar Baru</h1>
            <p className="tempor_text">Kabar mengenai Jasa kami</p>
          </div>
          <div className="col-md-6">
            <div className="mail_bt_main">
              <input type="text" className="mail_text" placeholder="MASUKAN EMAIL ANDA" name="MASUKAN EMAIL ANDA" />
              <div className="subscribe_bt"><a href="#">SUBSCRIBE</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* newsletter section end */}
    {/* footer section start */}
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="footer_main">
          <div className="footer_left">
            <h1 className="contact_taital"><span>KONTAK </span> <img src="images/icon-2.png" /> <span>KAMI</span></h1>
          </div>
          <div className="footer_left">
            <div className="location_text"><a href="#"><img src="images/map-icon.png" /><span className="padding_left_15">LOKASI</span></a></div>
          </div>
          <div className="footer_left">
            <div className="location_text"><a href="#"><img src="images/call-icon.png" /><span className="padding_left_15">0847146198</span></a></div>
          </div>
          <div className="footer_left">
            <div className="location_text"><a href="#"><img src="images/map-icon.png" /><span className="padding_left_15">nataliakatutu@gmail</span></a></div>
          </div>
        </div>
        <div className="contact_section">
          <div className="row">
            <div className="col-md-6">
              <div className="mail_section">
                <input type className="email_text" placeholder="Nama" name="Nama" />
                <input type className="email_text" placeholder="Email" name="Email" />
                <input type className="email_text" placeholder="Nomor HP" name="Nomor HP" />
                <textarea className="massage_text" placeholder="Message" rows={5} id="comment" name="Message" defaultValue={""} />
                <div className="send_bt"><a href="#">send</a></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe src="https://goo.gl/maps/JSj4jtYecmYoELFU8" width={600} height={280} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
                </div>
              </div>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon1.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon1.png" /></a></li>
                  <li><a href="#"><img src="images/linkden-icon1.png" /></a></li>
                  <li><a href="#"><img src="images/instagram-icon1.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer section end */}
    {/* copyright section start */}
    <div className="copyright_section">
      <div className="container">
        <p className="copyright_text">PROJEK BY NATAL</p>
        
      </div>
    </div>
  </div>
  );
  {'}'}
</div>
  )}

export default App;
