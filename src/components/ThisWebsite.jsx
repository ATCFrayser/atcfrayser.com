export function ThisWebsite(){
  return <section>
  <div class="thisWebsite">
      <h1>This Website</h1>
  </div>
  <div class="container-fluid">
      <div class="row">
          <div class="col">
              <h2>This webite was first built in Node and Express.</h2>
          </div>
          <div class="col">
              <img class="aboutImgRight" src="assets/images/siteNodeExpress.png" alt="Express" />
          </div>
      </div>
  </div>
  <div class="container-fluid">
      <div class="row">
          <div class="col">
                  <img class="aboutImgLeft" src="assets/images/siteReact.png" alt="React" />
          </div>
          <div class="col">
              <h2>Then, I redesigned it in React.</h2>
          </div>
      </div>
      <div class="container-fluid">
          <div class="row">
              <div class="col">
                  <h2>It uses APIs and outside libraries.</h2>
              </div>
              <div class="col">
                  <img class="img-fluid aboutImgRight" src="assets/images/siteAxios.png" alt="Axios" />
                  <img class="img-fluid aboutImgRight" src="assets/images/siteAPI.png" alt="API" />
              </div>
          </div>
      </div>
  </div>
</section>
}