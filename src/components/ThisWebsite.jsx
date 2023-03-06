export function ThisWebsite(){
  return <section>
  <div className="thisWebsite topSection">
      <h1 className="paddingH">This Website</h1>
  </div>
  <div className="containerFluid thisWebsiteDiv">
      <div className="row">
          <div className="col">
              <h2>This website was first built in Node and Express.</h2>
          </div>
          <div className="col">
              <img className="aboutImgRight" src="assets/images/siteNodeExpress.png" alt="Express" />
          </div>
      </div>
      <div className="row">
          <div className="col">
                <img className="aboutImgLeft" src="assets/images/siteReact.png" alt="React" />
          </div>
          <div className="col">
              <h2>Then, it was rebuilt in React.</h2>
          </div>
      </div>
          <div className="row">
              <div className="col">
                  <h2>It uses APIs and outside libraries.</h2>
              </div>
              <div className="col">
                  <img className="img-fluid aboutImgRight" src="assets/images/siteAxios.png" alt="Axios" />
              </div>
          </div>
          <div className="row">
              <div className="col">
                <h2>Though this website is relatively simple, it contains examples of my web development abilities, as well as my ability to understand and use others' code.</h2>
              </div>
              <div className="col">
                  <img className="img-fluid aboutImgRight" src="assets/images/siteAPI.png" alt="Axios" />
              </div>
          </div>
        </div>
</section>
}