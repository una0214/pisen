
/**
 * [pisen plugin]
 * this is a plugins set for pisen , combine general frequenly used function
 * include layer, pullDown / pullUp refresh ,  list layer for up and down esc
 *
 * author wsx
 * date 2018-01-13
 * 
 */


(function(global, factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? 
        module.exports = factory() : typeof define === 'function' &&　define.amd ?
            define(factory) : global.pisen = factory();
})(typeof window !== "undefined" ? window : this, function(){
    'use strict'

    var pisen = {};
    
    pisen.uplist = function(opts){
        /* jsname = 弹出上拉列表 cssname= pisen-uplist*/
        let option = {
            data: [{},{}],
            confirm: function(){},
            cancel: function(){},
            title: "",
            btn: ["确定", "取消"]
        }
        let mask = '<div class="pisen-mask show"></div>';
        let html = ' <div class="pisen-uplist">'+
            '<div class="title">'+
            '<span class="cancel">取消</span>'+
            '<span class="name">列表名称</span>'+
            '<span class="confirm">确定</span>'+
            '</div>'+
            '<ul class="list">'+
            '<li class="active">这个是数据</li>'+          
            '</ul>'+
            '</div>';
        s(".pisen-ups").onclick = function(){
            let o = s('.pisen-uplist');
            o.removeClass("none");
            o.after(s(".pisen-mask")
        }
    
    }
    /*=============================================
    =            common function                  =
    =============================================*/
    
    
    /* if is a object */
    
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]' ? true : false;
    }

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
    // 判断是否存在类
    function hasClass(el, name) {
        let className = el.getAttribute("class");
        let pos = className.indexOf(name);
        return  pos === -1 ? false : true;
    }

    // 浅复制

    function extend(source, target){

    }


    
    

    return pisen;

    
});

