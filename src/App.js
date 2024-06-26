import React, { useEffect } from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";

function App() {
  useEffect(() => {
    const searchIcon = document.querySelector('#search-icon');
    const searchBox = document.querySelector('.search-box');

    if (searchIcon && searchBox) {
      searchIcon.onclick = () => {
        searchBox.classList.toggle('active');
      };
    }

    return () => {
      if (searchIcon) {
        searchIcon.onclick = null;
      }
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header>
        <div className="nav container">
          <i className='bx bx-menu' id="menu-icon"></i>
          <a href="#" className="logo">Bike<span>Point</span></a>
          <ul className="navbar">
            <li><a href="#home" className="active">HOME</a></li>
            <li><a href="#bikes">BIKES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#parts">PARTS</a></li>
            <li><a href="#blog">OUR BLOG</a></li>
          </ul>
          <i className='bx bx-search' id="search-icon"></i>
          <div className="search-box container">
            <input type="search" placeholder="Search here..." />
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-text">
          <h1>We Have Everything<br/>Your <span>Bike</span> Need</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="#" className="btn">Discover Now</a>
        </div>
      </section>
      {/* Car Section */}
      <section className="bikes" id="bikes">
        <div className="heading">
         <span>All Bikes</span>
         <h2>We have all types bikes</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="bikes-container container">
          <div className="box">
            <img src="https://e0.pxfuel.com/wallpapers/148/654/desktop-wallpaper-kawasaki-ninja-zx-10r-2016-std-compare-bike-overdrive.jpg "alt="Bike1" className="img1"></img>
            <h2>Kawasaki Ninja ZX-10R</h2>
          </div>
          <div className="box">
            <img src="https://images4.alphacoders.com/128/thumb-1920-1280019.jpg"  alt="Bike2" className="img2"></img>
            <h2>Yamaha YZF-R1</h2>
          </div>
          <div className="box">
            <img src="https://4kwallpapers.com/images/walls/thumbs_3t/2782.jpg " alt="Bike3" className="img3"></img>
            <h2>Honda CBR 1000RR</h2>
          </div>
          <div className="box">
            <img src="https://static.tnn.in/thumb/msid-95748338,thumbsize-33966,width-1280,height-720,resizemode-75/95748338.jpg" alt="Bike1" className="img4"></img>
            <h2>BMW M 1000RR</h2>
          </div>
          <div className="box">
            <img src="https://c4.wallpaperflare.com/wallpaper/438/875/727/ducati-panigale-v4-r-2019-4k-wallpaper-preview.jpg" alt="Bike1" className="img5"></img>
            <h2>Ducati Panigale V4</h2>
          </div>
          <div className="box">
            <img src="https://images.drivespark.com/ph-big/2019/03/aprilia-rsv4-x-track-edition-3.jpg" alt="Bike1"className="img6"></img>
            <h2>Aprilia RSV4</h2>
          </div>
        </div>
      </section>
       {/* About Section */}
       <section className="about container" id="about">
       <div className="about-img">
       <img src="https://c4.wallpaperflare.com/wallpaper/832/641/292/harley-davidson-motorcycle-24-wallpaper-preview.jpg" alt="about"></img>
       </div>
        <div className="about-text">
          <span>About Us</span>
          <h2>Cheap Prices With <br/>Quality</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </section>
       {/* Parts Section */}
       <section className="parts" id="parts">
        <div className="heading">
           <span>What We Offer</span> 
           <h2>Our Bike Is Always Excellent</h2><br></br>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="parts-container container">
          <div className="box">
            <img src="https://4.imimg.com/data4/SM/VA/MY-19463349/sports-bike-tyres-500x500.jpg" alt=""></img>
            <h3>Auto Spare Parts</h3>
            <span>₹10,675</span>
            <i class='bx bxs-star'>(2M Reviews)</i>
            <a href="#" className="btn">Buy Now</a>
            <a href="#" className="details">View Details</a>
          </div>
        
            
          <div className="box">
            <img src="https://t3.ftcdn.net/jpg/03/08/32/76/360_F_308327638_ZrCnGQLLk8IT9Ck0gnWhjQdjDmdqxlrM.jpg" alt=""></img>
            <h3>Auto Spare Parts</h3>
            <span>₹3500</span>
            <i class='bx bxs-star'>(700k Reviews)</i>
            <a href="#" className="btn">Buy Now</a>
            <a href="#" className="details">View Details</a>
          </div>
          
          
          <div className="box">
            <img src="https://www.premierbikes.com/i/?item_type=product&item_id=18119" alt=""></img>
            <h3>Auto Spare Parts</h3>
            <span>₹50,000</span>
            <i class='bx bxs-star'>(650k Reviews)</i>
            <a href="#" className="btn">Buy Now</a>
            <a href="#" className="details">View Details</a>
          </div>
       
          
          <div className="box">
            <img src="https://t4.ftcdn.net/jpg/03/41/01/29/360_F_341012951_ryYodUQjqWXhvZMiYartn0ldZgzKv0qd.jpg" alt=""></img>
            <h3>Auto Spare Parts</h3>
            <span>₹15000</span>
            <i class='bx bxs-star'>(8k Reviews)</i>
            <a href="#" className="btn">Buy Now</a>
            <a href="#" className="details">View Details</a>
       
          </div>
     
          <div className="box">
            <img src="https://media.istockphoto.com/id/1206607920/photo/shock-absorber-car-isolated-on-white-background-auto-parts-and-spare.jpg?s=612x612&w=0&k=20&c=OSlt0AR27ikrseiP0PPWoNft8ZwwEOtsaZC7gH605nI=" alt=""></img>
            <h3>Auto Spare Parts</h3>
            <span>₹3235</span>
            <i class='bx bxs-star'>(6k Reviews)</i>
            <a href="#" className="btn">Buy Now</a>
            <a href="#" className="details">View Details</a>
         
          </div>
          
          <div className="box">
            <img src="https://ik.imagekit.io/carro/jualo-public/blog/wp-content/uploads/2021/08/header-quick.jpg" alt=""></img>
            <h3>Auto Spare Parts</h3>
            <span>₹1500</span>
            <i class='bx bxs-star'>(3k Reviews)</i>
            <a href="#" className="btn">Buy Now</a>
            <a href="#" className="details">View Details</a>
         
        </div>
        </div>
      
      </section>
       {/* blog Section */}
       <section className="blog" id="blog">
        <div className="heading">

        <span>Blog & News</span> 
        <h2>Our Blog content</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="blog-container container">
          <div className="box">
            <img src="https://e0.pxfuel.com/wallpapers/148/654/desktop-wallpaper-kawasaki-ninja-zx-10r-2016-std-compare-bike-overdrive.jpg " alt="box1"></img>
            <span>Feb 14 2021</span>
            <h3>How to get perfect bike at low price</h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a href="#" className="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
          </div>
          <div className="box">
            <img src="https://static.tnn.in/thumb/msid-95748338,thumbsize-33966,width-1280,height-720,resizemode-75/95748338.jpg " alt="box1"></img>
            <span>Mar 3 2020</span>
            <h3>How to get perfect bike at low price</h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a href="#" className="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
          </div>
          <div className="box">
            <img src="https://4kwallpapers.com/images/walls/thumbs_3t/2782.jpg " alt="box1"></img>
            <span>Nov 22 2022</span>
            <h3>How to get perfect bike at low price</h3>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a href="#" className="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
          </div>

        </div>
      </section>
      
      {/* footer Section */}
      <section className="footer">
        <div className="footer-container container">
        <div className="footer-box">
        <a href="#" className="logo">Bike<span>Point</span></a>
        <div className="social">
        <a href="#"><i class='bx bxl-facebook'></i></a>
        <a href="#"><i class='bx bxl-twitter'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
        <a href="#"><i class='bx bxl-youtube'></i></a>
        </div>
        </div>
        <div className="footer-box">
          <h3>Page</h3>
          <a href="#">Home</a>
          <a href="#"> Bikes</a>
          <a href="#"> Parts</a>
          <a href="#"> Sales</a>
        </div>
        <div className="footer-box">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#"> RefundPolicy</a>
          <a href="#"> CookiePolicy</a>
        </div>
        <div className="footer-box">
          <h3>Contact</h3>
         <p>United States </p>
         <p>Japan </p>
         <p>Germany </p>
        </div>
     </div>
      </section>
      <div className="copyright">
        <p>&#169; CarpoolVenom All Rights Reserved</p>
      </div>



    </div>

  );
}

export default App;