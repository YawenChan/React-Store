import {React,useEffect,useState} from 'react';
import axios from 'commons/axios';
import Product from 'components/Product'
import Toolbox from 'components/Toolbox';
import { jsonDataRun } from 'commons/helper';




function Products(props) {
    const[getData,setGetData] = useState(jsonDataRun(jsonDataRun));
    useEffect(() =>{
        axios.get('http://localhost:3003/products').then((response)=>{
            setGetData(response.data)
        })
    },[])

    const search = text =>{
        // console.log(text);
        let searchResults = [...getData]
        // console.log(searchResults)
        searchResults = searchResults.filter(p => {
             const matchArray = p.name.match(new RegExp(text, 'gi'))
             console.log(matchArray)

             return(
                 !!matchArray
             ) 
            
        })
        setGetData(searchResults)
        console.log(getData);
    }

  return (
    <>
    <div>
        <Toolbox
            search={search}
        />
        <div className='products'>
            <div className="columns is-multiline is-desktop">
            {
            getData.map( p =>{
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

    </>
  )
}

Products.propTypes = {}

export default Products




