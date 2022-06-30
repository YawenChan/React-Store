import {React,useState,forwardRef,useImperativeHandle} from 'react'
import {render} from 'react-dom'
/* 
    1. 一次渲染，隨即調用。
    2. 裝載組件
 */
const _class ={
    true: 'panel-wrapper active',
    false:'panel-wrapper'
}

const Panel = forwardRef((props,ref)=>{
    const [xButton,setXbutton] = useState(false);

    const close =( ) =>{
        setXbutton(false)
        }
        useImperativeHandle(ref,() =>({
            open(){
                setXbutton(true)
            }
        }))


    return(
    <>
      <div className={_class[xButton]}>
        <div className="over-layer" 
        
        >
            <div className="panel">
                <div className="head">
                    <span className="close" onClick={close}>
                        x
                    </span>
                    <p className="has-text-centered">
                        Children Component
                    </p>
                </div>
            </div>
        </div>
      </div> 
    </>
    )
})

// function Panel(props) {
//     const [xButton,setXbutton] = useState(false);

//     const close =( ) =>{
//         setXbutton(false)
//         }
//     const open = () =>{
//         setXbutton(true)
//     }

//   return (
//     <>
//       <div className={_class[xButton]}>
//         <div className="over-layer" 
//         onClick={close}
//         >
//             <div className="panel">
//                 <div className="head">
//                     <span className="close" onClick={close}>
//                         x
//                     </span>
//                     <p className="has-text-centered">
//                         Children Component
//                     </p>
//                 </div>
//             </div>
//         </div>
//       </div> 
//     </>
//   )
// }

// const _div = document.createElement('div')
// document.body.appendChild(_div)

// const _panel = render(<Panel/>, _div)
// console.log(_panel)
// export default _panel
export default Panel
