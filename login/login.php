<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect("localhost","root","","haochedai",3306);
mysqli_query($conn,"SET NAMES UTF8");
@$uid=$_REQUEST["uid"];
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
@$email=$_REQUEST["email"];
@$phone=$_REQUEST["phone"];
$sql="SELECT * FROM users where uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row==true){
	$uid=$row['uid'];
	echo '{"code":1,"msg":"登录成功","uid":'.$uid.'}';
}else{
    echo '{"code":-1,"msg":"用户名或密码错误"}';
}
?>