import React from 'react'
import PropTypes from "prop-types";

function Price({ pucharsePrice, oryginalPrice }) {

    oryginalPrice = oryginalPrice / 100;
    pucharsePrice = pucharsePrice / 100;
    // oryginalPrice<pucharsePrice?
    return (
        <div>
            {oryginalPrice === 0 ? null :
                <>
                    <b className="text-xl mb-2 line-through">{oryginalPrice} zł</b><br />
                </>
            }
            <b className="text-xl mb-2 ">{pucharsePrice} zł</b>
        </div>
    )
}

export default Price

Price.propTypes = {
    oryginalPrice: PropTypes.number,
    pucharsePrice: PropTypes.number,
};
