<template>
<div class="bg">
<div class="con-img">
   <div>
    <img src="/images/contact2.jpg" class="img1">
</div>
<div class="bb">
    <h2>Fill to Contact</h2>
    <p>54, jabahar nagar</p>
    <p>bareilly,UP 243003</p>
    <p>Contact: 8126823346</p>
    <p>Email: sanchit444ag@gmail.com</p>
    <form class="form2" >
        <label class="lab" for="name">Name</label>
         <br>
         <input type="Name" class="em" placeholder="name" required>
         <br>
         <label class="lab" for="email">email</label>
        <br>
         <input type="email" class="em" placeholder="name@example.com" required>
         <br>
         <label class="lab" for="message">Message</label>
         <input type="message" class="mes">
         <br>
         <button class="btn2">submit</button>
        
    </form>

</div>
</div>
</div>
</template>

<script setup>
</script>
<style>

.bb {
    display: flex;
    flex-direction: column;
      padding-top: 20px;
      padding-left: 2%;
}
.btn2 {
 width: 130px;
 height: 40px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #e20505;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
 margin-top: 20px;;
}
.btn2:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px #f85959,
  0 15px 0 -4px #39a2db,
  0 16px 10px -3px #39a2db;
}
.btn2:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px #f85959,
  0 8px 0 -4px #39a2db,
  0 12px 10px -3px #39a2db;
}
.em{
    padding:10px;
    margin:10px;
    -webkit-box-sizing: border-box;
    box-sizing:content-box;
    border-radius: 8px;
    width:850px;
    height: 20px;
}
.mes{
    padding:10px;
    margin:10px;
    -webkit-box-sizing: border-box;
    box-sizing:content-box;
    border-radius: 8px;
    width:850px;
    height:30px;
}

.con-img{
    -webkit-box-sizing: border-box;
    box-sizing:content-box;
     
    display:flex;
    flex-direction: row;
    margin:40px;
}
.img1{
    width: 800px;
    position: relative;
   
    
    
}
.bg{
    background-color: whitesmoke;
    height:61vh;
    padding-bottom:40px;
}
</style>