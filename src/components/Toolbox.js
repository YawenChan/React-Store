import {React,useState} from 'react'

// class Toolbox extends React.Component {
function Toolbox(props) {
const [searchText,setSearchText]=useState("")
const {search}=props;

const handleChange = e => {
    const value = e.target.value;
    return(
        setSearchText(value),
        search(value)      
        )
    }
    // console.log(searchText)

const clearButton = e =>{
    return(
        setSearchText(""),
        search('')
    )
}

return(

    <div className="tool-box">
            <div className="logo-text">Store</div>
            <div className="search-box">
                <div className="field has-addons">
                    <div className="control">
                        <input type="text" className="input search-input" placeholder='Search Product'
                        value={searchText}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button"
                        onClick={clearButton}
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
                <div className="cart-box">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">(0)</span>
                </div>
    </div>
    )
}

export default Toolbox;