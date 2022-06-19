import React from 'react';
import Header from 'components/Header'
import Products from 'components/Products'

class App extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         isLike:false
    //     }
    // }
    state={
        isLike:false,
        count:0
    }
    handleClick = () => {
        this.setState({
            isLike: !this.state.isLike,
            count: this.state.count + 1
        });
        // callback函式
        this.setState(prevState => {
            return {
                count:prevState.count + 2
            }
        })
    }

    render(){
        return(
            <div className='main'>
                <Header
                    nickname="Admin"
                    age={28} 
                    marry={true}
                />
                <Products/>


                    {/* 點讚state */}
                    <div className='control'>
                        <button className="button is-fullwidth is-link" onClick={this.handleClick}>
                            {this.state.isLike ? 'No' : '👍'}
                        </button>
                    </div>

            </div>
        )
    }
}

export default App;