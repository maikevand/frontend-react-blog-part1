import "./Home.css"
import logo from '../../assets/logo-white.png'

function Home() {
    return (
        <>
            <main className="home-page">
                <img className="home-logo" src={logo} alt="Company logo"/>
                <h1>Wij geloven in de kracht van woorden</h1>
            </main>
        </>

    );
}

export default Home;