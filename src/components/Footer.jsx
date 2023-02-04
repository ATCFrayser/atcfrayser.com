export function Footer() {

    const currentYear = new Date().getFullYear();

    return (
    <footer>
    <img src='assets/images/mountainNarrow.png' className="img-fluid" alt="Mount Elbert" />
          <div className="row" style={{textAlign: "center"}}>
            <div className="col"><p>Copyright © {currentYear}</p></div>
          </div>
    </footer>
    );
}