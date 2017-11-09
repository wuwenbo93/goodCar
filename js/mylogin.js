$(".send-btn .submit").click(function(e){
 e.preventDefault();
 console.log(1)
 var u=$("#uname").val();
 var p=$("#upwd").val();
 $.ajax({
  type:"GET",
  url:"../login/login.php",
  data:{uname:u,upwd:p},
	success:function(data){
     if(data.code>0){
	  sessionStorage.setItem("uid",data.uid);
	  alert("登录成功");
	  location.href="../myindex.html";
	 }else{
	  alert(data.msg);
	 }
  },
	  error:function(){
   alert("网络出现故障")
  }
 });
})