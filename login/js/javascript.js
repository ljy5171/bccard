const $gnbs = document.querySelectorAll('header>.container>nav>.gnb>li>a');
const $gnb2 = document.querySelectorAll('header>.container>nav>.gnb>li');
const $nav = document.querySelector('header>.container>nav');
const $lnb_container = document.querySelector('header>.lnb_container');
const $lnbs= document.querySelectorAll('header>.container>nav>.gnb>li>.lnb');
const $indicators= document.querySelectorAll('section>.slide>.container>.indicator>li>a');
const $slides= document.querySelectorAll('section>.slide>.slides_frame>li');
const $play= document.querySelector('section>.slide>.container>p');
const $container= document.querySelector('section>.center>.card>.card_frame>.card_container');
const $prev= document.querySelector('section>.center>.card>p:nth-of-type(1)');
const $next= document.querySelector('section>.center>.card>p:nth-of-type(2)');

{let nowIdx=0;
let intervalKey=null;

// $gnb2.forEach(function($gnb,idx){
//     $gnb.addEventListener('mouseenter',function(evt){
//     evt.preventDefault();
//     $lnb_container.style.display = 'block';
//     $lnbs.forEach(function($lnb){
//         $lnb.style.display = 'block';
//     });
// });
$nav.addEventListener('mouseenter',function(evt){
    evt.preventDefault();
    $lnb_container.style.display = 'block';
    $lnbs.forEach(function($lnb){
        $lnb.style.display = 'block';
    });
});
$nav.addEventListener('mouseleave',function(evt){
    evt.preventDefault();
    $lnb_container.style.display = 'none';
    $lnbs.forEach(function($lnb){
        $lnb.style.display = 'none';
    });
});
// });

{
$gnb2.forEach(function($gnb,idx){
    $gnb.addEventListener('mouseenter',function(evt){
        evt.preventDefault();
        
        $gnbs[idx].style.color = 'rgb(232,61,69)';
        $gnbs[idx].style.borderBottom = '3px solid rgb(232,61,69)';
        $gnbs[idx].style.boxSizing = 'border-box';
    })
    $gnb.addEventListener('mouseleave',function(evt){
        evt.preventDefault();
        
        $gnbs[idx].style.color = '#222';
        $gnbs[idx].style.borderBottom = 'none';
        $gnbs[idx].style.boxSizing = 'border-box';
    })
});
}


$indicators.forEach(function($indicator,idx){
    $indicator.addEventListener('click', function(evt){
        evt.preventDefault();
        nowIdx = idx;

        for(let i=0;i<$indicators.length;i++){
            $slides[i].style.display = 'none';
            $indicators[i].parentElement.classList.remove('on');
        }

        
        $slides[nowIdx].style.display = 'block';
        $indicators[nowIdx].parentElement.classList.add('on');
    });
});


    
const autoPlay = function(){
    clearInterval(intervalKey);

    intervalKey = setInterval(function(){
        // clearInterval(intervalKey);
        
        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        
        for(let i=0;i<$indicators.length;i++){
            $slides[i].style.display = 'none';
            $indicators[i].parentElement.classList.remove('on');
        }

        
        $slides[nowIdx].style.display = 'block';
        $indicators[nowIdx].parentElement.classList.add('on');
        
},4000)};

autoPlay();



$play.addEventListener('click',function(evt){
    evt.preventDefault();

    if(this.classList.contains('pause')){

        intervalKey = setInterval(function(){
            
            if(nowIdx<2){
                nowIdx++;
            }else{
                nowIdx=0;
            }
            
            for(let i=0;i<$indicators.length;i++){
                $slides[i].style.display = 'none';
                $indicators[i].parentElement.classList.remove('on');
            }
            
            
            $slides[nowIdx].style.display = 'block';
            $indicators[nowIdx].parentElement.classList.add('on');
            
            
        },4000);
        this.classList.remove('pause');
    }else{
        clearInterval(intervalKey);
        this.classList.add('pause');

    } 
});

}

{
let nowIdx=0;
$prev.addEventListener('click',function(evt){
    evt.preventDefault();
    
    if(nowIdx>0){
        nowIdx--;
    }else{
        nowIdx=11;
    }
$container.style.left = -220*nowIdx + 'px' ;
});

$next.addEventListener('click',function(evt){
    evt.preventDefault();

    if(nowIdx<11){
        nowIdx++;
    }else{
        nowIdx=0;
    }
    $container.style.left = -220*nowIdx + 'px' ;
});
}


