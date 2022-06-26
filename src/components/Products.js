import {React,useEffect,useState} from 'react';
import axios from 'commons/axios';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import Product from 'components/Product'
import Toolbox from 'components/Toolbox';
import { jsonDataRun } from 'commons/helper';
import Panel from 'components/Panel'



function Products(props) {
    const[getData,setGetData] = useState(jsonDataRun(jsonDataRun)); // 存完整原始資料
    const[getDataAll,setGetDataAll] = useState(jsonDataRun(jsonDataRun));  // 存變更的資料
    useEffect(() =>{
        axios.get('http://localhost:3003/products').then((response)=>{
            setGetData(response.data);
            setGetDataAll(response.data)
        })
    },[])

    const search = text =>{
        // console.log(text);
        let searchResults = [...getDataAll]
        // console.log(searchResults)
        searchResults = searchResults.filter(p => {
             const matchArray = p.name.match(new RegExp(text, 'gi'))
            //  console.log(matchArray)

             return(
                 !!matchArray
             ) 
            
        })
        setGetData(searchResults)
        // console.log(getData);
    }
    const toAdd =()=>{
        console.log(Panel)
    }
  return (
    <>
    <div>
        <Toolbox
            search={search}
        />
        <div className='products'>
            <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>

           
                {
                getData.map( p =>{
                    return(
                        <CSSTransition classNames={"product-fade"} timeout={300} key={p.id}>
                            <div className="column is-3" key={p.id}>
                                <Product
                                    product={p}
                                />
                            </div>
                        </CSSTransition>
                        )
                    }
                    )
                }

            </TransitionGroup>
            </div>
            <button className="button is-primary add-btn" onClick={toAdd}>add</button>
        </div>
    </div>

    </>
  )
}

Products.propTypes = {}

export default Products




