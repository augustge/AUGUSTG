
// var canvas;

var div;
var POSTS = [];

var pagesElm,  pagesUl;
var postsElm,  postsUl;
var postEntry, postDiv;

function preload(){
  pagesElm    = document.getElementById('Pages');
  pagesUl     = document.getElementById('pagesList');
  postsElm    = document.getElementById('Posts');
  postsUl     = document.getElementById('postsList');
  postEntry   = document.getElementById('postEntry');
  postDiv     = document.getElementById('postDiv');

}

function setup(){
  // canvas = createCanvas(windowWidth,windowHeight);
  POSTS.push( new Post("Brachistochroneproblemet.txt","Brachistochroneproblemet").initiate() )//"Brachistochroneproblemet") )
  POSTS.push( new Post("FirstPost.txt","hookle kookle").initiate() )


}

function draw(){
  // background(0);
}

function Post(filename,title){
  this.filename = filename
  this.title    = title;

  this.initiate = function(){
    this.li_elm = createElement("li","")
    this.li_elm.parent(postsUl)
    this.header = createElement("a",this.title)
    this.header.class("link-entry")
    this.header.style("cursor","pointer")
    this.header.parent(this.li_elm);
    console.log(filename)
    this.header.mousePressed(function (){
      console.log("In mouseEvent");
      console.log(filename);
      console.log("loading strings...");
      loadStrings(filename,loadPost,loadPostError);
    });
    return this
  }

}

function loadPost(result){
  console.log("TEST")
  var txt = join(result," ")
  postDiv  = select('#postDiv');
  console.log("TEST2")
  postDiv.html(txt) // update html content
  console.log("TEST3")
  MathJax.Hub.Queue(["Typeset",MathJax.Hub]); // redo mathjax typesetting
  console.log("TEST4")
  // return result
}

function loadPostError(){
  var txt = "[Failed loading file... or something...]"
  postDiv  = select('#postDiv');
  postDiv.html(txt) // update html content
  // MathJax.Hub.Queue(["Typeset",MathJax.Hub]); // redo mathjax typesetting
  // return result
}



// function mousePressed(){
//   POSTS[0].load();
// }
