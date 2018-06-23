function validate()
{
    var frname=document.getElementById("firstname").value;    
    console.log(frname);
    var haslength=frname.length;
    var regexp1=new RegExp("[^a-zA-Z0-9]");
    if(regexp1.test(frname)|| frname=="" || (frname.length< 6 || frname.length >10))
    {
        alert("user name can't be empty and no special Characters allowed");
        document.getElementById("firstname").focus();        
    }
}
$(document).ready(function()
{    
        $("#password").keyup(function()
        {
            $("#result").html(checkStrength($('#password').val()))
        })
        function checkStrength(password)
        {
            var strength=0;
            if(password.length<6)
            {
                $("#result").removeClass()
                $("#result").addClass('short')
                return 'Too short'
            }
            if (password.length > 7) strength += 1
            if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
            if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
            if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1
            if(strength<2)
            {
                $("#result").removeClass()
                $("#result").addClass('Weak')
                return 'Weak'
            }
            else if(strength==2)
            {
                $("#result").removeClass()
                $("#result").addClass('good')
                return 'Good' 
            }
            else
            {
                $("#result").removeClass()
                $("#result").addClass('Strong')
                return 'Strong'
            }
        }
        $("#empid").keyup(function()
        {
            var empid=$("#empid").val();
            $("#msge").html(checkempid(empid))
        })
        function checkempid(empid)
        {   
            if(empid=='')
            {
                alert("Enter your employee id");
                $("#empid").focus();
                return false;
            }
            else if(empid.length<6 || empid.length>6)
            {
                $("#msge").removeClass()
                $("#msge").addClass('Incorrectid');
                return 'Incorrect ID';
            }
            else if(empid.length==6)
            {
                $("#msge").removeClass()
                $("#msge").addClass("correct")
                return 'Correct'
            }
        }
        $("#mobile").keyup(function()
        {
            var mobile=$("#mobile").val();
            $("#mbile").html(checkmobilenum(mobile))
        })
        function checkmobilenum(mobile)
        {
            if(mobile=="")
            {
                alert("Enter your mobile number");
                $("mobile").focus();
                return false;
            }
            else if(mobile.length<10 || mobile.length>10)
            {
                $("#mbile").removeClass()
                $("#mbile").addClass('IncorrectMobileNumber');
                return 'IncorrectMobileNumber';
            }            
            else if(mobile.length==10)
            {
                $("#mbile").removeClass()
                $("#mbile").addClass("Correctnumber");
                return 'CorrectNumber';
            }
        }
        if($('select').val()=='-')
        {
            alert("please choose an option");
            $('select').focus();
            return false;
        }
});
function checkpassword()
{
    var pswrd=document.getElementById("password");
    var pswrdmatch=document.getElementById("password_match");
    var message=document.getElementById('confirmMessage');
    var goodcolor="green";
    var badcolor="red";
    if(pswrd.value==pswrdmatch.value)
    {
        pswrdmatch.style.backgroundColor=goodcolor;
        message.style.color=goodcolor;
        message.innerHTML="Passwords match";
    }
    else
    {
        pswrdmatch.style.backgroundColor=badcolor;
        message.style.color=badcolor;
        message.innerHTML="Passwords don't match";
    } 
}