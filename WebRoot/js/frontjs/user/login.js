//前台的js简单校验
function checkForm() {
    // 校验用户名
	var username = document.getElementById("username").value;
	if(username == null || username == ''){
		alert("用户名不能为空!");
		return false;
	}
	// 校验密码
	var password = document.getElementById("password").value;
	if(password == null || password == ''){
		alert("密码不能为空!");
		return false;
	}
    //检验邮箱格式
	var email = document.getElementById("email").value;
	if(email==null || email==""){
		alert("邮箱不能为空!");
		return false;
	}else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)){
		alert("错误的邮箱格式!");
		return false;
	}
    var verifycode = document.getElementById("verifycode").value;
	if(verifycode == null || verifycode == ''){
		alert("验证码不能为空!");
		return false;
	}
	return true;
}

//当获得焦点时进行用户名提示
function tipUsername(){
    $('#s2').tooltip('hide');
    $('#s3').tooltip('hide');
    $('#s4').tooltip('hide');
    $('#s5').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#username').tooltip('toggle');
}
//当获得焦点时进行密码提示
function tipPassword(){
    $('#s3').tooltip('hide');
    $('#s4').tooltip('hide');
    $('#s5').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#password').tooltip('toggle');
}
//当获得焦点时进行Email提示
function tipEmail(){
    $('#s1').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#email').tooltip('toggle');
}
//当获得焦点时进行验证码提示
function tipVerifyCode(){
    $('#s1').tooltip('hide');
    $('#s2').tooltip('hide');
    $('#verifycode_input').tooltip('toggle');
}

//当失去焦点检验用户名
function checkUsername(){
	// 获得文件框值:
	var username = document.getElementById("username").value;
	if(username==""){
        $('#s1').tooltip('toggle');
	}else{
        $('#s1').tooltip('hide');
    }
}

//当失去焦点检验密码框
function checkPassword(){
	// 获得文件框值:
	var password = document.getElementById("password").value;
	if(password==""){
		$('#s2').tooltip('toggle');
	}else{
        $('#s2').tooltip('hide');
    }
}
//当失去焦点检验邮箱
function checkEmail(){
	var email = document.getElementById("email").value;
	
	if(email==""){
		$('#s3').tooltip('toggle');
	}else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)){
		$('#s4').tooltip('toggle');
	}else{
		$('#s5').tooltip('toggle');
	}
}

//当失去焦点检验验证码
function checkVerifyCode(){
	var verifycode = document.getElementById("verifycode_input").value;
	if(verifycode==""){
		$('#s6').tooltip('toggle');
	}else{
        $('#s6').tooltip('hide');
    }
}

$(function () {
    $(".tooltip-options span").tooltip({html : true });
});






