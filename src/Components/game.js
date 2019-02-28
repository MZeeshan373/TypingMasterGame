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


class Game extends Component {



    render() {

        var key = null;
        setTimeout(() => {
           
            document.addEventListener("keydown", (e) => {
                key = e.key.toUpperCase();
            
            })

        }, 50)
        var speed ;
        var chance;
        var score ;
        var gameOver;

        var gameInit=()=>{
            this.refs.gameOverDiv.style.display="none";
            this.refs.gameStartDiv.style.display="none";

            chance=20;
            gameOver = false;
            speed = 1000;
            score=0;
            this.refs.chances.innerHTML = chance;
            this.refs.score.innerHTML = score;
            
            var randomNum;
            var myObjects = [];
                 

        var interval = setInterval(() => {

            var canvas = this.refs.canvas;
            var pen = canvas.getContext('2d');
        

            var w = canvas.width;
            canvas.width = 1;
            canvas.width = w;
            
            pen.font = "40px Arial";
            for (var i = 0; i < myObjects.length; i++) {
                if (myObjects[i].y <= 5) {
                    myObjects.splice(i, 1);
                    chance-=1;
                    this.refs.chances.innerHTML = chance;
                    
                    break;
                }
                
            }
            
            for (i = 0; i < myObjects.length; i++) {
                
                if (myObjects[i].key === key) {
                    myObjects.splice(i, 1);
                    score += 5;
                    this.refs.score.innerHTML = score;
                    key = null;
                    break;
                }
                
            }
            for (i = 0; i < myObjects.length; i++) {
                if(myObjects[i].key!==key && key!=null)
                {
                    chance-=1;
                    this.refs.chances.innerHTML = chance;    
                    key=null;
                    break;
                }   
            }
            for (i = 0; i < myObjects.length; i++) {
                
        
                var img = document.createElement("img");
                if (myObjects[i].key === 'A')
                img.src = A;
                else if (myObjects[i].key === 'B')
                img.src = B;
                else if (myObjects[i].key === 'C')
                img.src = C;
                else if (myObjects[i].key === 'D')
                img.src = D;
                else if (myObjects[i].key === 'E')
                img.src = E;
                else if (myObjects[i].key === 'F')
                img.src = F;
                else if (myObjects[i].key === 'G')
                img.src = G;
                else if (myObjects[i].key === 'H')
                img.src = H;
                else if (myObjects[i].key === 'I')
                img.src = I;
                else if (myObjects[i].key === 'I')
                img.src = I;
                else if (myObjects[i].key === 'J')
                img.src = J;
                else if (myObjects[i].key === 'K')
                img.src = K;
                else if (myObjects[i].key === 'L')
                img.src = L;
                else if (myObjects[i].key === 'M')
                img.src = M;
                else if (myObjects[i].key === 'N')
                img.src = N;
                else if (myObjects[i].key === 'O')
                img.src = O;
                else if (myObjects[i].key === 'P')
                img.src = P;
                else if (myObjects[i].key === 'Q')
                img.src = Q;
                else if (myObjects[i].key === 'R')
                img.src = R;
                else if (myObjects[i].key === 'S')
                img.src = S;
                else if (myObjects[i].key === 'T')
                img.src = T;
                else if (myObjects[i].key === 'U')
                img.src = U;
                else if (myObjects[i].key === 'V')
                img.src = V;
                else if (myObjects[i].key === 'W')
                img.src = W;
                else if (myObjects[i].key === 'X')
                img.src = X;
                else if (myObjects[i].key === 'Y')
                img.src = Y;
                else if (myObjects[i].key === 'Z')
                img.src = Z;
                
                
                pen.drawImage(img, myObjects[i].x, myObjects[i].y, 50, 50);
                myObjects[i].y -= 1;
                
            }
            
            
            if (chance <=0) {
                
                // myObjects = [];
                gameOver = true;
                this.refs.gameOverDiv.style.display="inline";
                clearInterval(interval);
            }
            
           
        }, 5);
        var interval2 = setInterval(() => {
            if (gameOver) {
                clearInterval(interval2);
            }
            if(speed>550)
            speed-=10;
            
            randomNum = Math.random();
            var randomX = Math.random() * 1000;
            randomX = Math.round(randomX) + 100;
            randomNum = randomNum * 25;
            randomNum = Math.round(randomNum) + 65;
            var canvas = this.refs.canvas;
            var randomCh = String.fromCharCode(randomNum);
            var obj = {
                x: randomX,
                y: canvas.height,
                key: randomCh
            }
            myObjects.push(obj);

            

        }, speed)
    }

        return (
            <div ref="main">
                <div className="canvas-div">
                    <canvas width="1200" height="700" ref="canvas" className='canvas'>

                    </canvas>
                </div>
        <div className="score-doard">
            <div >
                <span className="chances">Chances</span>
                <span ref="chances" className="chances">{chance}</span>
            </div>
            <div>
                <span className="score">score</span>
                <span ref="score" className="score">{score}</span>
            </div>
                
        </div>
              
                <div className="gameover" ref="gameOverDiv">
                    <center>
                    <span>Game Over</span>
                    <br/>
                    <button onClick={gameInit}>Restart Game</button>
                    </center>
                    
                </div>
                <div className="gamestart" ref="gameStartDiv">
                    <center>
                    <span>Typing Master</span>
                    <br/>
                    <button onClick={gameInit}>Start Game</button>
                    </center>
                    
                </div>

    </div>
        );
    }

}

export default Game;