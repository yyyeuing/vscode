/***股票财经区域选项卡 */
window.onload=function () {
    (function tab_band(){
        var nav=document.getElementById('active');
        var oNav=nav.getElementsByTagName('li');

        var container=document.getElementById('content');
        var oDiv=container.getElementsByClassName('img');
        for(var i=0;i<oNav.length;i++){
            oNav[i].index=i;
            oNav[i].onclick=function () {
        for(var i=0;i<oNav.length;i++){
        oNav[i].className='';
        oDiv[i].style.display="none";
        }
        this.className='active';
        oDiv[this.index].style.display="block"
        }
        for(var m=1;m<oNav.length;m++){
        oNav[m].className='';
        oDiv[m].style.display="none";
        }
        }
    })
};