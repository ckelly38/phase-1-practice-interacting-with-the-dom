let counter = 0;
document.getElementById("heart").addEventListener('click', function()
{
    //console.log("heart clicked");
    let likeselem = document.getElementsByClassName("likes")[0];
    let mylistitem = document.createElement("li");
    let mynumlikes = 0;
    //console.log("likeselem = " + likeselem);
    let mykids = likeselem.children;
    //console.log("mykids = " + mykids);
    for(let n = 0; n < mykids.length; n++)
    {
        let cnd = mykids[n];
        if (cnd.innerText.indexOf(counter + " has been liked ") == 0) mynumlikes++;
        //else;//do nothing
    }
    let msg = "" + counter + " has been liked ";
    if (mynumlikes == 0) msg += " 1 time!";
    else msg += "" + (mynumlikes + 1) + " times!";
    mylistitem.innerText = msg;
    likeselem.appendChild(mylistitem);
    //console.log("sucessfully liked it");
});

document.getElementById('comment-form').addEventListener('submit', function(event)
{
    event.preventDefault();
    //console.log("event.target = " + event.target);
    let commentInputElement = event.target.childNodes[1];
    //console.log("commentInputElement = " + commentInputElement);
    let myval = "" + commentInputElement.value;
    //console.log("myval = " + myval);
    let mylistitem = document.createElement("p");
    mylistitem.innerText = myval;
    let clist = document.getElementById("list");
    clist.appendChild(mylistitem);
    //console.log("successfully added the comment!");
    commentInputElement.innerText = "";
    commentInputElement.value = "";
});

function incTimer()
{
    counter++;
    document.getElementById("counter").innerText = counter;
}

document.getElementById("plus").addEventListener("click", incTimer);

document.getElementById("minus").addEventListener("click", function(){
    counter--;
    document.getElementById("counter").innerText = counter;
});

let myintrval = setInterval(incTimer, 1000);
let ispaused = false;
document.getElementById("pause").addEventListener("click", function()
{
    //console.log("OLD ispaused = " + ispaused);
    if (ispaused)
    {
        ispaused = false;
        myintrval = setInterval(incTimer, 1000);
        document.getElementById("pause").innerText = "pause";
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
    }
    else
    {
        ispaused = true;
        document.getElementById("pause").innerText = "resume";
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        clearInterval(myintrval);
    }
    //console.log("NEW ispaused = " + ispaused);
});
