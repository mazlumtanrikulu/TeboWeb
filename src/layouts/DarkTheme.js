import React,{useState} from 'react';

function DarkTheme(){
	function handleThemeMode(){		
		var elementClass = document.body.classList; 		
		if(elementClass.contains('layout-light')) {
			elementClass.remove('layout-light'); 
			elementClass.add('layout-dark');
		} else { 
			elementClass.remove('layout-dark'); 
			elementClass.add('layout-light');
		}		
	}
	return(
		<>
			<div				
				className={"dz-mode"}								
				onClick={() => handleThemeMode() }
			>
				<i className="fas fa-sun" ></i>	
				<i className="fas fa-moon"></i>	
			</div>
		</>
	)
}
export default DarkTheme;