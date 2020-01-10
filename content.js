//content.js
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if(request.message === "clicked_browser_action"){

            // this turns all <a href = ""></a> to the original color that is supposed
            // to be (after clicking on the website previously, the color sometimes changes when you go
            // back to the article due to caching. 

            //.ready = The ready event occurs when the DOM (document object model) has been loaded.

            $(document).ready(function(){
                $("a[href^='http']").attr("href", {color: ""});
            })
        }
    }
);
