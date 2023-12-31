let string="";

let back_button=document.querySelector(".back_btn");

back_button.addEventListener("click", function(event){
    string=string.slice(0,-1);
    document.querySelector(".inp").value=string;
})

document.addEventListener("keydown", function(event){

    let abc=document.querySelector(".btn");
    

    if(event.key=="Backspace")
    {
        document.querySelector("#backbt").classList.add("button_clicked");
        string=string.slice(0,-1);
        document.querySelector(".inp").value=string;
        setTimeout(function(){document.querySelector("#backbt").classList.remove("button_clicked");}, 100);
    }
    else if(event.key=="=")
    {
        document.querySelector("#equalbt").classList.add("button_clicked");
        string=eval(string);
        document.querySelector(".inp").value=string;
        setTimeout(function(){document.querySelector("#equalbt").classList.remove("button_clicked");}, 100);
    }
    else if(event.key=="c")
    {
        document.querySelector("#acbt").classList.add("button_clicked");
        document.querySelector(".inp").value="";
        string="";
        setTimeout(function(){document.querySelector("#acbt").classList.remove("button_clicked");}, 100);
    }
    else if(event.key=="%" || event.key=="/" || event.key=="*" || event.key=="-" || event.key=="+" || event.key==".")
    {
        var x=string.length;
        if(string[x-1]!='%' && string[x-1]!='/' && string[x-1]!='*' && string[x-1]!='-' && string[x-1]!='+' && string[x-1]!='.')
        {
            string+=event.key;
            document.querySelector(".inp").value=string;
        }
    }
    else if((event.key>="0" && event.key<="9") || event.key=="(" || event.key==")")
    {
        string+=event.key;
        document.querySelector(".inp").value=string;
    }
});


let buttons=document.querySelectorAll(".btn");
for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener("mouseenter", function(){
        buttons[i].classList.add("button_hover");
    });
    buttons[i].addEventListener("mouseleave", function(){
        buttons[i].classList.remove("button_hover");
    });

    buttons[i].addEventListener("click", function(event){

        buttons[i].classList.add("button_clicked");
        var temp=event.target.textContent;
        if(temp=="=")
        {
            string=eval(string);
            document.querySelector(".inp").value=string;
        }
        else if(temp=="AC")
        {
            document.querySelector(".inp").value="";
            string="";
        }
        else if(temp=="%" || temp=="/" || temp=="*" || temp=="-" || temp=="+" || temp==".")
        {
            var x=string.length;
            if(string[x-1]!='%' && string[x-1]!='/' && string[x-1]!='*' && string[x-1]!='-' && string[x-1]!='+' && string[x-1]!='.')
            {
                string+=temp;
                document.querySelector(".inp").value=string;
            }
        }
        else
        {
            string+=event.target.textContent;
            document.querySelector(".inp").value=string;
        }

        setTimeout(function(){buttons[i].classList.remove("button_clicked");},100);
        
    });
}

let dark_button=document.querySelector(".dark_mode_button");

dark_button.addEventListener("mouseenter", function(){
    dark_button.classList.add("dark_mode_button_hover");
})
dark_button.addEventListener("mouseleave", function(){
    dark_button.classList.remove("dark_mode_button_hover");
})

dark_button.addEventListener("click", function(){

    dark_button.classList.add("dark_mode_button_clicked");
    setTimeout(function(){dark_button.classList.remove("dark_mode_button_clicked");},100);

    document.querySelector("body").classList.toggle("body_dark");
    document.querySelector(".main_sub").classList.toggle("main_sub_dark");
    
    let arr=document.querySelectorAll(".btn");
    for(let i=0; i<arr.length; i++)
    {
        arr[i].classList.toggle("btn_dark");
    }

    let arr1=document.querySelectorAll(".op");
    for(let i=0; i<arr1.length; i++)
    {
        arr1[i].classList.toggle("op_dark");
    }

    document.querySelector(".back_btn").classList.toggle("op_dark");
    document.querySelector(".equal_btn").classList.toggle("op_dark");

    document.querySelector(".ac_btn").classList.toggle("ac_btn_dark");
    document.querySelector(".inp").classList.toggle("inp_dark");

    if(dark_button.dataset.mode==='light')
    {
        dark_button.innerHTML = '<i class="fa-solid fa-sun"></i>';
        dark_button.classList.toggle("dark_mode_button1");
        dark_button.dataset.mode = 'dark';
    }
    else if(dark_button.dataset.mode==='dark')
    {
        dark_button.innerHTML = '<i class="fa-solid fa-moon"></i>';
        dark_button.classList.toggle("dark_mode_button1");
        dark_button.dataset.mode = 'light';
    }
});

let drop_down_menu=document.querySelector(".arrow_btn");

drop_down_menu.addEventListener("mouseenter", function(){
    drop_down_menu.classList.add("arrow_button_hover");
})
drop_down_menu.addEventListener("mouseleave", function(){
    drop_down_menu.classList.remove("arrow_button_hover");
})

drop_down_menu.addEventListener("click", function(){
    let xyz=document.querySelector(".abc");
    xyz.classList.toggle("abc_hidden");

    let pqr=document.querySelector(".my_buttons");
    pqr.classList.toggle("my_buttons2");

    let pqr1=document.querySelector(".last_row");
    pqr1.classList.toggle("last_row1");

    if(drop_down_menu.dataset.mode==='collapsed')
    {
        drop_down_menu.innerHTML = '<i class="fa-solid fa-angle-down fa-flip-both fa-lg"></i>';
        drop_down_menu.dataset.mode = 'opened';
    }
    else if(drop_down_menu.dataset.mode==='opened')
    {
        drop_down_menu.innerHTML = '<i class="fa-solid fa-angle-down fa-lg"></i>';
        drop_down_menu.dataset.mode = 'collapsed';
    }
});

document.querySelector(".squre_root_btn").addEventListener("click", function(){
    string+="Math.sqrt(";
    document.querySelector(".inp").value+="√(";
});