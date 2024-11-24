let count= 0;

document.getElementById("decrement").onclick=function()

 {
    count-=1;
    if(count<0)
        {
            count=0;
        }
 document.getElementById("counterlable").innerText=count;
}


 document.getElementById("increment").onclick=function()
 {
    count+=1;
    document.getElementById("counterlable").innerText=count;
 }