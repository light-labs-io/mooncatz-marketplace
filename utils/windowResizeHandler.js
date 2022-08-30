window.onresize = (e) => {
	// Keep Menu Items Square
	
	let menuItems = document.getElementsByClassName("menuItem");
	for (let i = 0; i < menuItems.length; i++){
	  menuItems[i].style.height = (menuItems[i].offsetWidth + "px");
	};
};
