var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle()
{
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }
}

/* JS For product gallery */

var productimg = document.getElementById("productimg");
var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function()
{
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function()
{
    productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function()
{
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function()
{
    productimg.src = smallimg[3].src;
}