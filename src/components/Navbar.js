import Logo from '../assets/logo.png'


const Navbar = () =>{
    return(
        <div className="Navbar">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navigation">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Packages</a>
                <a href="#">Top Deals</a>
                <a href="#">Gallery</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar