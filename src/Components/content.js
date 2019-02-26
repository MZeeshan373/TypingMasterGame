import React, { Component } from 'react';
import A from '../images/A.png'
import B from '../images/B.png'
import C from '../images/C.png'
import D from '../images/D.png'
import E from '../images/E.png'
import F from '../images/F.png'
import G from '../images/G.png'
import H from '../images/H.png'
import I from '../images/I.png'
import J from '../images/J.png'
import K from '../images/K.png'
import L from '../images/L.png'
import M from '../images/M.png'
import N from '../images/N.png'
import O from '../images/O.png'
import P from '../images/P.png'
import Q from '../images/Q.png'
import R from '../images/R.png'
import S from '../images/S.png'
import T from '../images/T.png'
import U from '../images/U.png'
import V from '../images/V.png'
import W from '../images/W.png'
import X from '../images/X.png'
import Y from '../images/Y.png'
import Z from '../images/Z.png'
// import { addObj, removeObj } from '../actions/action'
// import {store} from '../redux'
import { connect } from 'react-redux';
class Content extends Component {
   
   
    
    render() {

        var key=null;
        setTimeout(()=>{
            // var main=this.refs.main;
            // main=main.parentElement;
        document.addEventListener("keydown",(e)=>{
            // console.log(e.key)
            key=e.key;
            console.log(key)
            
        })
            
        },50)
            // var A=A;
            // var B=B;
            // var C=C;
            // var D=D;
            // var E=E;
            // var F=F;
            // var G=G;
            // var H=H;
            // var I=I;
            // var J=J;
            // var K=K;
            // var L=L;
            // var M=M;
            // var N=N;
            // var O=O;
            // var P=P;
            // var Q=Q;
            // var R=R;
            // var S=S;
            // var T=T;
            // var U=U;
            // var V=V;
            // var W=W;
            // var X=Y;
            // var Y=X;
            // var Z=Z;


            var score=0;
            var missed=0;
            var speed=30;
            var gameOver=false; 
            var randomNum;   
            var myObjects=[];
            var circle = {
                x: 50,
                y: 300,
                w: 10,
                h: 10,
                key:'W'
            }

            var interval=setInterval(()=>{
                             
                var canvas = this.refs.canvas;
                var pen = canvas.getContext('2d');
                pen.clearRect(0,0,300,150);
                // console.log(canvas.width+":"+":"+canvas.height);
            // pen.beginPath();
            var w=canvas.width;
            canvas.width=1;
            canvas.width=w;
           
            pen.font = "40px Arial";
            for (var i=0;i<myObjects.length ; i++){
                if(myObjects[i].y<=10)
                myObjects.splice(i,1);   
                missed+=1; 
                break;
            }
            for (var i=0;i<myObjects.length ; i++){
                if(myObjects[i].key==key)
                {
                    myObjects.splice(i,1);
                    key=null;    
                    break;
                }
            }
            for (var i=0;i<myObjects.length ; i++){
                
                // pen.arc(myObjects[i].x, myObjects[i].y, 20, 0, 2 * Math.PI);
                pen.fillStyle = "red";
                // pen.fillStyle = "Green";
                // pen.fillText(myObjects[i].key, myObjects[i].x-10, myObjects[i].y+10);
                var img=document.createElement("img");
                if(myObjects[i].key=='A')
                img.src=A;
                if(myObjects[i].key=='B')
                img.src=B;
                if(myObjects[i].key=='C')
                img.src=C;
                if(myObjects[i].key=='D')
                img.src=D;
                if(myObjects[i].key=='E')
                img.src=E;
                if(myObjects[i].key=='F')
                img.src=F;
                if(myObjects[i].key=='G')
                img.src=G;
                if(myObjects[i].key=='H')
                img.src=H;
                if(myObjects[i].key=='I')
                img.src=J;
                if(myObjects[i].key=='K')
                img.src=K;
                if(myObjects[i].key=='L')
                img.src=L;
                if(myObjects[i].key=='M')
                img.src=M;
                if(myObjects[i].key=='N')
                img.src=N;
                if(myObjects[i].key=='O')
                img.src=O;
                if(myObjects[i].key=='P')
                img.src=P;
                if(myObjects[i].key=='Q')
                img.src=Q;
                if(myObjects[i].key=='R')
                img.src=R;
                if(myObjects[i].key=='S')
                img.src=S;
                if(myObjects[i].key=='T')
                img.src=T;
                if(myObjects[i].key=='U')
                img.src=U;
                if(myObjects[i].key=='V')
                img.src=V;
                if(myObjects[i].key=='W')
                img.src=W;
                if(myObjects[i].key=='X')
                img.src=X;
                if(myObjects[i].key=='Y')
                img.src=Y;
                if(myObjects[i].key=='Z')
                img.src=Z;

                // var s='A'
                // img.src=`${eval(myObjects[i].key)}`;
                // console.log(img);
                // eval(str);
                // var name="Zeeshan";
                // var str=`My name is ${name}`;
            //    var str ="img.src=${3+4}";
            //    console.log(str);
            //    console.log(img)
                pen.drawImage(img,myObjects[i].x,myObjects[i].y,50,50);
                myObjects[i].y-=1;    
           
            }
            // pen.stroke();
            // pen.arc(circle.x, circle.y, 20, 0, 2 * Math.PI);
            // pen.stroke();
            // pen.fillStyle = "red";
            // alert("keymatch");

            // pen.fillRect(circle.x,circle.y,circle.w,circle.h)
            // pen.fillStyle = "Green";
            // pen.fillText(circle.key, circle.x-10, circle.y+10);
            
            // var gradient = pen.createLinearGradient(0, 0, 170, 0);
            // gradient.addColorStop("0", "magenta");
            // gradient.addColorStop("0.5", "blue");
            // gradient.addColorStop("1.0", "red");
            
            // Fill with gradient
            // pen.strokeStyle = gradient;
            // pen.stroke();
            // if(circle.y==10)
            // console.log(canvas.height);
            // if(circle.key===key )
            // {
            //     // clearInterval(interval);
            //     pen.clearRect(0,0,canvas.width,canvas.height);
            //     return false;            
            // }
                // count++;
                // circle.y-=1;
                // circle.x+=1;
                // console.log(circle.y);
    },10);
    var interval2=setInterval(()=>{
        randomNum=Math.random();
        var randomX=Math.random()*1000;
        randomX=Math.round(randomX)+100;
        randomNum=randomNum*25;
        randomNum=Math.round(randomNum)+65;
        var canvas = this.refs.canvas;
        // var n=circle.w;
        var randomCh=String.fromCharCode(randomNum);
        var obj={
            x:randomX,
            y:canvas.height,
            width:circle.w,
            height:circle.h,
            key:randomCh
        }
        myObjects.push(obj);
        var str=randomCh.toString();
        // eval(str);
        // console.log(typeof(eval(randomCh)));        
        // circle.key=randomCh;
        // console.log(randomCh);

    },2000)

        
        return (
            <div ref="main">

                <canvas width="1200" height="600" ref="canvas"  className='canvas'>

                </canvas>
                {/* <img src={A}/> */}
            </div>
        );
    }

}
const mapStateToProps = (store) => {
    return {
        objects: store.objectReducer
    }
}
export default connect(mapStateToProps)(Content);