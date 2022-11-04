const ExplorarMenu = () => {
    return (
        <>
            <div className="ExplorarMenu">
                <h2>Explorar</h2>
                <form action="/">
                    <input className="explorarInput" type="text" placeholder="Seoul.."style={{background: `url("/search-icon.png") no-repeat scroll 7px 7px`}}/>
                    <input type="submit" hidden />
                </form>
                <p>Ingresa un sentimiento, experiencia, lugar....</p>
            </div>
        </>
    )
}

export default ExplorarMenu;