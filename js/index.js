 (function(){
     
    /* 搜索输入框输入文字出现删除按钮及相关动作 */
    {
        let input = s(".pisen-search-wrapper .pisen-search-input");
        let closeBtn = s(".pisen-search-wrapper .close"); 
        if(input){    
            input.addEventListener("input", function(e){
                let value = e.target.value.trim();
                if(value.length > 0) {
                    if(hasClass(closeBtn, "none")) {
                        removeClass(closeBtn, "none");
                    }
                } else {
                    if(!hasClass(closeBtn, "none")) {
                        addClass(closeBtn, "none");
                    }
                }
            }, false);
        }
        if(closeBtn){    
            closeBtn.addEventListener("touchend", function(e){
                input.value = "";
                addClass(closeBtn, "none");
            }, false)
        }
    }

    
   
    
    /*=============================================
    =            公共方法            =
    =============================================*/
    
        
    /* 元素选择 */
    
    function s(el) {
       return document.querySelector(el);
    }
    
    
    /* 添加 / 删除类 */
    
    function addClass(el, name) {
        let className = el.getAttribute("class");
        className = className + " " + name;
        el.setAttribute("class", className);
        return el;
    }

    function removeClass(el, name) {
        let className = el.getAttribute("class");
        let pos = className.indexOf(name);
        className = pos === -1 ?
        className : 
        className.replace(name, "").replace(/ +/, " ");
        el.setAttribute("class", className);
        return el;
    }
    
    function hasClass(el, name) {
        let className = el.getAttribute("class");
        let pos = className.indexOf(name);
        return  pos === -1 ? false : true;
    }
    
    /*=====  End of 公共方法  ======*/
    
})();
