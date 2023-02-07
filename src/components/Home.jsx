import useFetch from "./useFetch";

export function Home() {
  const { data, loading, error } = useFetch("https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=-104.9903&appid=32d0e9db714ebb10af4f1549705568dd");



  var today = new Date().toLocaleTimeString();

  if (loading) console.log('loading');
  if (error) console.log(error);

  return <>
  <section>
    <div className="topSection">
      <h1>Hello, world,</h1>
      <h1>I'm Andrew!</h1>
    </div>
    <div className="containerFluid" style={{width: "100%"}}>
      <div className="row">
          <div className="col" style={{padding: "5%"}}>
              <h2>I'm a Flutter programmer with experience in multiple programming languages, with a focus on Web Developement languages. I’m seeking to further my career in the technology field and complete more projects. I’m a self starter with experience working alone and on small teams.</h2>
          </div>
      <div className="col">
        <div className="weatherCard">
        <div className="row">
        <div className="col">
        <img src={'http://openweathermap.org/img/wn/' + data?.weather[0].icon + '@2x.png'} className="img-fluid" alt="Weather IMG" />
        </div>
        <div className="col">
        <h2> The current forcast calls for {data?.weather[0].description} in {data?.name}, my hometown.
        </h2>
        </div>
        <h2>Checked at { today }</h2>
        </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</>
}