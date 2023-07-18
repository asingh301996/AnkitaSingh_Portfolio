var topntn= document.getElementById('go-Top');
        window.onscroll=function(){scrollfuncation()};

        function scrollfuncation(){
        if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
        {
            topbtn.style.display="block";
        }
        else
        {
            topbtn.style.display="none";
        }
        }

        function displaytop()
        {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
        }