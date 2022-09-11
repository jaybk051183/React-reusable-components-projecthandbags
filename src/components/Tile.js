import React from 'react';

function Tile({title, img, children, imgTitle}) {
        return(
            <section>
                <img src={img} alt={imgTitle}/>
                <h2>{title}</h2>
                {children}
            </section>


        )

}

export default Tile;