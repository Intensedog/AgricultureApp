import React from "react";
import Cart from "./Cart";

function Home() {
  return (<html>
    <head>
      <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head><body>
        <section>
          <div class="section">
            <div class="section1">
              <div class="img-slider">
                <img src="https://images.squarespace-cdn.com/content/v1/59a706d4f5e2319b70240ef9/1598971164694-F75Y7VUAHC6TLFJXLCWF/veggies.jpg" alt="" class="img"></img>
                <img src="https://assets2.cbsnewsstatic.com/hub/i/r/2022/02/11/ca12fb7c-e0f4-4951-bb63-c07c81cd4a73/thumbnail/1200x630/4fd4e60bfae6672cfb829f3b7c296d4d/cage-free-chickens-versova-via-ap.jpg" alt="img" class="img"></img>
                <img src="http://4.bp.blogspot.com/-NwQHfIw_OG8/U11Ic8W4lDI/AAAAAAAAGpQ/sxiSlgi4yQE/s1600/SAS+iStock+F-V.jpg" class="img"></img>
                <img src="https://www.rappler.com/tachyon/2021/08/pinoy-veggies-carousel.jpg" class="img"></img>
                <img src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg" class="img"></img>
                <img src="https://images.theconversation.com/files/467055/original/file-20220605-59095-c54dkr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" class="img"></img>
              </div>
            </div>
            <div id="section2" class="section2">
              <div class="container">
                <div class="items">
                  <div class="img img1"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carrot-overhead-group-lined-up-on-old-brown-wooden-royalty-free-image-625009188-1564523268.jpg?crop=0.66635xw:1xh;center,top&resize=480:*" alt="" onclick=""></img></div>
                  <div class="name">CARROTS</div>
                  <div class="price">PHP 150</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button>
                </div>
              </div>
              
                <div class="items">
                  <div class="img img1"><img src="https://healthyfamilyproject.com/wp-content/uploads/2020/05/Potatoes-background.jpg" alt=""></img></div>
                  <div class="name">POTATO</div>
                  <div class="price">PHP 110</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button>
                  </div>
                </div>

                <div class="items">
                <div class="img img1"><img src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""></img></div>
                  <div class="name">SPINACH</div>
                  <div class="price">PHP 70</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button>
                  </div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.earthboundfarm.com/wp-content/uploads/2020/01/EBF_BroccoliFloretsBag-020-2.png" alt=""></img></div>
                  <div class="name">BROCOLLI</div>
                  <div class="price">PHP 500</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.realsimple.com/thmb/k2Ycnc_DwzecZ09KuqGIPT12Rec=/1500x1500/smart/filters:no_upscale():focal(1079x704:1081x706)/health-benefits-of-garlic-2000-482c21fd2d154102a9b7a46ccb34e70a.jpg" alt=""></img></div>
                  <div class="name">GARLIC</div>
                  <div class="price">PHP 280</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.grocery.coop/sites/default/files/Winter_Squash_Guide.jpg" alt=""></img></div>
                  <div class="name">SQUASH</div>
                  <div class="price">PHP 60</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://sc04.alicdn.com/kf/U8fd7f440c64b43918bce89ee011ad654X.jpg" alt=""></img></div>
                  <div class="name">Moringa leaf</div>
                  <div class="price">PHP 10</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>
                
                <div class="items">
                  <div class="img img1"><img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-kale-1296x728-feature.jpg?w=1155&h=1528" alt=""></img></div>
                  <div class="name">KALE</div>
                  <div class="price">PHP 699</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.realsimple.com/thmb/8_fTzsUyCQd9idgKcMfwfaAA2zs=/2000x1500/filters:fill(auto,1)/fresh-peas-2000-645ca42563c14816a9eeaf57abb177a3.jpg" alt=""></img></div>
                  <div class="name">GREEN PEAS</div>
                  <div class="price">PHP 70</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://post.healthline.com/wp-content/uploads/2020/08/swiss-chard-benefits-1200x628-facebook-1200x628.jpg" alt=""></img></div>
                  <div class="name">SWISS CHARD</div>
                  <div class="price">PHP 170</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/277432_2200-1200x628.jpg" alt=""></img></div>
                  <div class="name">BEETS</div>
                  <div class="price">PHP 150</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://images.everydayhealth.com/images/a-detailed-guide-to-asparagus-alt-1440x810.jpg" alt=""></img></div>
                  <div class="name">ASPERAGUS</div>
                  <div class="price">PHP 90</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg?quality=90&webp=true&resize=556,505" alt=""></img></div>
                  <div class="name">RED CABBAGE</div>
                  <div class="price">PHP 200</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/800px-Ipomoea_batatas_006.JPG" alt=""></img></div>
                  <div class="name">SWEET POTATO</div>
                  <div class="price">PHP 280</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://ph-test-11.slatic.net/p/45da1dc41e9ed173eaa52896606ab0c3.jpg" alt=""></img></div>
                  <div class="name">MANGO "NOT RIPE"</div>
                  <div class="price">PHP 200</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.tasteofhome.com/wp-content/uploads/2019/05/mangos-shutterstock_1090910984.jpg?fit=700,700" alt=""></img></div>
                  <div class="name">MANGO "RIPE/ YELLOW"</div>
                  <div class="price">PHP 280</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://cdn2.momjunction.com/wp-content/uploads/2021/05/Dragon-Fruit-For-Babies-Benefits-Precautions-And-Recipes.jpg" alt=""></img></div>
                  <div class="name">DRAGON FRUIT</div>
                  <div class="price">PHP 300</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business.jpg" alt=""></img></div>
                  <div class="name">ORANGE</div>
                  <div class="price">PHP 200</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://post.healthline.com/wp-content/uploads/2020/10/apple-basket-apples-732x549-thumbnail-732x549.jpg" alt=""></img></div>
                  <div class="name">APPLE</div>
                  <div class="price">PHP 200</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://cdn.shopify.com/s/files/1/0513/3428/3424/products/FRU0132-1.jpg?v=1613664395" alt=""></img></div>
                  <div class="name">PEACH</div>
                  <div class="price">PHP 210</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://sc04.alicdn.com/kf/U35a21ffdb24249cfaeda2a0c565262271.jpg" alt=""></img></div>
                  <div class="name">WATERMELON</div>
                  <div class="price">PHP 200</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Collard-Greens-Bundle.jpg" alt=""></img></div>
                  <div class="name">COLLARD GREEN</div>
                  <div class="price">PHP 190</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://www.thespruce.com/thmb/ytib4VInPZib3zD8Ur-2mCt-tHk=/3130x3130/smart/filters:no_upscale()/how-to-grow-cauliflower-1403494-hero-76cf5f524a564adabb1ac6adfa311482.jpg" alt=""></img></div>
                  <div class="name">CAULIFLOWER</div>
                  <div class="price">PHP 180</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://images.immediate.co.uk/production/volatile/sites/30/2017/01/avocado-45bccf2-scaled.jpg" alt=""></img></div>
                  <div class="name">AVOCADO</div>
                  <div class="price">PHP 170</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://cdn.britannica.com/85/118285-050-70E3BCFE/Bok-choy-form-cabbage-Chinese.jpg" alt=""></img></div>
                  <div class="name">CHINESE CABBAGE</div>
                  <div class="price">PHP 160</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg" alt=""></img></div>
                  <div class="name">CORN</div>
                  <div class="price">PHP 150</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://cdn.shopify.com/s/files/1/0374/6293/3644/products/7E9645A3-6CFE-4063-861C-A5A4FF6A0A17_530x@2x.jpg?v=1586099207" alt=""></img></div>
                  <div class="name">PINEAPPLE</div>
                  <div class="price">PHP 210</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://m.media-amazon.com/images/I/413Q+GBBZWL.jpg" alt=""></img></div>
                  <div class="name">BANANA</div>
                  <div class="price">PHP 150</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://thumbs.dreamstime.com/z/chicken-9138381.jpg" alt=""></img></div>
                  <div class="name">CHICKEN</div>
                  <div class="price">PHP 220</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://post.healthline.com/wp-content/uploads/2020/05/raw-pork-cutlet-732x549-thumbnail-732x549.jpg" alt=""></img></div>
                  <div class="name">PORK</div>
                  <div class="price">PHP 280</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

                <div class="items">
                  <div class="img img1"><img src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/stock%2FGettyImages-499422402_copy" alt=""></img></div>
                  <div class="name">BEEF</div>
                  <div class="price">PHP 410</div>
                  <div class="info">Per Kilogram</div>
                  <div class="info"> 
                  <button class="homebtn" >Add to cart</button></div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer>
          <div id="footer" class="footer0">
            <h1>Agriculture App | ELWEB</h1>
          </div>
            Connect with us @
          <div class="row1 col">
              <a href="#" class="google btn1"><i class="fa fa-google-plus fa-fw"></i>  |  Google</a>
              <a href="#" class="git btn1"><i class="fa fa-gitlab fa-fw"></i>  |  GITlab</a>
              <a href="#" class="fb btn1"><i class="fa fa-facebook-official fa-fw"></i>  |  Facebook</a>
              <a href="#" class="twitter btn1"><i class="fa fa-twitter fa-fw"></i>  |  Twitter</a>
              <a href="#" class="linkedin btn1"><i class="fa fa-underline fa-fw"></i><i class="fa fa-codiepie fa-fw"></i>  | UC-Banilad</a>
              <a href="#" class="google btn1"><i class="fa fa-youtube-play fa-fw"></i>  |  Youtube</a>
          </div>

          <div class="footer2">
            <div class="product">
              <div class="heading">Products</div>
              <div class="div">Sell from your farm</div>
              <div class="div">Advertise</div>
              <div class="div">Pricing</div>
              <div class="footer-link">
              <a class="text-color-3" href="/invest">Invest to Farmers</a>
              </div>
            </div>
            <div class="services">
              <div class="heading">Services</div>
              <div class="div">Return</div>
              <div class="div">Cash Back</div>
              <div class="div">Affiliate Marketing</div>
              <div class="div">Others</div>
            </div>
            <div class="Company">
              <div class="heading">Company</div>
              <div class="div">Complaint</div>
              <div class="div">Careers</div>
              <div class="div">Affiliate Marketing</div>
              <div class="div">Support</div>
            </div>
            <div class="Get Help">
              <div class="heading">Get Help</div>
              <div class="div">Help Center</div>
              <div class="div">Privacy Policy</div>
              <div class="div">Terms</div>
              <div class="div">Login</div>
            </div>
          </div>
          <div class="footer3">Copyright © <h4>Agriculture@App</h4> 2022-2023</div>
        </footer>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <script src="javapp.js"></script>
      </body>
      </html>);
}

export default Home;
