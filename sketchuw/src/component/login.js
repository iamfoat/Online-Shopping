import React from 'react'
import './login.css';

const login = () => {




  return (
    <div>
        <form>
        <div class="login-form">
            <h1 class="form-title">ลงทะเบียน</h1>

            <form>
              <div class="input-container">
                
                <input type="text" name="firstname" id="firstname" placeholder="Firstname" required />
              </div>

              <div class="input-container">
                
                <input type="text" name="lastname" id="lastname" placeholder="Lastname" required />
              </div>

              <div class="input-container">
                
                <input type="tel" name="phone" id="phone" placeholder="Phone number" required />
              </div>

              <div class="input-container">
                
                <input type="email" name="email" id="email" placeholder="Email" required />
              </div>

              <div class="input-container">
                
                <input type="password" name="password" id="password" placeholder="Password" required />
              </div>

              

              <input type="submit" value="สมัครสมาชิก" />
            </form>

            <p>
              หากเป็นสมาชิกแล้ว <a href="#">เข้าสู่ระบบ</a>
            </p>
        </div>
    

        </form>
    </div>
    
  )
}

export default login