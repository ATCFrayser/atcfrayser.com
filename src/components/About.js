export function About(){
    
    const aboutStyle = {
        padding: "2%"
    }

return <section>
    <div class="topSection">
        <h1>About: My work history</h1>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col" style={aboutStyle}>
                <h2>I have a lot of management experience, including experience in project management.</h2>
            </div>
            <div class="col" style={aboutStyle}>
                <img class="aboutImgRight" src="assets/images/managementHistory.png" alt="managementHistory" />
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col" style={aboutStyle}>
                    <img class="aboutImgLeft" src="assets/images/ITHistory.png" alt="managementHistory" />
            </div>
            <div class="col" style={aboutStyle}>
                <h2>I've been involved with IT work for a long time. I've always had a knack for computers. Now, I'm pushing forward with a career in code.'</h2>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col" style={aboutStyle}>
                    <h2>I've completed many online courses, completed coding projects mostly in JavaScript, Flutter and Python. Currently working on personal projects.</h2>
                </div>
                <div class="col" style={aboutStyle}>
                    <img class="img-fluid aboutImgRight" src="assets/images/flutterCert.png" alt="managementHistory" />
                </div>
            </div>
        </div>
    </div>
</section>
}