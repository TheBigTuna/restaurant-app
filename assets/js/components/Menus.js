import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Menus extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    randomPics(){
      let pic1 = document.getElementsByClassName('square1').src="04.jpg";
      let listPics = [pic1];
    return listPics[Math.floor(Math.random() * listPics.length)];
    }
    showLunch(){
      document.getElementById('menuLunch').style.display="block";
      document.getElementById('menuImgs').style.display="none";
      document.getElementById('menuDinner').style.display="none";
      document.getElementById('menuSushi').style.display="none";
      document.getElementById('menuDesserts').style.display="none";
      document.getElementById('menuWine').style.display="none";
      document.getElementById('menuMartinis').style.display="none";
    }
    showDinner(){
      document.getElementById('menuDinner').style.display="block";
      document.getElementById('menuImgs').style.display="none";
      document.getElementById('menuLunch').style.display="none";
      document.getElementById('menuSushi').style.display="none";
      document.getElementById('menuDesserts').style.display="none";
      document.getElementById('menuWine').style.display="none";
      document.getElementById('menuMartinis').style.display="none";
    }
    showSushi(){
      document.getElementById('menuSushi').style.display="block";
      document.getElementById('menuDinner').style.display="none";
      document.getElementById('menuImgs').style.display="none";
      document.getElementById('menuLunch').style.display="none";
      document.getElementById('menuDesserts').style.display="none";
      document.getElementById('menuWine').style.display="none";
      document.getElementById('menuMartinis').style.display="none";
    }
    showDesserts(){
      document.getElementById('menuDesserts').style.display="block";
      document.getElementById('menuSushi').style.display="none";
      document.getElementById('menuDinner').style.display="none";
      document.getElementById('menuImgs').style.display="none";
      document.getElementById('menuLunch').style.display="none";
      document.getElementById('menuWine').style.display="none";
      document.getElementById('menuMartinis').style.display="none";
    }
    showWine(){
      document.getElementById('menuWine').style.display="block";
      document.getElementById('menuDesserts').style.display="none";
      document.getElementById('menuSushi').style.display="none";
      document.getElementById('menuDinner').style.display="none";
      document.getElementById('menuImgs').style.display="none";
      document.getElementById('menuLunch').style.display="none";
      document.getElementById('menuMartinis').style.display="none";
    }
    showMartinis(){
      document.getElementById('menuMartinis').style.display="block";
      document.getElementById('menuWine').style.display="none";
      document.getElementById('menuDesserts').style.display="none";
      document.getElementById('menuSushi').style.display="none";
      document.getElementById('menuDinner').style.display="none";
      document.getElementById('menuImgs').style.display="none";
      document.getElementById('menuLunch').style.display="none";
    }
    render(){
      return(
        <div>
         <div className="container" id="menuSec">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2" id="menuImgs">
            <div className="p-5 imgGroup">
              <img className="img-fluid rounded-0 square1" src="04.jpg"  alt="" />
              <img className="img-fluid rounded-0 square2" src="08.jpg"  alt="" />
              <img className="img-fluid rounded-0 square3" src="09.jpg"  alt="" />
              <img className="img-fluid rounded-0 square4" src="10.jpg"  alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2" id="menuLunch">
            <div className="p-5 imgGroup">
              <h2 className="text-center">Lunch</h2>
            </div>
          </div>
           <div className="col-lg-6 order-lg-2" id="menuDinner">
            <div className="p-5 imgGroup">
              <h2 className="text-center">Dinner</h2>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2" id="menuSushi">
            <div className="p-5 imgGroup">
              <h2 className="text-center">Sushi</h2>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2" id="menuDesserts">
            <div className="p-5 imgGroup">
              <h2 className="text-center">Desserts</h2>
              <h6>Creme Brule</h6>
              <p></p>
              <h6></h6>
              <p></p>
              <h6></h6>
              <p></p>
              <h6></h6>
              <p></p>
            </div>
          </div>
           <div className="col-lg-6 order-lg-2" id="menuWine">
            <div className="p-5 imgGroup">
              <h2 className="text-center">Wine</h2>
              <h6>Prosecco</h6>
              <p>La Marca, Veneto</p>
              <h6>Sauvignon Blanc</h6>
              <p>Charles Krug, Napa Valley</p>
              <h6>Sancerre</h6>
              <p>Chateau de Sancerre, Lorie</p>
              <h6>Chardonnay</h6>
              <p>Kunde, Sonoma County</p>
              <h6>Pinot Noir</h6>
              <p>Meiomi, Sonoma Coast</p>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2" id="menuMartinis">
            <div className="p-5 imgGroup">
              <h2 className="text-center">Martinis</h2>
              <h6>Shirotini</h6>
              <p>Harushika sake, Chambord Raspberry Liqueur, Absolut Kurant</p>
              <h6>Shiro Cosmo</h6>
              <p>Absolut Kurant Vodka, Cointreau, Cranberry Juice</p>
              <h6>Asian Peach</h6>
              <p>Sushin Sake, Peach Snapps, Sour Mix</p>
               <h6>Asian Berry</h6>
              <p>Sushin Sake, Chambord Raspberry Liqueur, Sour Mix</p>
              <h6>Upside Down Pineappletini</h6>
              <p>Stoli Vanilla Vodka, Pineapple Juice</p>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <div className="bg-circle-3 bg-circle"></div>
              <div className="bg-circle-4 bg-circle"></div>
              <h2 className="display-4 enjoy">Enjoy! <br />Our Menus</h2>
              <ul className="menuList">
              <li onClick={this.showLunch}>lunch menu</li>
              <li onClick={this.showDinner}>dinner menu</li>
              <li onClick={this.showSushi}>sushi</li>
              <li onClick={this.showDesserts}>desserts</li>
              <li onClick={this.showWine}>wine list</li>
              <li onClick={this.showMartinis}>martinis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const menus = document.getElementById('menus')


