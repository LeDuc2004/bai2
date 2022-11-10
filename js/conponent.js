const conponent = {};
conponent.registerPage = ` 
<form action="" id="registerForm">
<div class="cha">
    <div>
        <div class="father"> <div class="logo">
        <a href="wed.html">
          <img
            style="width: 200px; padding: 10px 10px"
            src="https://animehay.club/themes/img/logo.png"
            alt="logo animehay"
          />
        </a>
      </div>
    <h3 > Đăng Ký </h3>
    
    <div >
        <i  class="fa-solid fa-user"></i>
        <input name="username" style="padding-left: 15px;margin-bottom:5px" id="tk" type="text" placeholder="Tên tài khoản" ><br>
        <span  style="color:red" id="spantk"><em><h4></h4></em></span>  
    </div> 
    <div >
        <i  style="cursor:pointer ;" class="fa-solid fa-envelope"></i>
        <input name="email" style="padding-left: 15px;margin-bottom:5px" id="email"  type="text" placeholder="email..."><br>
        <span  style="color:red" id="spanemail"><em><h4></h4></em></span>
    </div>
    <div >
        <i  style="cursor:pointer ;" id="icon" onclick="showPassword()" class="fa-solid fa-eye"></i>     
        <input name="password" style="padding-left: 15px;margin-bottom:12px" id="mk" type="password" placeholder="mật khẩu"><br>
        <span  style="color:red"  id="spanmk"></span>
        </div>
      <div >
        <i  style="cursor:pointer ;" id="iconClose" onclick="showConfirmPassword()" class="fa-solid fa-eye"></i>
        <input name="confirmPassword" style="padding-left: 15px;margin-bottom:12px"  id="remk" type="password" placeholder="xác nhận mật khẩu"><br>
       <span  style="color:red" id="spanremk"></span> 
       </div> 
    
   
       
    
    <div id="btnsuccess"> 
        <button type="submit" id="success" onclick="register()" style="cursor:pointer ;width : 150px;height: 40px;border-radius: 30px;margin-top: 40px;" > <h5>Tạo tài khoản</h5> </button>
        <p style="margin-bottom:0" >or</p>
        <button id="redirectLogin" style="width: 100px;height: 30px;border-radius: 30px;cursor: pointer;">Đăng nhập</button>
    </div>
   
</div>
</div> 
</form>

`
conponent.loginPage = ` 

<div id="registerForm">
<form action="" id="loginForm" >
<div class="cha">
    <div>
        <div class="father"> <div class="logo">
        <a href="wed.html">
          <img
            style="width: 200px; padding: 10px 10px"
            src="https://animehay.club/themes/img/logo.png"
            alt="logo animehay"
          />
        </a>
      </div>
    <h3 > Đăng nhập </h3>

    <div >
        <i  style="cursor:pointer ;" class="fa-solid fa-envelope"></i>
        <input name="email" style="padding-left: 15px;margin-bottom:5px" id="email"  type="text" placeholder="email..."><br>
        <span  id="spanemail" style="color:red"><em><h4></h4></em></span>
    </div>
    <div >
        <i  style="cursor:pointer ;" id="icon" onclick="showPassword()" class="fa-solid fa-eye"></i>     
        <input name="password" style="padding-left: 15px;margin-bottom:12px" id="mk" type="password" placeholder="mật khẩu"><br>
        <span  style="color:red"  id="spanmk"></span>
        </div>
    
    <div id="btnsuccess"> 
        <button type="submit" id="success" onclick="register()" style="cursor:pointer ;width : 150px;height: 40px;border-radius: 30px;margin-top: 40px;" > <h5>Đăng nhập</h5> </button>
        <p style="margin-bottom:0" >or</p>
        <button id="outregister" style="width: 100px;height: 30px;border-radius: 30px;cursor: pointer;">Đăng ký</button>
    </div>
   
</div>
</div> 
</form>
</div>

`
conponent.wellcomePage = `
<div id="khungchat">
<div></div>
<div id="table" >

<div id="title" style="display:flex;justify-content: space-between;"> <div style="margin-left:140px"> JS09-chatPage </div> <i onclick="btnChat2()" style="font-size: 20px;cursor: pointer;" class="fa-sharp fa-solid fa-xmark"></i></div>

<div id="spaceChat" class="list-content">

 


</div>
<div style="display:flex ;" id="valueInputForm">
    <span><i class="fa-solid fa-circle-plus"></i></span>
    <span><i class="fa-regular fa-image"></i></span>
<form id="cc">
    <span><i class="fa-solid fa-face-smile"></i></span>
    <input onclick="tranform()"  id="infoInput" name="valueInput" type="text" placeholder="Nhập tin nhắn">
    
    <span onclick="btnChat1()" style="display:"  id="btnSend" class="btnSend" type="submit"   ><i class="fa-solid fa-circle-chevron-right"></i></span>
 </form>
</div>
</div>
</div>








`