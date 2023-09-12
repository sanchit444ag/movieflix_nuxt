<template>
    <div class="img">
        <marquee class="mar" width="100%" direction="left" height="100px" scrollamount="20">
            USERS REGISTER FOR UNLIMITED ENTERTAINMENT(LUCKY USERS WILL GET DISCOUNT OF 20%)
            </marquee>
    <div class="login-form">
        
        <form class="form1">
            <h1 class="head">New-User Registeration</h1>
            <label class="lab" for="username">Username:</label>
        <br>
         <input type="username" class="em" placeholder="username" required>
         <br>
         <label class="lab" for="email">Email:</label>
         <br>
         <input type="email" class="em" placeholder="name@example.com" required>
         <br>
         <label class="lab" for="password">Password:</label>
        <br>
         <input type="password" class="pass" placeholder="password" required>
         <br>
         <label class="lab" for="password">Confirm Password:</label>
        <br>
         <input type="password" class="pass" placeholder="password" required>
         <br>
         
         <button class="btn1">Sign-up</button>
        </form>
    </div>
    </div>
</template>
<style scoped>
.mar{
    color:black;
    font-family: fantasy;
    font-size: x-large;
    
}
.form1{
    background-image: url("/images/linear.avif");
    width:800px;
    height:700px;
    position:relative;
    top:-15%;
    
}
.head{
    color:white;
    display: flex;
    justify-content:center;
    font-family: cursive;
}
.img{
    
    height: 100%;
    background-position: center;
    background-size: cover;
}

.login-form{
    display:flex;
    justify-content: center;
    align-items: center;
    border: 10px;
    border-color: black;
   padding-bottom:50px;
    
}

.em{
    padding:10px;
    margin:10px;
    -webkit-box-sizing: border-box;
    box-sizing:content-box;
    border-radius: 8px;
    width:90%;
    
    

    
}
.pass{
    padding:10px;
    margin:10px;
    -webkit-box-sizing: border-box;
    box-sizing:content-box;
    border-radius: 8px;
    width:90%;

}

.lab{
    color:white;
    margin:10px;
    padding:10px;
}
.btn1 {
 width: 130px;
 height: 40px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #e20505;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
 position:relative;
 top:5%;
 left:1%;
}

.btn1:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px #f85959,
  0 15px 0 -4px #39a2db,
  0 16px 10px -3px #39a2db;
}

.btn1:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px #f85959,
  0 8px 0 -4px #39a2db,
  0 12px 10px -3px #39a2db;
}

</style>