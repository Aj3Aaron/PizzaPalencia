import "../styles/ubicacion.css"


function Ubicacion(){

    const lat = 10.125344815487992;
    const long = -68.01824417735207;

    return(
        <section id="ubicacion">
            <h1 className="h1-ubicacion">Encuentranos</h1>
            <div className="div-map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.6551579491743!2d-68.01824338196568!3d10.12535702595356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA3JzM4LjIiTiA2OMKwMDEnMDYuMCJX!5e0!3m2!1ses-419!2sus!4v1700510165832!5m2!1ses-419!2sus" width="" height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                {/* <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.182746012208!2d-68.01832405932!3d10.127286907535312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786887ba670c239%3A0x4b11604ef30e311b!2sCentro+Milanello!5e0!3m2!1ses!2sve!4v1547412780213"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
            </div>
        </section>
    )
}

export default Ubicacion;

// 10.12535702595356, -68.01824338196568