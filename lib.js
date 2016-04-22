// 判断是否是微信浏览器
function _m_is_weixin() { 
    var _ua = navigator.userAgent.toLowerCase();  
    if(_ua.match(/MicroMessenger/i) == "micromessenger") {
        return true ;
    } else {  
        return false ;
    }
}