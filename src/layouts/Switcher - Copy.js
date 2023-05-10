import React,{useState, useReducer} from 'react';
import {Link} from 'react-router-dom';

const initialState = false;
const reducer = (state, action) =>{
	if(action.type==='openswitcher'){
		return { ...state, openswitcher: !state.openswitcher};
	}
	
	return state;
}

function Switcher(){
	//const [settingToggle, setSettingToggle] = useState(false);
	
	const [state, dispatch] = useReducer(reducer, initialState);
	
	function handleThemeLayout(){		
		var classTheme = document.body.classList; 		
		
		if(classTheme.contains('layout-light') || classTheme.contains('layout-dark')) {
			classTheme.remove('wide-layout');
			classTheme.add('boxed');
		} else{ 
			classTheme.remove('boxed'); 
		}		
	}
	
	function handleThemeLayoutWide(){
		var wideTheme = document.body.classList; 		
		
		if(wideTheme.contains('boxed') || wideTheme.contains('boxed')) {
			wideTheme.remove('boxed');
			wideTheme.add('wide-layout');
		}else{
			wideTheme.remove('wide-layout'); 
		}
		
	}
	function themeLight(){		
		var thememode = document.body.classList; 		
		if(thememode.contains('layout-dark')) {
			thememode.remove('layout-dark'); 
			thememode.add('layout-light');
		} else { 
			//thememode.remove('layout-light'); 
			//thememode.add('layout-dark');
		}		
	}
	function themeDark(){		
		var thememode = document.body.classList; 		
		if(thememode.contains('layout-light')) {
			thememode.remove('layout-light'); 
			thememode.add('layout-dark');
		} else { 
			//thememode.remove('layout-dark'); 
			//thememode.add('layout-light');
		}		
	}
	
	
	function HeaderPostion(val_1){
		//var headermode = document.getElementsByClassName('main-bar-wraper')[0].classList;
		var headermode = [val_1];
		
		if(headermode.contains('sticky-header')){			
			headermode.remove('sticky-header');
			headermode.add('sticky-no');
		}else if(headermode.contains('sticky-no')){
			headermode.remove('sticky-no');
			headermode.add('sticky-header');
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
										className="theme-skin skin-2 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-2"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-2.png, images/logo-white-2.png, images/logo-white-2.png"
									></a>
								</li>
								<li>
									<a
										className="theme-skin skin-3 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-3"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-3.png, images/logo-white-3.png, images/logo-white-3.png"
									></a>
								</li>
								<li>
									<a
										className="theme-skin skin-4 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-4"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-4.png, images/logo-white-4.png, images/logo-white-4.png"
									></a>
								</li>
								<li>
									<a
										className="theme-skin skin-5 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-5"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo.png, images/logo-white.png, images/logo-white.png"
									></a>
								</li>
								<li>
									<a
										className="theme-skin skin-6 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-6"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-6.png, images/logo-white-6.png, images/logo-white-6.png"
									></a>
								</li>
								<li>
									<a
										className="theme-skin skin-7 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-7"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-7.png, images/logo-white-7.png, images/logo-white-7.png"
									></a>
								</li>
								<li>
									<a
										className="theme-skin skin-8 theme-color"
										href="javascript:void(0);"
										data-color-theme="skin-8"
										data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
										data-logo-image="images/logo-8.png, images/logo-white-8.png, images/logo-white-8.png"
									></a>
								</li>
								<li>
									<a
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
								<li className="wide-layout active">
									<a href="javascript:void(0);" dir="wide-layout" onClick={()=>handleThemeLayoutWide()}>
										<div></div>
										<span>Wide</span>
									</a>
								</li>
								<li className="boxed">
									<a href="javascript:void(0);" dir="boxed"  onClick={()=> handleThemeLayout()}>
										<div><span></span></div>
										<span>Boxed</span>
									</a>
								</li>
								<li className="frame">
									<a href="javascript:void(0);" dir="frame">
										<div><span></span></div>
										<span>Frame</span>
									</a>
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
							<ul className="theme-panel-save tab-checkbx theme-view-ltr-rtl" val="mode">
								<li className="ltr-theme active"><a href="'+urlLTR+'" rel="ltr">LTR</a></li>
								<li className="rtl-theme"><a href="'+urlRTL+'" rel="rtl">RTL</a></li>
							</ul>
						</div>
						<div className="col-xl-6 theme-box">
							<h5 className="switcher-title"><span>Dark Mode</span></h5>
							<ul className="theme-panel-save theme-version tab-checkbx" val="themeVersion">
								<li className="light-theme active">
									<Link to={"#"} dir="light" logo="images/logo.png" 
										onClick={()=>themeLight()}
									>
										Light
									</Link>
								</li>
								<li className="dark-theme">
									<Link to={"#"} dir="dark" logo="images/logo-white.png"
										onClick={()=>themeDark()}
									>Dark
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-xl-6 theme-box">
							<h5 className="switcher-title"><span>Header</span></h5>
							<ul val="header" className="tab-checkbx header-view theme-panel-save">
								<li className="header-fixed active">
									<Link to={"#"} dir="sticky-header" 
										onClick={()=>HeaderPostion('header-fixed')}
									>
											Fixed
									</Link>
								</li>
								<li className="header-static">
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
								<li><a className="bg-color-1" href="javascript:void(0);" dir="#fe4c1c"></a></li>
								<li><a className="bg-color-2" href="javascript:void(0);" dir="#2eb999"></a></li>
								<li><a className="bg-color-3" href="javascript:void(0);" dir="#26AA5D"></a></li>
								<li><a className="bg-color-4" href="javascript:void(0);" dir="#e5588d"></a></li>
								<li><a className="bg-color-5" href="javascript:void(0);" dir="#FB751B"></a></li>
								<li><a className="bg-color-6" href="javascript:void(0);" dir="#e4484e"></a></li>
								<li><a className="bg-color-7" href="javascript:void(0);" dir="#977fff"></a></li>
								<li><a className="bg-color-8" href="javascript:void(0);" dir="#eb8153"></a></li>
								<li><a className="bg-color-9" href="javascript:void(0);" dir="#ff8f16"></a></li>
							</ul>
						</div>
						<div className="col-md-12 theme-box mb-4">
							<h5 className="switcher-title"><span>Background Image</span></h5>
							<ul val="bgImage" className="background-switcher theme-panel-save">
								<li><img src="images/switcher/switcher-bg/bg1.jpg" dir="images/background/bg1.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg2.jpg" dir="images/background/bg3.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg3.jpg" dir="images/background/bg6.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg4.jpg" dir="images/background/bg7.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg5.jpg" dir="images/background/bg17.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg6.jpg" dir="images/background/bg20.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg7.jpg" dir="images/background/bg21.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg8.jpg" dir="images/background/bg22.jpg" alt="" /></li>
								<li><img src="images/switcher/switcher-bg/bg9.jpg" dir="images/background/bg23.jpg" alt="" /></li>
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