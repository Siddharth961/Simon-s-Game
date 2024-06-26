let task = "";
let ans = "";
let num;
let level = 1;
let start = true;
let colors = ["green","red","yellow","blue","wrong"]

$(document.querySelector('button')).on("click",function(){
    if(start){
        $("h1").text("Level   " + level)
        
        setTimeout(function(){

            nextSequence();
        },500)
        start = false;
    }
})


function nextSequence(){
    num = Math.floor(Math.random()*4);
    task += num;
    
    
    for(let k=0; k<task.length; k++){
        sequence_delay(k);        
    }
    function sequence_delay(k){
        
        setTimeout(function(){
            $("#" + task[k]).fadeOut(100).fadeIn(100);
            sound(task[k]);
        },500*k)
    }
    ans = []
    
}

$(".box").click(function(){
    clicked = $(this).attr("id");
    pressed(clicked);
    
})

function pressed(clicked){
    $("#" + clicked).addClass("effect");
    setTimeout(function(){
        $("#" + clicked).removeClass("effect")
    },300)
    

    ans += clicked;
    sound(clicked);
    
    check();
}

function check(){
    let len = ans.length-1;
    if(ans.charAt(len) == task.charAt(len)){
        if(ans.length==task.length){
        
            level++;
        setTimeout(function(){
            $("h1").text("Level   " + level)
            
        },500)
        
        setTimeout(function(){
            
            nextSequence();
        },1000)
        
    }
}

    else{
        $(".main").fadeTo("slow",0.6).fadeTo("fast",1)
        
        $("h1").text("Game Over, to restart press")
        sound(4);
        sound(4);
        sound(4);
        sound(4);
        startover();
    }
    

}


function sound(index){
    
    let audio = new Audio(colors[index] + ".mp3");
    audio.play();
}

function startover(){
    task = [];
    start = true;
    level = 1;
}
