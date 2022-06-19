import {React,useState} from 'react';
import { useNavigate } from "react-router-dom"; // 跳轉頁面用function





function Login() {
const [info,setInfo]=useState({
    email:"",
    password:""
})

let navigate = useNavigate();
const handleSubmit = event =>{
    // 1. 阻止默認事件行為
        event.preventDefault();
    // 2. 獲取表單數據

    // 3. 處理登陸邏輯

    // 4. 跳轉到首頁視圖
    navigate("/")
}

// const handleChange = event =>{
//     console.log(event.target.value)
//     console.log(event.target.name)
//     console.log(info)
//     setInfo({
//         [event.target.name]:event.target.value,
//     })
// }
console.log(info)
    return(
        <>
                <div className="login-wrapper">
                    <form className='box login-box' onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="">
                                Email
                            </label>
                            <div className="control">
                                <input type="text" className='input' placeholder='Email' 
                                    value={info.email}
                                    name="email"
                                    onChange={
                                        (e) => {
                                            let newEmail={...info};
                                            newEmail.email=e.target.value;
                                            setInfo(newEmail)
                                        }
                                    }
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="" className='label'>
                                Password
                            </label>
                            <div className="control">
                                <input type="password"
                                 className='input'
                                 placeholder="password"
                                 name="password"
                                 value={info.password}
                                 onChange={
                                    (e) => {
                                            let newPassword={...info};
                                            newPassword.password=e.target.value;
                                            setInfo(newPassword)
                                        }


                                 }
                                 />
                            </div>
                        </div>
                        <div className="control">
                            <button className='button is-fullwidth is-primary' >
                            Login
                            </button>
                        </div>
                    </form>
                </div>
               
            </>
    )
}

export default Login