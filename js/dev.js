/* dev tools scripts */

//this script can be used for A/B testing css

let styleToggle = 0;

window.onload = () =>{
  switchCss();
}

function switchCss(){
  styleToggle = !styleToggle;
  if(styleToggle){
    document.querySelector("#styleId").remove();
    const style1 = document.createElement('link');
    style1.id = 'styleId';
    style1.type='text/css';
    style1.href='./css/index.css';
    style1.rel='stylesheet';
    document.getElementsByTagName('head')[0].appendChild(style1);

    //show which style is active
    document.querySelector(".dev").textContent = "CSS : index1";
  }
  else{
    document.querySelector("#styleId").remove();
    const style2 = document.createElement('link');
    style2.id = 'styleId';
    style2.type='text/css';
    style2.href='./css/index2.css';
    style2.rel='stylesheet';
    document.getElementsByTagName('head')[0].appendChild(style2);
    //show which style is active
    document.querySelector(".dev").textContent = "CSS : index2";
  }

}