import React from 'react';
import Product from 'components/Product'
import Toolbox from 'components/Toolbox';


class Products extends React.Component {

    render(){
        return(
            <div>
                <Toolbox/>
                <div className='products'>
                <div className="columns is-multiline is-desktop">
                    <div className="column is-3">
                        <Product
                            
                        />
                    </div>
                    <div className="column is-3">
                        <Product/>
                    </div>
                    <div className="column is-3">
                        <Product/>
                    </div>
                    <div className="column is-3">
                        <Product/>
                    </div>
                    <div className="column is-3">
                        <Product/>
                    </div>
                </div>
                    

                </div>

            </div>

        )
    }
}

export default Products;