import React from 'react';
import axios from 'axios';
import Product from 'components/Product'
import Toolbox from 'components/Toolbox';

class Products extends React.Component {

    state = {
        products : [],
    }

    componentDidMount() {
        axios.get('http://localhost:3003/products').then(response => {
            // console.log(response)
            this.setState({
                products:response.data
            })
        })
    }

    render(){
        // console.log(this.product.name)
        return(
            <div>
                <Toolbox/>
                <div className='products'>
                <div className="columns is-multiline is-desktop">
                {
                    this.state.products.map( p =>{
                        return(
                            <div className="column is-3" key={p.id}>
                                <Product
                                    product={p}
                                />
                            </div>
                        )
                    }
                    )
                }
                </div>
                    

                </div>

            </div>

        )
    }
}

export default Products;