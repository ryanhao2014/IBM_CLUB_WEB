function getRegisterValidation(){
    //alert("complete!");
    $("#errorMessages").html("");  
    $('.errorLabel').html('').removeClass('errorLabel');  
    $.post("Register.do",$("#register").serialize(), function(json) {  
    	jsonSerialize(json,"注册成功！");
    });
}

function getLoginValidation(){
    //alert("complete!");
    $("#errorMessages").html("");  
    $('.errorLabel').html('').removeClass('errorLabel');  
    $.post("Login.do",$("#login").serialize(), function(json) {
    	jsonSerialize(json,"登录成功！");
    });
}

function jsonSerialize(json,success){
    if(json.actionErrors && json.actionErrors.length>0){//判断有没有actionErrors  
        $.each(json.actionErrors,function(index,data){  
            $("#errorMessages").append("<li>"+data+"</li>");  
        });  
        return;  
    }  
    if(json.fieldErrors && !isEmpty(json.fieldErrors)){//判断有没有fieldError
        $.each(json.fieldErrors,function(index,value){//index就是field的name,value就是该filed对应的错误列表，这里取第一个  
            $("#error_"+index).html(value[0]);  
            $("#error_"+index).addClass("errorLabel");  
        });  
        return;  
    }  
    alert(success);//既没有actionError有没有fieldError则登陆成功
}

function isEmpty(obj){//判断对象是否为空(处理Object obj = {}这种情况认为isEmpty=true)  
    for(var p in obj){  
        return false;  
    }  
    return true;  
}  