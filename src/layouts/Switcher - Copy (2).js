import React,{useState, useReducer} from 'react';
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

import changebg1 from './../assets/images/background/bg1.jpg';
import changebg3 from './../assets/images/background/bg3.jpg';
import changebg6 from './../assets/images/background/bg6.jpg';
import changebg7 from './../assets/images/background/bg7.jpg';
import changebg17 from './../assets/images/background/bg17.jpg';
import changebg20 from './../assets/images/background/bg20.jpg';
import changebg21 from './../assets/images/background/bg21.jpg';
import changebg22 from './../assets/images/background/bg22.jpg';
import changebg23 from './../assets/images/background/bg23.jpg';

const initialState = false;
const reducer = (state, action) =>{
	if(action.type==='openswitcher'){
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
		if(version == 'light-theme'){
			thememode.remove('layout-dark'); 
			thememode.add('layout-light');
		}else if(version == 'dark-theme'){
			thememode.remove('layout-light'); 
			thememode.add('layout-dark');
		}
	}
	
		
	function HeaderPostion(postion){
		var headermode = document.getElementsByClassName('main-bar-wraper')[0].classList;
		var navUl = [].slice.call(document.querySelectorAll('.switcher-header-layout-btn'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(postion)[0].classList.add('active');
		if(postion == 'header-fixed'){			
			headermode.remove('sticky-header');
			headermode.add('sticky-no');
		}else if(postion == 'header-static'){
			headermode.remove('sticky-no');
			headermode.add('sticky-header');
		}
		
	}
	
	function ChnageDirectionRtl(direction){
		const directionChnage = document.getElementsByTagName("html");			
		var navUl = [].slice.call(document.querySelectorAll('.dir-theme-change'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(direction)[0].classList.add('active');
		if(direction == 'rtl-theme'){	
			directionChnage[0].setAttribute("dir", "rtl");
			
		}else if(direction == 'ltr-theme'){				
			directionChnage[0].removeAttribute("dir", "rtl");
		}
		
	}	
	
	function handleThemeLayout(layout){		
		var changeLayout = document.body.classList; 
		var navUl = [].slice.call(document.querySelectorAll('.layout-theme-change'));
		navUl.forEach(el => el.classList.remove('active'));
		document.getElementsByClassName(layout)[0].classList.add('active');
		
		if(layout == 'wide-layout') {
			changeLayout.remove('boxed');
			changeLayout.remove('frame');
			changeLayout.add('wide-layout');
		}else if(layout == 'boxed'){ 
			changeLayout.remove('wide-layout');
			changeLayout.remove('frame');
			changeLayout.add('boxed'); 
		}else if(layout == 'frame'){
			changeLayout.remove('boxed');
			changeLayout.remove('wide-layout');
			changeLayout.add('frame');
		}		
	}
	
	//<link id="theme" rel="stylesheet" type="text/css" href="light.css" />
	/* function toggleTheme(value) {
  
		// Obtain the name of stylesheet 
		// as a parameter and set it 
		// using href attribute.
		const sheets = document.getElementById("theme");
		console.log(sheets);
		console.log('sheets');
		sheets[0].href = value;
	} */
	
	
    /* <button onclick="toggleTheme('light.css')">
        Light
    </button>
      
    <button onclick="toggleTheme('dark.css')">
        Dark
    </button> */
	
	/* jQuery(document).addEventListener('click', '.theme-color', function(){
        jQuery(".skin").attr("href", 'css/skin/'+jQuery(this).data('color-theme')+'.css');
		var logoSelectorArr = jQuery(this).data('logo-selector').split(',');
		var logoSrcArr		= jQuery(this).data('logo-image').split(',');
		var arrCount = logoSelectorArr.length;
		
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
		return false;
		
		
    });
	 */
	 
	  	function toggleTheme(skinCss) {
           
            //var theme = document.getElementsByTagName('link')[0];
            var theme = document.getElementById("theme");
            theme.setAttribute('href', './src/assets/css/skin/'+skinCss);
        }

		function handleThemeBgColor(bgchnage){				 
			var backgchnage = document.body.classList;
			
			if(backgchnage.contains('boxed')){
				var bgcolor = "#fe4c1c";
				switch(bgchnage) {
					case 'bg-color-1':
						var bgcolor = "#fe4c1c";
						break;
					case 'bg-color-2':
						var bgcolor = "#2eb999";
						break;
					case 'bg-color-3':
						var bgcolor = "#26AA5D";	
						break;
					case 'bg-color-4':
						var bgcolor = "#e5588d";		
						break;
					case 'bg-color-5':
						var bgcolor = "#FB751B";		
						break;
					case 'bg-color-6':
						var bgcolor = "#e4484e";		
						break;		
					case 'bg-color-7':
						var bgcolor = "#977fff";		
						break;		
					case 'bg-color-8':
						var bgcolor = "#eb8153";		
						break;	
					case 'bg-color-9':
						var bgcolor = "#ff8f16";		
						break;	
					default:
						var bgcolor = "#fe4c1c";
				}
				document.body.style.backgroundColor = bgcolor;
			}
		}
		function handleThemeBgImage(bgimagechnage){				 
			var backgimagechnage = document.body.classList;
			
			if(backgimagechnage.contains('boxed')){
				//var bgimage = "url('./../assets/images/background/bg1.jpg')"; 
				var bgimage = "url("+ changebg1 + ")";
				var bgattch =  "fixed";
				//console.log(bgimage);
				//console.log('bgimage');
				switch(bgimagechnage) {
					
					case 'switcher-image-1':
						var bgimage =  "url("+ changebg1 + ")";
						//var bgattch =  "fixed";

						break;
					case 'switcher-image-3':
						var bgimage = "url("+ changebg3 + ")";
						//var bgattch =  "fixed";
						break;
					case 'switcher-image-6':
						var bgimage = "url("+ changebg6 + ")";
						break;
					case 'switcher-image-7':
						var bgimage = "url("+ changebg7 + ")";
						break;
					case 'switcher-image-17':
						var bgimage = "url("+ changebg17 + ")";
						break;
					case 'switcher-image-20':
						var bgimage = "url("+ changebg20 + ")";
						break;
					case 'switcher-image-21':
						var bgimage = "url("+ changebg21 + ")";
						break;
					case 'switcher-image-22':
						var bgimage = "url("+ changebg22 + ")";
						break;
					case 'switcher-image-23':
						var bgimage = "url("+ changebg23 + ")";
						break;
					
					default:
						var bgimage =  "url("+ changebg1 + ")";
				}
				document.body.style.backgroundImage = bgimage;
				document.body.setAttribute('id','bg');
				//document.body.style.backgroundAttachment = bgattch;
			}
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
									<a
										className="theme-skin skin-1 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-1"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo.png, images/logo-white.png, images/logo-white.png"
									></a>
								</li>
								<li>
									<a
										//onClick="toggleTheme('./src/assets/css/skin/skin-1.css')"
										//onclick="toggleTheme()"
										onClick={()=>toggleTheme('skin-2.css')}
										className="theme-skin skin-2 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-2"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-2.png, images/logo-white-2.png, images/logo-white-2.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-3.css')}
										className="theme-skin skin-3 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-3"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-3.png, images/logo-white-3.png, images/logo-white-3.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-4.css')}
										className="theme-skin skin-4 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-4"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-4.png, images/logo-white-4.png, images/logo-white-4.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-5.css')}
										className="theme-skin skin-5 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-5"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo.png, images/logo-white.png, images/logo-white.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-6.css')}
										className="theme-skin skin-6 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-6"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-6.png, images/logo-white-6.png, images/logo-white-6.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-7.css')}
										className="theme-skin skin-7 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-7"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-7.png, images/logo-white-7.png, images/logo-white-7.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-8.css')}
										className="theme-skin skin-8 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-8"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-8.png, images/logo-white-8.png, images/logo-white-8.png"
									></a>
								</li>
								<li>
									<a
										onClick={()=>toggleTheme('skin-9.css')}
										className="theme-skin skin-9 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-9"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-9.png, images/logo-white-9.png, images/logo-white-9.png"
									></a>
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
									<input type="text" id="FramePadding" className="amount" readonly="" value="20px" />
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
									<a className="bg-color-1" href="javascript:void(0);" dir="#fe4c1c"
										onClick={()=>handleThemeBgColor('bg-color-1')}
									>
										
									</a>
								</li>
								<li>
									<Link to={"#"} className="bg-color-2"  dir="#2eb999"
										onClick={()=>handleThemeBgColor('bg-color-2')}
									>
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-3"   dir="#26AA5D"
										onClick={()=>handleThemeBgColor('bg-color-3')}
									>
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-4" dir="#e5588d"
										onClick={()=>handleThemeBgColor('bg-color-4')}
									>	
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-5" dir="#FB751B"
											onClick={()=>handleThemeBgColor('bg-color-5')}
									>									
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-6" dir="#e4484e"
										onClick={()=>handleThemeBgColor('bg-color-6')}
									></Link>
									</li>
								<li>
									<Link to={"#"} className="bg-color-7" dir="#977fff"
										onClick={()=>handleThemeBgColor('bg-color-7')}
									>
									</Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-8" dir="#eb8153"
										onClick={()=>handleThemeBgColor('bg-color-8')}
									></Link>
								</li>
								<li>
									<Link to={"#"} className="bg-color-9"  dir="#ff8f16"
										onClick={()=>handleThemeBgColor('bg-color-9')}
									>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-12 theme-box mb-4">
							<h5 className="switcher-title"><span>Background Image</span></h5>
							<ul val="bgImage" className="background-switcher theme-panel-save">
								<li>
									<img src={switcherbg1}  alt=""  className="switcher-image-1"
										onClick={()=>handleThemeBgImage('switcher-image-1')}
									/>
								
								</li>
								<li>
									<img src={switcherbg2}  alt=""   className="switcher-image-3"
										onClick={()=>handleThemeBgImage('switcher-image-3')}
									/>
								</li>
								<li>
									<img src={switcherbg3} alt=""  className="switcher-image-6"
										onClick={()=>handleThemeBgImage('switcher-image-6')}
									/>
								</li>
								<li>
									<img src={switcherbg4}  alt=""  className="switcher-image-7"
										onClick={()=>handleThemeBgImage('switcher-image-7')}
									/>
								</li>
								<li>
									<img src={switcherbg5}  alt="" className="switcher-image-17" 
										onClick={()=>handleThemeBgImage('switcher-image-17')}
									/>
								</li>
								<li>
									<img src={switcherbg6}  alt="" className="switcher-image-20"
										onClick={()=>handleThemeBgImage('switcher-image-20')}
									/>
								</li>
								<li>
									<img src={switcherbg7}  alt="" className="switcher-image-21"
											onClick={()=>handleThemeBgImage('switcher-image-21')}
									/>
								</li>
								<li>
									<img src={switcherbg8}  alt="" className="switcher-image-22"
										onClick={()=>handleThemeBgImage('switcher-image-22')}
									/>
								</li>
								<li>
									<img src={switcherbg9}  alt=""  className="switcher-image-23"
										onClick={()=>handleThemeBgImage('switcher-image-23')}
									/>
								</li>
							</ul>
						</div>
						<div className="col-md-12 theme-box">
							<h5 className="switcher-title"><span>Background Pattern</span></h5>
							<ul val="bgPatten" className="pattern-switcher theme-panel-save">
								<li><img src="images/switcher/switcher-patterns/bg1.jpg" dir="images/pattern/pt1.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg2.jpg" dir="images/pattern/pt2.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg3.jpg" dir="images/pattern/pt3.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg4.jpg" dir="images/pattern/pt4.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg5.jpg" dir="images/pattern/pt5.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg6.jpg" dir="images/pattern/pt6.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg7.jpg" dir="images/pattern/pt7.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg8.jpg" dir="images/pattern/pt8.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-patterns/bg9.jpg" dir="images/pattern/pt9.jpg" alt="" /></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
		
	)
}
export default Switcher;