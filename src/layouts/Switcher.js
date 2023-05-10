import React,{ useReducer} from 'react';
import {Link} from 'react-router-dom';
import switcherbg1 from './../assets/images/switcher/switcher-bg/bg1.jpg';
import switcherbg2 from './../assets/images/switcher/switcher-bg/bg2.jpg';
import switcherbg3 from './../assets/images/switcher/switcher-bg/bg3.jpg';
import switcherbg4 from './../assets/images/switcher/switcher-bg/bg4.jpg';
import switcherbg5 from './../assets/images/switcher/switcher-bg/bg5.jpg';
import switcherbg6 from './../assets/images/switcher/switcher-bg/bg6.jpg';
import switcherbg7 from './../assets/images/switcher/switcher-bg/bg7.jpg';
import switcherbg8 from './../assets/images/switcher/switcher-bg/bg8.jpg';
import switcherbg9 from './../assets/images/switcher/switcher-bg/bg9.jpg';

import bg1 from './../assets/images/background/bg1.jpg';
import bg2 from './../assets/images/background/bg3.jpg';
import bg3 from './../assets/images/background/bg6.jpg';
import bg4 from './../assets/images/background/bg7.jpg';
import bg5 from './../assets/images/background/bg17.jpg';
import bg6 from './../assets/images/background/bg20.jpg';
import bg7 from './../assets/images/background/bg21.jpg';
import bg8 from './../assets/images/background/bg22.jpg';
import bg9 from './../assets/images/background/bg23.jpg';

import pattern1 from './../assets/images/switcher/switcher-patterns/bg1.jpg';
import pattern2 from './../assets/images/switcher/switcher-patterns/bg2.jpg';
import pattern3 from './../assets/images/switcher/switcher-patterns/bg3.jpg';
import pattern4 from './../assets/images/switcher/switcher-patterns/bg4.jpg';
import pattern5 from './../assets/images/switcher/switcher-patterns/bg5.jpg';
import pattern6 from './../assets/images/switcher/switcher-patterns/bg6.jpg';
import pattern7 from './../assets/images/switcher/switcher-patterns/bg7.jpg';
import pattern8 from './../assets/images/switcher/switcher-patterns/bg8.jpg';
import pattern9 from './../assets/images/switcher/switcher-patterns/bg9.jpg';

import pt1 from './../assets/images/pattern/pt1.jpg';
import pt2 from './../assets/images/pattern/pt2.jpg';
import pt3 from './../assets/images/pattern/pt3.jpg';
import pt4 from './../assets/images/pattern/pt4.jpg';
import pt5 from './../assets/images/pattern/pt5.jpg';
import pt6 from './../assets/images/pattern/pt6.jpg';
import pt7 from './../assets/images/pattern/pt7.jpg';
import pt8 from './../assets/images/pattern/pt8.jpg';
import pt9 from './../assets/images/pattern/pt9.jpg';


const logo1 = require('./../assets/images/logo.png');
const logoWhite1 = require('./../assets/images/logo-white.png');
const logo2 = require('./../assets/images/logo-2.png');
const logoWhite2 = require('./../assets/images/logo-white-2.png');
const logo3 = require('./../assets/images/logo-3.png');
const logoWhite3 = require('./../assets/images/logo-white-3.png');
const logo4 = require('./../assets/images/logo-4.png');
const logoWhite4 = require('./../assets/images/logo-white-4.png');
const logo5 = require('./../assets/images/logo-5.png');
const logoWhite5 = require('./../assets/images/logo-white-5.png');
const logo6 = require('./../assets/images/logo-6.png');
const logoWhite6 = require('./../assets/images/logo-white-6.png');
const logo7 = require('./../assets/images/logo-7.png');
const logoWhite7 = require('./../assets/images/logo-white-7.png');
const logo8 = require('./../assets/images/logo-8.png');
const logoWhite8 = require('./../assets/images/logo-white-8.png');
const logo9 = require('./../assets/images/logo-9.png');
const logoWhite9 = require('./../assets/images/logo-white-9.png');

const initialState = false;
const reducer = (state, action) =>{
	if(action.type ==='openswitcher'){
		return { ...state, openswitcher: !state.openswitcher};
	}
	
	return state;
}

function Switcher(){
	const [state, dispatch] = useReducer(reducer, initialState);	
	/* function handleThemeLayout(){		
		var classTheme = document.body.classList; 		
		
		if(classTheme.contains('layout-light') || classTheme.contains('layout-dark')) {
			classTheme.remove('wide-layout');
			classTheme.remove('frame');
			classTheme.add('boxed');
		} else{ 
			classTheme.remove('boxed'); 
		}		
	}
	
	function handleThemeLayoutWide(){
		var wideTheme = document.body.classList; 		
		
		if(wideTheme.contains('boxed') || wideTheme.contains('frame')) {
			wideTheme.remove('boxed');
			wideTheme.remove('frame');
			wideTheme.add('wide-layout');
		}else{
			wideTheme.remove('wide-layout'); 
		}
		
	}
	function handleThemeLayoutFrame(){
		var frameTheme = document.body.classList; 		
		
		if(frameTheme.contains('layout-light') || frameTheme.contains('layout-dark')) {
			frameTheme.remove('boxed');
			frameTheme.add('frame');
		}else{
			//wideTheme.remove('wide-layout'); 
		}
		
	} */
	
	
	function handleChangeTheme(version){
		var thememode = document.body.classList; 
		var navUl = [].slice.call(document.querySelectorAll('.main-theme-version'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(version)[0].classList.add('active');	
		if(version === 'light-theme'){
			thememode.remove('layout-dark'); 
			thememode.add('layout-light');
		}else if(version === 'dark-theme'){
			thememode.remove('layout-light'); 
			thememode.add('layout-dark');
		}
	}
	
		
	function HeaderPostion(postion){
		var headermode = document.getElementsByClassName('main-bar-wraper')[0].classList;
		var navUl = [].slice.call(document.querySelectorAll('.switcher-header-layout-btn'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(postion)[0].classList.add('active');
		if(postion === 'header-fixed'){			
			headermode.remove('sticky-header');
			headermode.add('sticky-no');
		}else if(postion === 'header-static'){
			headermode.remove('sticky-no');
			headermode.add('sticky-header');
		}
		
	}
	
	function ChnageDirectionRtl(direction){
		const directionChnage = document.getElementsByTagName("html");			
		var switcherdirection = [].slice.call(document.querySelectorAll('.dir-theme-change'));
		switcherdirection.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(direction)[0].classList.add('active');
		if(direction === 'rtl-theme'){	
			directionChnage[0].setAttribute("dir", "rtl");
			
		}else if(direction ==='ltr-theme'){				
			directionChnage[0].removeAttribute("dir", "rtl");
		}
		
	}	
	
	function handleThemeLayout(layout){		
		var changeLayout = document.body.classList; 
		var switcherlayout = [].slice.call(document.querySelectorAll('.layout-theme-change'));
		switcherlayout.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(layout)[0].classList.add('active');
		
		if(layout === 'wide-layout') {
			changeLayout.remove('boxed');
			changeLayout.remove('frame');
			changeLayout.add('wide-layout');
		}else if(layout === 'boxed'){ 
			changeLayout.remove('wide-layout');
			changeLayout.remove('frame');
			changeLayout.add('boxed'); 
		}else if(layout === 'frame'){
			changeLayout.remove('boxed');
			changeLayout.remove('wide-layout');
			changeLayout.add('frame');
		}		
	}
	
	
	
	 
	  	/* function toggleTheme(skinCss) {
           
            //var theme = document.getElementsByTagName('link')[0];
            var theme = document.getElementById("theme");
            theme.setAttribute('href', './src/assets/css/skin/'+skinCss);
        }*/

		// function handleThemeBgColor(bgchnage){				 
		// 	var backgchnage = document.body.classList;
			
		// 	if(backgchnage.contains('boxed')){
		// 		var bgcolor = "#fe4c1c";
		// 		switch(bgchnage) {
		// 			case 'bg-color-1':
		// 				var bgcolor = "#fe4c1c";
		// 				break;
		// 			case 'bg-color-2':
		// 				var bgcolor = "#2eb999";
		// 				break;					
		// 			default:
		// 				var bgcolor = "#fe4c1c";
		// 		}
		// 		document.body.style.backgroundColor = bgcolor;
		// 	}
		// }
		// function handleThemeBgImage(bgimagechnage){				 
		// 	var backgimagechnage = document.body.classList;			
		// 	if(backgimagechnage.contains('boxed')){				
		// 		var bgimage = "url("+ changebg1 + ")";
		// 		var bgattch =  "fixed";			
		// 		switch(bgimagechnage) {
					
		// 			case 'switcher-image-1':
		// 				var bgimage =  "url("+ changebg1 + ")";
		// 				var bgattch =  "fixed";
		// 				break;
		// 			case 'switcher-image-3':
		// 				var bgimage = "url("+ changebg3 + ")";						
		// 				break;
					
		// 			default:
		// 				var bgimage =  "url("+ changebg1 + ")";
		// 		}
		// 		document.body.style.backgroundImage = bgimage;
		// 		document.body.setAttribute('id','bg');
				
		// 	}
		// }


		function dzhandleThemeBgColor(action,value){				 
			var backgchnage = document.body.classList;
			
			if(backgchnage.contains('boxed') || backgchnage.contains('frame')){				
				if(action === 'bgcolor'){
					document.body.style.backgroundColor = value;
				}else if(action === 'bgImage'){
					document.body.style.backgroundImage = "url("+ value + ")";
					document.body.setAttribute('id','bg');
				}else if(action === 'bgPattern'){					
					document.body.style.backgroundImage = "url("+ value + ")";
					document.body.setAttribute('id','bg');
					document.body.style.backgroundSize = 'auto';
				}				
			}
		}

		function dzPrimaryColor(action,value,currentEvent){				 
			var colorTheme = document.body;
			colorTheme.setAttribute('data-theme-color',value);
			var colorThemeSelectorArr = [].slice.call(document.querySelectorAll('.color-skins > li'));
			colorThemeSelectorArr.forEach(el => el.classList.remove('active'));

			//var logoSelectorArr = currentEvent.target.getAttribute('data-logo-selector');
			//var logoSrcArr = currentEvent.target.getAttribute('data-logo-image');
			
			//console.log(logoSelectorArr);
			//console.log(logoSrcArr);
			
			var logoSelectorArr = currentEvent.target.getAttribute('data-logo-selector').split(',');
			var logoSrcArr = currentEvent.target.getAttribute('data-logo-image').split(',');
			var arrCount = logoSelectorArr.length;
			
			for(var i=0; i<arrCount; i++){
				if(document.querySelector(logoSelectorArr[i]) != null){
					//var imageSrc = require("'"+logoSrcArr[i]+"'").default;
					//var imageSrc = require(logoSrcArr[i].toString()).default;
					var imageSrc = eval(logoSrcArr[i]);
					//console.log('logoSrcArr');
					//console.log(logoSrcArr[i]);
					document.querySelector(logoSelectorArr[i]).setAttribute('src', imageSrc);
				}
			} 
			
			//var logoSelectorArr = jQuery(this).data('logo-selector').split(',');
			//var logoSrcArr		= jQuery(this).data('logo-image').split(',');
			//var arrCount = logoSelectorArr.length;
		
			//for(var i=0; i<arrCount; i++){
			//	jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
			//}

			
			setTimeout(function(){
				currentEvent.target.parentNode.classList.add('active');
			}, 200);
		
		}

		
	
	return(
		<>
			<div id="dzSwitcher-right" className={`styleswitcher ${state.openswitcher ? "open" : ""}`}>
				<div className="overlay-switch"  onClick={()=>dispatch({type:'openswitcher'})}></div>
				<div className="switcher-btn-bx"  onClick={()=>dispatch({type:'openswitcher'})}>
					<Link to={"#"} className="switch-btn closed"><span className="fas fa-cog"></span></Link>
				</div>
				<div className="styleswitcher-inner">
					<div className="sw-main-title">Theme Setting
						{/* <a href="javascript:void(0);" className="dez-page btn btn-primary btn-sm">Delete All Cookie</a> */}
					</div>
					<div className="theme-design row">
						<div className="theme-box col-md-12">
							<h5 className="switcher-title"><span>Theme</span></h5>
							<ul val="themeFullColor" className="color-skins theme-panel-save">
								<li className="active">
								{/* <img src={require('./../assets/images/logo-2.png')} width="50" /> */}
									<Link to={"#"}
										className="theme-skin skin-1 theme-color"										
										onClick={(el)=>{dzPrimaryColor('primaryColor','color_1',el)}}
										data-color-theme="skin-1"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										//data-logo-image="images/logo.png, images/logo-white.png, images/logo-white.png"
										data-logo-image="logo1, logoWhite1,logoWhite1"
									></Link>
								</li>
								<li>
									<Link to={"#"}											
										onClick={(el)=>{dzPrimaryColor('primaryColor','color_2',el)}}
										//onClick={()=>toggleTheme('skin-2.css')}
										className="theme-skin skin-2 theme-color"										
										data-color-theme="skin-2"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image= "logo2,logoWhite2,logoWhite2"
										//data-logo-image= "./../assets/images/logo-2.png,./../assets/images/logo-white-2.png,./../assets/images/logo-white-2.png"
										//data-logo-image={require('./../assets/images/logo-2.png').default,require('./../assets/images/logo-white-2.png').default, require('./../assets/images/logo-white-2.png').default}
										//={logoWhite}
										
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_3',el)}
										className="theme-skin skin-3 theme-color"										
										data-color-theme="skin-3"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo3, logoWhite3,logoWhite3"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_4',el)}
										className="theme-skin skin-4 theme-color"										
										data-color-theme="skin-4"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										//data-logo-image="images/logo-4.png, images/logo-white-4.png, images/logo-white-4.png"
										data-logo-image="logo4, logoWhite4,logoWhite4"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_5',el)}
										className="theme-skin skin-5 theme-color"
										data-color-theme="skin-5"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo5, logoWhite5,logoWhite5"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_6',el)}
										className="theme-skin skin-6 theme-color"
										data-color-theme="skin-6"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo6, logoWhite6,logoWhite6"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_7',el)}
										className="theme-skin skin-7 theme-color"
										data-color-theme="skin-7"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo7, logoWhite7,logoWhite7"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_8',el)}
										className="theme-skin skin-8 theme-color"
										data-color-theme="skin-8"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo8, logoWhite8,logoWhite8"
									></Link>
								</li>
								<li>
									<Link to={"#"}
										onClick={(el)=>dzPrimaryColor('primaryColor','color_9',el)}
										className="theme-skin skin-9 theme-color"
										data-color-theme="skin-9"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="logo9, logoWhite9,logoWhite9"
									></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="theme-design row theme-layout-wrapper">
						<div className="theme-box col-md-12">
							<h5 className="switcher-title"><span>Theme Layout</span></h5>
							<ul val="layout" className="layout layout-view theme-panel-save">
								<li className="wide-layout active layout-theme-change">
									<Link to={"#"} dir="wide-layout" 
										onClick={()=>handleThemeLayout('wide-layout')}
									>
										<div></div>
										<span>Wide</span>
									</Link>
								</li>
								 <li className="boxed layout-theme-change">
									<Link to={"#"} dir="boxed"  
										onClick={()=> handleThemeLayout('boxed')}
									>
										<div><span></span></div>
										<span>Boxed</span>
									</Link>
								</li>
								<li className="frame layout-theme-change">
									<Link to={"#"} dir="frame"
										onClick={()=>handleThemeLayout('frame')}	
									>
										<div><span></span></div>
										<span>Frame</span>
									</Link>
								</li> 
							</ul>
							<div id="ThemeRangeSlider" className="price-slide-2 range-slider px-2 mb-3" style={{display: 'none'}}>
								<div className="price">
									<input type="text" id="FramePadding" className="amount" readOnly="" defaulValue="20px" />
									<div id="slider-range-3"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="theme-design row theme-view-wrapper">
						<div className="col-xl-6 theme-box">
							<h5 className="switcher-title"><span>Theme View</span></h5>
							<ul className="theme-panel-save tab-checkbx theme-view-ltr-rtl" val="mode" >
								<li className="ltr-theme dir-theme-change active"> 
									{/* <a href="'+urlLTR+'" rel="ltr">LTR</a> */}
									<Link to={"#"}
										onClick={()=>ChnageDirectionRtl('ltr-theme')}
									>
										LTR
									</Link>
								</li>
								<li className="rtl-theme dir-theme-change">
									{/* <a href="'+urlRTL+'" rel="rtl">RTL</a> */}
									<Link to={"#"} 
										onClick={()=>ChnageDirectionRtl('rtl-theme')}
									>
										RTL
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-xl-6 theme-box">
							<h5 className="switcher-title"><span>Dark Mode</span></h5>
							<ul className="theme-panel-save theme-version tab-checkbx" val="themeVersion">
								<li className="light-theme active main-theme-version">
									<Link to={"#"} dir="light" logo="images/logo.png" 
										onClick={()=>handleChangeTheme('light-theme')}
									>
										Light
									</Link>
								</li>
								<li className="dark-theme main-theme-version">
									<Link to={"#"} dir="dark" logo="images/logo-white.png"
										onClick={()=>handleChangeTheme('dark-theme')}
									>Dark
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-xl-6 theme-box">
							<h5 className="switcher-title"><span>Header</span></h5>
							<ul val="header" className="tab-checkbx header-view theme-panel-save">
								<li className="switcher-header-layout-btn header-fixed ">
									<Link to={"#"} dir="sticky-header" 
										onClick={()=>HeaderPostion('header-fixed')}
									>
											Fixed
									</Link>
								</li>
								<li className="switcher-header-layout-btn header-static active">
									<Link to={"#"} dir="sticky-no" 
										onClick={()=>HeaderPostion('header-static')}
									>
										Static
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="theme-design row mb-0 theme-background-wrapper">
						<div className="col-md-12 theme-box mb-4">
							<h5 className="switcher-title"><span>Background Color</span></h5>
							<ul val="bgColor" className="bg-color-switcher theme-panel-save">
								<li>
									<Link to={"#"} className="bg-color-1"  dir="#fe4c1c"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#fe4c1c')}
									>										
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-2"  dir="#2eb999"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#2eb999')}
									>
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-3"   dir="#26AA5D"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#26AA5D')}
									>
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-4" dir="#e5588d"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#e5588d')}
									>	
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-5" dir="#FB751B"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#FB751B')}
									>									
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-6" dir="#e4484e"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#e4484e')}
									></Link>
									</li>
								<li>
									<Link to={"#"} className="bg-color-7" dir="#977fff"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#977fff')}
									>
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-8" dir="#eb8153"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#eb8153')}
									></Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-9"  dir="#ff8f16"
										onClick={()=>dzhandleThemeBgColor('bgcolor','#ff8f16')}
									>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-12 theme-box mb-4">
							<h5 className="switcher-title"><span>Background Image</span></h5>
							<ul val="bgImage" className="background-switcher theme-panel-save">
								<li>
									<img src={switcherbg1}  alt=""  
										onClick={()=>dzhandleThemeBgColor('bgImage',bg1)}
									/>								
								</li>
								<li>
									<img src={switcherbg2}  alt=""  
										onClick={()=>dzhandleThemeBgColor('bgImage',bg2)}
									/>
								</li>
								<li>
									<img src={switcherbg3} alt=""  
										onClick={()=>dzhandleThemeBgColor('bgImage',bg3)}
									/>
								</li>
								<li>
									<img src={switcherbg4}  alt=""  
										onClick={()=>dzhandleThemeBgColor('bgImage',bg4)}
									/>
								</li>
								<li>
									<img src={switcherbg5}  alt="" 
										onClick={()=>dzhandleThemeBgColor('bgImage',bg5)}
									/>
								</li>
								<li>
									<img src={switcherbg6}  alt="" 
										onClick={()=>dzhandleThemeBgColor('bgImage',bg6)}
									/>
								</li>
								<li>
									<img src={switcherbg7}  alt="" 
										onClick={()=>dzhandleThemeBgColor('bgImage',bg7)}
									/>
								</li>
								<li>
									<img src={switcherbg8}  alt="" 
										onClick={()=>dzhandleThemeBgColor('bgImage',bg8)}
									/>
								</li>
								<li>
									<img src={switcherbg9}  alt="" 
										onClick={()=>dzhandleThemeBgColor('bgImage',bg9)}
									/>
								</li>
							</ul>
						</div>
						<div className="col-md-12 theme-box">
							<h5 className="switcher-title"><span>Background Pattern</span></h5>
							<ul val="bgPatten" className="pattern-switcher theme-panel-save">
								<li>
									<img src={pattern1} dir="images/pattern/pt1.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt1)}
									/>
								</li>
								<li>
									<img src={pattern2} dir="images/pattern/pt2.jpg" alt=""
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt2)}
									/>
								</li>
								<li>
									<img src={pattern3} dir="images/pattern/pt3.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt3)}
									/>
								</li>
								<li>
									<img src={pattern4} dir="images/pattern/pt4.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt4)}
									/>
								</li>
								<li>
									<img src={pattern5} dir="images/pattern/pt5.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt5)}
									/>
								</li>
								<li>
									<img src={pattern6} dir="images/pattern/pt6.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt6)}
									/>
								</li>
								<li>
									<img src={pattern7} dir="images/pattern/pt7.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt7)}
									/>
								</li>
								<li>
									<img src={pattern8} dir="images/pattern/pt8.jpg" alt=""
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt8)}
									/>
								</li>
								<li>
									<img src={pattern9} dir="images/pattern/pt9.jpg" alt="" 
										onClick={()=>dzhandleThemeBgColor('bgPattern',pt9)}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
		
	)
}
export default Switcher;