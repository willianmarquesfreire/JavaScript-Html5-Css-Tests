/*
	Criar Desktop:
		var desktop = document.body.newDesktop({});
	
	Propriedades:
	
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
	Criar Janela:
		var janela = newWindow.SimpleWindow({});
		
	Propriedades:
	
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		
	Criar Ícone:
		var icon = janela.newIcon({},function(){});
		
	Propriedades:
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		
	Criar Thumbnail:
		$("#goMenuBody").newThumbnail({},function(){});
		
	Propriedades:
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		
	Criar Botão:
		janela.newButton({});
		
	Propriedades:
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		
	Criar Caixa de Texto:
		janela.newText({});
		
	Propriedades:
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
	Criar Menu Dropdown:
		janela.newMenuBar({},options...);
		
	Propriedades:
	
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
	Criar Tabela:
		janela.newTable({});
		
	Propriedades:
	
		





*/
/*************************************************************************************************************************************************************************************/
/*
	Name: Manipulador de Seletores
	Utility: Manipular Seletores
*/
var wmf = function(){
	var retorno;
	var argumento = arguments[0];
	var caracter = argumento.charAt(0);
	switch(caracter){
	case "#":
		retorno = document.getElementById(argumento.substr(1,arguments[0].length));
	break;
	case "@":
		retorno = document.getElementsByTagName(argumento.substr(1,arguments[0].length));
	break;
	case "!":
		retorno = document.getElementsByName(argumento.substr(1,arguments[0].length));
	break;
	default:
		 return "Error";
	}
	return retorno;
}
var $ = wmf;

/*************************************************************************************************************************************************************************************/
/*
	Name: Setador de Seletores
	Utility: Setar Seletores
*/
Object.prototype.set = function(options){
options = (typeof options !== "object") ? {} : options;

this.style.color = options.color || this.style.color;
this.innerHTML = options.html || this.innerHTML;
this.style.backgroundColor = options.backgroundColor || this.style.backgroundColor;
this.style.background = options.background || this.style.background;






}

Object.prototype.importSRC = function(name){
		var s = document.createElement('script');
		s.src = name;
		this.appendChild(s);
	}


function mostraCoordenada(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
}

/*********************************************************************************** Desktop *****************************************************************************************/
/*
	Name: Área de Trabalho
	Utility: Container Simulador Principal
*/

Object.prototype.newDesktop = function(){
	var desktop, tarefBar, goMenu, taskBar, extras, clock, clearDesktop, goMenuBody, clockBody, extrasBody;
	var thisElemId;

	document.body.style.margin = "0px";
	document.body.style.overflow = "hidden";
	desktop = document.createElement("div");
	desktop.id = "desktop";
	desktop.className = "desktop";
	desktop.style.border = "1px solid #000000";
	desktop.overflow = "hidden";
	desktop.style.margin = "0px";
	desktop.style.background = "url(wallpaper/6.jpg)";
	desktop.style.backgroundRepeat = "no-repeat";
	desktop.style.height = (window.innerHeight).toString().concat("px");
	desktop.style.width = (window.innerWidth-2).toString().concat("px");


	tarefBar = document.createElement("div");
	tarefBar.style.border = "1px solid #000000";
	tarefBar.style.background = "#080C0C";
	tarefBar.style.color = "white";
	tarefBar.style.opacity = "0.8";
	tarefBar.style.height = "30px";
	tarefBar.style.zIndex = "9999";
	tarefBar.style.width = (window.innerWidth-4).toString().concat("px");
	tarefBar.style.position = "relative";
	tarefBar.style.top = (window.innerHeight-32).toString().concat("px");

	goMenu = document.createElement("div");
	goMenu.style.borderRight = "1px solid #3C3D3D";
	goMenu.style.backgroundColor = "transparent";
	goMenu.style.width = "60px";
	goMenu.style.height = "32px";
	goMenu.style.display = "inline-block";
	goMenu.id = "goMenu";
	
	var imgGoMenu = document.createElement("img");
	imgGoMenu.src = "icons/8934_128x128.png";
	imgGoMenu.className = "imgGoMenu";
	imgGoMenu.style.height = "40px";
	imgGoMenu.style.width = "40px";
	imgGoMenu.style.paddingLeft = "4px";
	imgGoMenu.style.position = "absolute";
	imgGoMenu.style.top = "-1px";
	goMenu.appendChild(imgGoMenu);


	taskBar = document.createElement("div");
	taskBar.style.border = "1px solid transparent";
	taskBar.style.background = "transparent";
	taskBar.style.width = (window.innerWidth-175).toString().concat("px");
	taskBar.style.height = "30px";
	taskBar.style.position = "relative";
	taskBar.style.top = "0px";
	taskBar.style.display = "inline-block";
	taskBar.id = "taskBar";

	extras = document.createElement("div");
	extras.style.background = "transparent";
	extras.style.border = "1px solid #0099FF";
	extras.style.width = "10px";
	extras.style.height = "30px";
	extras.style.display = "inline-block";
	goMenu.id = "extras";

	clock = document.createElement("div");
	clock.style.border = "1px solid #3C3D3D";
	clock.style.width = "85px";
	clock.style.background = "transparent";
	clock.style.height = "30px";
	clock.style.display = "inline-block";
	clock.id = "clock";

	clearDesktop = document.createElement("div");
	clearDesktop.style.border = "1px solid #0099FF";
	clearDesktop.style.background = "transparent";
	clearDesktop.style.width = "6px";
	clearDesktop.style.height = "30px";
	clearDesktop.style.display = "inline-block";
	clearDesktop.id = "clearDesktop";

	goMenuBody = document.createElement("div");
	goMenuBody.style.border = "3px solid #0099FF";
	goMenuBody.style.borderRadius = "2pt";
	goMenuBody.style.opacity = "0.98";
	goMenuBody.style.overflowY = "scroll";
	goMenuBody.style.overflowX = "hidden";

	goMenuBody.style.background = "#080C0C";
	goMenuBody.style.opacity = "0.9";
	goMenuBody.style.position = "absolute";
	goMenuBody.style.top = (window.innerHeight-440).toString().concat("px");
	goMenuBody.style.width = "470px";
	goMenuBody.style.height = "400px";
	goMenuBody.style.display = "none";
	goMenuBody.style.zIndex = "9999";
	goMenuBody.id = "goMenuBody";
	

	goMenu.addEventListener("click",function(){
		goMenuBody.style.display = "block";
		thisElemId = "goMenuBody";
		return false;
	});

	clockBody = document.createElement("div");
	clockBody.style.border = "3px solid #3C3D3D";
	clockBody.style.borderRadius = "2pt";
	clockBody.style.background = "white";
	clockBody.style.position = "absolute";
	clockBody.style.top = (window.innerHeight-240).toString().concat("px");
	clockBody.style.left = (window.innerWidth-310).toString().concat("px");
	clockBody.style.width = "300px";
	clockBody.style.zIndex = "9999";
	clockBody.style.height = "200px";
	clockBody.style.display = "none";
	clockBody.id = "clockBody";


	clock.addEventListener("click",function(){
		clockBody.style.display = "block";
		thisElemId = "clockBody";
		return false;
	});

	extrasBody = document.createElement("div");
	extrasBody.id = "extrasBody";
	extrasBody.style.border = "3px solid #3C3D3D";
	extrasBody.style.borderRadius = "2pt";
	extrasBody.style.background = "white";
	extrasBody.style.position = "absolute";
	extrasBody.style.top = (window.innerHeight-340).toString().concat("px");
	extrasBody.style.left = (window.innerWidth-210).toString().concat("px");
	extrasBody.style.width = "150px";
	extrasBody.style.height = "300px";
	extrasBody.style.display = "none";
	extrasBody.style.zIndex = "9999";
	extrasBody.appendChild(document.createTextNode("ldjf"));
	extrasBody.id = "extrasBody";


	extras.addEventListener("click",function(){
		extrasBody.style.display = "block";
		thisElemId = "extrasBody";
		return false;
	});


	window.onresize = function(){
		desktop.style.height = (window.innerHeight).toString().concat("px");
		desktop.style.width = (window.innerWidth-2).toString().concat("px");
		tarefBar.style.width = (window.innerWidth-4).toString().concat("px");
		tarefBar.style.top = (window.innerHeight-32).toString().concat("px");
		taskBar.style.width = (window.innerWidth-175).toString().concat("px");
		goMenuBody.style.top = (window.innerHeight-440).toString().concat("px");
		clockBody.style.top = (window.innerHeight-240).toString().concat("px");
		clockBody.style.left = (window.innerWidth-310).toString().concat("px");
		extrasBody.style.top = (window.innerHeight-340).toString().concat("px");
		extrasBody.style.left = (window.innerWidth-210).toString().concat("px");
	}

	tarefBar.appendChild(goMenu);
	tarefBar.appendChild(taskBar);
	tarefBar.appendChild(extras);
	tarefBar.appendChild(clock);
	tarefBar.appendChild(clearDesktop);
	desktop.appendChild(goMenuBody);
	desktop.appendChild(clockBody);
	desktop.appendChild(extrasBody);
	desktop.appendChild(tarefBar);
	
		document.addEventListener("mousedown",function(e){
		var elem = e.target.id;
		var elemClass = e.target.className;
			if((elem !== thisElemId) && (elemClass !== "thumbnail")){
			goMenuBody.style.display = "none";
			clockBody.style.display = "none";
			extrasBody.style.display = "none";
			}
		return false;
	});

	this.appendChild(desktop);
	
	
	
	
	var add = {
		desktop:desktop,
		clock:clock,
		clockBody:clockBody,
		extras:extras,
		extrasBody:extrasBody,
		goMenu:goMenu,
		goMenuBody:goMenuBody,
		imgGoMenu:imgGoMenu,
		tarefBar:tarefBar,
		taskBar:taskBar,
		clearDesktop:clearDesktop,
		name:"desktop"
	};
	
	
	return add;

}


/******************************************************************************************* Window **********************************************************************************/
/*
	Name: Janelas de Trabalho
	Utility: Guardar Components
*/






Object.prototype.newWindow = function(options){

	options = (typeof options !== "object") ? {} : options;

	var Dad = document.getElementById("desktop");
	
	var div = document.createElement("div");
	div.style.border = "1px solid #000000";
	div.style.height = options.height || "200px";
	div.style.width = options.width || "300px";
	div.style.position = "absolute";
	div.style.top = options.top || (Math.round(Math.random()*100)+"px");
	div.style.left = options.left || ((Math.round(Math.random()*100)*5)+"px");
	div.style.display = "block";
	div.style.border = "1px solid transparent";
	div.className = "windowClass";
	div.style.zIndex = "100";
	div.id = "window";
	div.style.borderRadius = "0px";
	
	
	var aba = document.createElement("div");
	aba.style.border = "1px solid #000000";
	aba.style.height = "21px";
	aba.style.width = "99.7%";
	aba.style.border = "1px solid #297ACC";
	aba.style.backgroundColor = "#2E3D4C";
	aba.style.opacity = "0.9";
	
	var title = document.createElement("div");
	title.style.border = "1px solid transparent";
	title.style.height = "20px";
	title.style.color = "white";
	title.style.width = (parseInt(div.style.width)-98).toString().concat("px");
	title.style.display = "inline-block";
	title.style.cssFloat = "left";
	
	
	title.innerHTML = "wmf";
	
	
	aba.appendChild(title);
	
	var buttons = document.createElement("div");
	buttons.style.border = "1px solid transparent";
	buttons.style.height = "20px";
	buttons.style.width = "91px";
	buttons.style.display = "inline-block";
	buttons.style.cssFloat = "right";
	
	aba.appendChild(buttons);
	
	var minimize;
	var maximize;
	var restaure;
	var close;
	var miniature;
	
	miniature = document.createElement("div");
	miniature.innerHTML = title.innerHTML;
			
	miniature.style.display = "inline-block";
	miniature.style.position = "relative";
	miniature.style.top = "-3px";
	miniature.style.height = "25px";
	miniature.style.width = "100px";
	miniature.style.color = "white";
	miniature.style.opacity = "0.8";
	miniature.style.margin = "1px";
	miniature.style.backgroundColor = "transparent";
	miniature.style.border = "1px solid #2E3D4C";
	miniature.style.paddingLeft = "10px";
	miniature.style.overflow = "hidden";
	miniature.style.textOverflow = "ellipsis";

	document.getElementById("taskBar").appendChild(miniature);
	
	miniature.onmouseover = function(){
		miniature.style.backgroundColor = "#8B97A3";
	}
	miniature.onmouseout = function(){
		miniature.style.backgroundColor = "transparent";
	}
		
	
	minimize = buttons.newWindowButton("_");
	minimize.style.height = "19px";
	minimize.style.color = "white";
	minimize.style.backgroundColor = "transparent";
	minimize.style.opacity = "0.8";
	minimize.style.border = "1px solid transparent";
	
	minimize.addEventListener("mouseover",function(){
		minimize.style.border = "1px solid #6B8FB2";
		minimize.style.backgroundColor = "#6B8FB2";
	});
	minimize.addEventListener("mouseout",function(){
		minimize.style.border = "1px solid transparent";
		minimize.style.backgroundColor = "transparent";
	});
	
	miniature.addEventListener("click",function(){
		div.style.display = "block";
		
		for(var i = 0; i < document.getElementsByClassName("windowClass").length; i++){
			document.getElementsByClassName("windowClass")[i].style.zIndex = "2";
		}
		div.style.zIndex = "100";
		
		
		
	});
	
	minimize.addEventListener("click",function(){
		div.style.display = "none";		
	});
	
	maximize = buttons.newWindowButton("[]");
	maximize.style.height = "19px";
	maximize.style.backgroundColor = "transparent";
	maximize.style.border = "1px solid transparent";
	maximize.style.opacity = "0.8";
	maximize.style.color = "white";
	var maximizeTrue = false;
	
	maximize.addEventListener("mouseover",function(){
		maximize.style.border = "1px solid #6B8FB2";
		maximize.style.backgroundColor = "#6B8FB2";
	});
	maximize.addEventListener("mouseout",function(){
		maximize.style.border = "1px solid transparent";
		maximize.style.backgroundColor = "transparent";
	});
	
	var antHeight;
	var antWidth;
	var antTop;
	var antLeft;
	
	maximize.addEventListener("click",function(){
		
		maximizeTrue = true;
		for(var i = 0; i < document.getElementsByClassName("windowClass").length; i++){
			document.getElementsByClassName("windowClass")[i].style.zIndex = "2";
		}
		div.style.zIndex = "100";
		
		antHeight = div.style.height;
		antWidth = div.style.width;
		antTop = div.offsetTop;
		antLeft = div.offsetLeft;
		div.style.height = (Dad.offsetHeight-35)+"px";
		div.style.width = (Dad.offsetWidth)+"px";
		div.style.top = "0px";
		div.style.left = "0px";
		body.style.height = (div.offsetHeight-49)+"px";
		title.style.width = (buttons.offsetLeft-4)+"px";
		div.style.opacity = "1.0";
		
		
		maximize.style.display = "none";
		buttons.removeChild(close);
		var restaure = buttons.newWindowButton("[*]");
		restaure.style.backgroundColor = "transparent";
		restaure.style.opacity = "0.8";
		restaure.style.border = "1px solid transparent";
		restaure.style.height = "19px";
		restaure.style.color = "white";
	
		restaure.addEventListener("mouseover",function(){
			restaure.style.border = "1px solid #6B8FB2";
			restaure.style.backgroundColor = "#6B8FB2";
		});
		restaure.addEventListener("mouseout",function(){
			restaure.style.border = "1px solid transparent";
			restaure.style.backgroundColor = "transparent";
		});
		
		
		buttons.appendChild(close);
		
		restaure.addEventListener("click",function(){
		
			maximizeTrue = false;
			
			div.style.height = antHeight;
			div.style.width = antWidth;
			body.style.height = (div.offsetHeight-47)+"px";
			title.style.width = (buttons.offsetLeft-5)+"px";
			
			restaure.style.display = "none";
			buttons.removeChild(close);
			maximize.style.display = "block";
			buttons.appendChild(close);
			
			div.style.top = antTop+"px";
			div.style.left = antLeft+"px";
			
		});
		
	});
	
	close = buttons.newWindowButton("X");
	close.style.height = "19px";
	close.style.width = "35px";
	close.style.backgroundColor = "#FF5C33";
	close.style.color = "white";
	close.style.border = "1px solid transparent";
	
		close.addEventListener("mouseover",function(){
			close.style.border = "1px solid transparent";
			close.style.backgroundColor = "#FF4719";
		});
		close.addEventListener("mouseout",function(){
			close.style.border = "1px solid transparent";
			close.style.backgroundColor = "#FF5C33";
		});
	
	
	close.addEventListener("click",function(){
		div.style.display = "none";
		miniature.style.display = "none";
	});
	
	
	var body = document.createElement("div");
	body.style.border = "1px solid #2E8AE6";
	body.style.height = (parseInt(div.style.height)-46).toString().concat("px");
	body.style.width = "99.7%";
	body.style.backgroundColor = "white";
	body.style.overflowY = "scroll";
	body.className = "bodyWindowClass";
	
	var statusBar = document.createElement("div");
	statusBar.style.border = "1px solid #2E8AE6";
	statusBar.style.height = "20px";
	statusBar.style.width = "99.7%";
	statusBar.style.display = "block";
	statusBar.style.backgroundColor = "white";
	
	var redimensione = document.createElement("div");
	redimensione.style.border = "1px solid #70B8FF";
	redimensione.style.height = "18px";
	redimensione.style.width = "18px";
	redimensione.style.cssFloat = "right";
	
	statusBar.appendChild(redimensione);
	
	redimensione.onmousedown = function(){
		var initialXOffset = div.offsetLeft;
		var initialYOffset = div.offsetTop;
		document.onmousemove = function(event){
			div.style.height = (event.clientY-(initialYOffset-10)).toString().concat("px");
			div.style.width = (event.clientX-(initialXOffset-10)).toString().concat("px");
			body.style.height = (div.offsetHeight-47)+"px";
			title.style.width = (buttons.offsetLeft-5)+"px";
			div.style.opacity = "0.7";
		}	
		document.onmouseup = function(evt){
			document.onmousemove = null;
			document.onmousedown = null;
			div.style.opacity = "1.0";
		}
	}
	
	
	
	function moveJanela(event){
		
		for(var i = 0; i < document.getElementsByClassName("windowClass").length; i++){
			document.getElementsByClassName("windowClass")[i].style.zIndex = "2";
		}
		div.style.zIndex = "100";
			
		var initialXOffset = (div.offsetLeft - event.pageX);
		var initialYOffset = (div.offsetTop - event.pageY);
		document.onmousemove = function(event){
			div.style.top = (event.pageY+initialYOffset)+"px";
			div.style.left = (event.pageX+initialXOffset)+"px";
			div.style.opacity = "0.7";
		}
		document.onmouseup = function(evt){
			document.onmousemove = null;
			document.onmousedown = null;
			div.style.opacity = "1.0";
		}
	}
	
	
	title.onmousedown = moveJanela;
	
	window.addEventListener("resize",function(){
		if(maximizeTrue){
			div.style.height = (Dad.offsetHeight-35)+"px";
			div.style.width = (Dad.offsetWidth-3)+"px";
			body.style.height = (div.offsetHeight-49)+"px";
			title.style.width = (buttons.offsetLeft-5)+"px";
		
		}
	});
	
	
	div.appendChild(aba);
	div.appendChild(body);
	div.appendChild(statusBar);
	
	
	this.appendChild(div);
	
	var add = {
		body:body,
		div:div,
		name:"window"
	
	};
	
	return add;
}






//Menus da janela
Object.prototype.newWindowButton = function(value,parameter){

	
	var input = document.createElement("input");
	input.type = "button";
	input.value = value;
	input.style.margin = "0px";
	input.style.fontSize = "10px";
	input.style.position = "relative";
	input.style.display = "inline-block";
	input.style.cssFloat = "left";
	input.style.backgroundColor = "#8B97A3";
	input.style.border = "1px solid #6B8FB2";
	
	this.appendChild(input);
	return input;
}




/*************************************************************************************************************************************************************************************/
/*
	Name: Drag and Drop
	Utility: Movimentar Objetos
*/
function dragOnDrop(objClass){
function move(n){

var div = document.getElementsByClassName(objClass)[n];

div.onmousedown = function(event){

		var initialXOffset = (div.offsetLeft - event.pageX);
		var initialYOffset = (div.offsetTop - event.pageY);
		document.onmousemove = function(event){
			div.style.top = (event.pageY+initialYOffset-35)+"px";
			div.style.left = (event.pageX+initialXOffset-2)+"px";
		}
}

	document.onmouseup = function(){
		document.onmousemove = null;
		document.onclick = null;
		document.onmousedown = null;
	}
}

for(var x = 0; x < document.getElementsByClassName(objClass).length; x++){
move(x);
}
}

/*************************************************************************************************************************************************************************************/
/*
	Name: Miniaturas
	Utility: Utilizadas geralmente para MenuGo
*/
Object.prototype.newThumbnail = function(options,parameter){
var div = document.createElement("div");
div.className = "thumbnail";

	options = (typeof(options) !== "object") ? {} : options;
	options.width = options.width || "128px";
	options.height = options.height || "128px";
	options.border = options.border || "2px solid #4D3E4E";
	options.borderSelect = options.borderSelect || "2px solid #3399FF";
	options.position = options.position || "relative";
	options.display = options.display || "block";
	options.background = options.background || "transparent";
	options.backgroundSelect = options.backgroundSelect || options.background;
	options.description = options.description || "IconeTeste..";
	options.borderRadius = options.borderRadius || "1pt";
	options.src = options.src || "icons/standard.png";
	var firstDad = this.className;

	div.style.width = options.width;
	div.style.height = options.height;
	div.style.border = options.border;
	div.style.position = options.position;
	div.style.display = options.display;
	div.style.background = options.background;
	div.style.borderRadius = options.borderRadius;
	div.style.opacity = "1.0";
	div.style.margin = "1px";
	div.style.cssFloat = "left";
	
	var img = document.createElement("img");
	img.src = options.src;
	img.style.width = "50%";
	img.style.height = "50%";
	img.style.margin = "2px";
	img.style.paddingLeft = "20%";
	img.style.paddingTop = "10%";
	img.className = "thumbnail";
	
	var texto = document.createTextNode(options.description);
	var description = document.createElement("p");
	description.appendChild(texto);
	description.style.textAlign = "center";
	description.style.overflow = "hidden";
	description.style.margin = "1px";
    description.style.textOverflow = "ellipsis";
	description.className = "thumbnail";
	description.style.color = "white";
	
	
/******************** Adcionando Elementos *****************/
	div.appendChild(img);
	div.appendChild(description);
	this.appendChild(div);
	
/********************* Eventos do Ícone *********************/
	img.ondragstart = function(){
		return false;
	}
	
	div.onmouseover = function(e){
		div.style.background = options.backgroundSelect;
		div.style.border = options.borderSelect;
		div.style.opacity = "0.9";
		return false;
	}
	div.onmouseout = function(){
		div.style.background = options.background;
		div.style.border = options.border;
		div.style.opacity = "1.0";
		if(firstDad == "intoJanelaClass"){
		description.style.color = "white";
		return false;
		}
	}
	var newDesc = document.createElement("input");
	newDesc.value = options.description;
	newDesc.className = "thumbnail";
	description.onclick = function(){
		newDesc.type = "text";
		newDesc.style.width = "90px";
		newDesc.style.height = "12px";
		description.removeChild(texto);
		description.appendChild(newDesc);
		return false;
	}
	img.onclick = function(){
		(typeof(parameter) !== "function") ? {} : parameter.call();
		description.removeChild(newDesc);
		texto = document.createTextNode(newDesc.value);
		description.appendChild(texto);
		return false;
	}
	
	return this;
}

/*************************************************************************************************************************************************************************************/
/*
	Name: Ícones Principais
	Utility: Acesso de Opções e Janelas
*/
Object.prototype.newIcon = function(options,parameter){
var div = document.createElement("div");
div.className = "icon";
	
	var Dad = this;
	options = (typeof(options) !== "object") ? {} : options;
	options.width = options.width || "100px";
	options.height = options.height || "90px";
	options.border = options.border || "2px solid transparent";
	options.borderSelect = options.borderSelect || "2px solid #3399FF";
	options.position = options.position || "relative";
	options.display = options.display || "inline-block";
	options.background = options.background || "transparent";
	options.backgroundSelect = options.backgroungSelect || "#D1F0FF";
	options.description = options.description || "IconeTeste..";
	options.borderRadius = options.borderRadius || "1pt";
	options.src = options.src || "icons/standard.png";
	var firstDad = this.className;

	div.style.width = options.width;
	div.style.height = options.height;
	div.style.border = options.border;
	div.style.position = options.position;
	div.style.display = options.display;
	div.style.background = options.background;
	div.style.borderRadius = options.borderRadius;
	div.style.opacity = "1.0";
	div.style.margin = "1px";
	
	var img = document.createElement("img");
	img.src = options.src;
	img.style.width = "70%";
	img.style.height = "70%";
	img.style.margin = "2px";
	img.style.paddingLeft = "10%";
	
	var texto = document.createTextNode(options.description);
	var description = document.createElement("p");
	description.appendChild(texto);
	description.style.textAlign = "center";
	if(firstDad == "bodyWindowClass" || firstDad == "container"){
		description.style.color = "black";
		description.style.textShadow = "white 0.1em 0.1em 0.2em";
	}else{
	description.style.color = "white";
	description.style.textShadow = "black 0.1em 0.1em 0.2em";
	}
	description.style.overflow = "hidden";
	description.style.margin = "1px";
    description.style.textOverflow = "ellipsis";
/******************** Adcionando Elementos *****************/
	div.appendChild(img);
	div.appendChild(description);
	this.appendChild(div);
	
/********************* Eventos do Ícone *********************/
	img.ondragstart = function(){
		return false;
	}
	img.ondblclick = function(){(typeof(parameter) !== "function") ? {} : parameter.call();return false;};
	
	div.onmouseover = function(e){
		div.style.background = options.backgroundSelect;
		div.style.border = options.borderSelect;
		description.style.color = "black";
		div.style.opacity = "0.8";
		return false;
	}
	div.onmouseout = function(){
		div.style.background = options.background;
		div.style.border = options.border;
		div.style.opacity = "1.0";
		if(firstDad == "bodyWindowClass" || firstDad == "container"){
		description.style.color = "black";
		return false;
		}else{
		description.style.color = "white";
		}
	}
	var newDesc = document.createElement("input");
	newDesc.value = options.description;
	description.ondblclick = function(){
		newDesc.type = "text";
		newDesc.style.width = "90px";
		newDesc.style.height = "12px";
		description.removeChild(texto);
		description.appendChild(newDesc);
		return false;
	}
	img.onclick = function(){
		description.removeChild(newDesc);
		texto = document.createTextNode(newDesc.value);
		description.appendChild(texto);
		return false;
	}
	if(firstDad == "desktop"){
		div.className = "iconDesktop";
		dragOnDrop(div.className);
		
	}
	
	var add = {
		Dad:Dad,
		Element:div
	};
	
	
	return add;
}


/*************************************************************************************************************************************************************************************/
/*
	Name: Menu Dropdown
	Utility: Conter Subopcoes
*/
Object.prototype.newMenuBar = function(options){

	var Dad = this;

	options = (typeof options !== "object") ? {} : options;
	var elements = new Array();

	var div = document.createElement("div");
	div.id = "menuBar";
	div.style.display = "inline-block";
	div.style.position = options.position || "relative";
	div.style.top = options.top;
	div.style.left = options.left;
	div.style.zIndex = "9999";
	div.style.margin = "1px";

	

	var ul = document.createElement("ul");
	ul.className = "menu";

	var liTitle = document.createElement("li");
	liTitle.className = "titleMenu";
	liTitle.innerHTML = "Home";
	ul.appendChild(liTitle);

	var li = document.createElement("li");
	li.className = "sub";

	liTitle.style.backgroundColor = "#336680";
	liTitle.style.color = "#E6F0F0";
	liTitle.style.fontWeight = "bold";
	liTitle.style.fontSize = "15px";

	div.style.border = "2px solid #5CB8E6";
	div.style.borderRadius = "3px";
	div.style.width = "100px";

	ul.style.backgroundColor = "#99C2C2";
	ul.style.listStyleType = "none";
	ul.style.margin = "0px";
	ul.style.padding = "0px";
	ul.style.textAlign = "center";
	ul.style.width = "100%";

	for(var x = 1; x < arguments.length; x++){
		li = document.createElement("li");
		li.className = "sub";
		var link = document.createElement("a");
		

		li.style.backgroundColor = "#99C2C2";
		li.style.listStyleType = "none";
		li.style.margin = "0px";
		li.style.height = "0px";
		li.style.padding = "0px";
		li.style.textAlign = "center";
		li.style.width = "100%";
		li.style.visibility = "hidden";
		li.style.transition = "height 0.5s";

		li.onmouseover = function(){
			this.style.backgroundColor = "white";
			this.style.cursor = "pointer";
		}
		li.onmouseout = function(){
			this.style.backgroundColor = "#99C2C2";
		}

		link.style.textDecoration = "none";
		link.style.color = "#000A0A";
		link.style.textShadow = "1px 1px #338585";

		link.appendChild(document.createTextNode(arguments[x]));
		li.appendChild(link);
		ul.appendChild(li);

		elements.push(li);

	}
	div.appendChild(ul);

	ul.onmouseover = function(){
		for(var x = 0; x < elements.length; x++){
			elements[x].style.visibility = "visible";
			elements[x].style.height = "25px";
			elements[x].style.opacity = "1.0";
			elements[x].style.transition = "opacity 1s, visibility 1s, height 0.5s";
		}
	}

	ul.onmouseout = function(){
		for(var x = 0; x < elements.length; x++){
			elements[x].style.visibility = "hidden";
			elements[x].style.height = "0px";
			elements[x].style.opacity = "0.0";
		}
	}

	this.appendChild(div);
	
	var add = {
		Dad:Dad,
		option:elements,
		Element:div
	};

	return add;
}
/*************************************************************************************************************************************************************************************/
/*
	Name: Botão
	Utility: Acionar Funções
*/


Object.prototype.newButton = function(options,parameter){

	var Dad = this;
	
	options = (typeof(options) !== "object") ? {} : options;
	
	var div = document.createElement("div");
	div.style.width = "100px";
	div.style.padding = "2px";
	div.style.textAlign = "center";
	div.style.backgroundColor = "#E0F5FF";
	div.style.cursor = "pointer";
	div.style.margin = "1px";
	div.style.position = "relative";
	div.style.display = "inline-block";

	div.style.border = "1px solid #94DBFF";
	
	div.innerHTML = options.value;
	
	this.appendChild(div);
	
	
	
	div.onmouseover = function(){
		div.style.backgroundColor = "#C2EBFF";
	}
	div.onmouseout = function(){
		div.style.backgroundColor = "#E0F5FF";
		div.style.border = "1px solid #94DBFF";
	}
	div.addEventListener("click",function(){
		div.style.backgroundColor = "#94DBFF";
		div.style.border = "1px solid #52A3CC";
		if(typeof(parameter) !== "function") {} else { 
			parameter.call();
		}
	});
	
	var add = {
		Element:div,
		Dad:Dad
	};
	
	return add;
	
}


/*************************************************************************************************************************************************************************************/
/*
	Name: Caixa de Texto
	Utility: Obter Texto
*/
Object.prototype.newText = function(){
	var input = document.createElement("input");
	input.type = "text";
	input.style.backgroundColor = "#B2D1FF";
	input.style.color = "#192231";
	input.style.borderRadius = "2pt";
	input.style.border = "1px solid #66A3FF";
	input.style.opacity = "1.0";
	input.style.display = "inline-block";
	input.style.position = "relative";
	input.style.margin = "1px";
	input.style.height = "21px";
	
	input.addEventListener("mouseover",function(){
		input.style.border = "1px solid #80B2FF";
		input.style.opacity = "0.9";
	});
	
	input.addEventListener("mouseout",function(){
		input.style.border = "1px solid #80B2FF";
		input.style.opacity = "1.0";
	});
	
	input.addEventListener("mousedown",function(){
		input.style.border = "1px solid #4D94FF";
		input.style.opacity = "0.9";
	});
	
	this.appendChild(input);
	
	var add = {
		Element:input,
		value:input.value,
		addEvent:function(event,func){
			input.addEventListener(event,func);
			return this;
		}
	}
	return add;
}

/*************************************************************************************************************************************************************************************/
/*
	Name: Tabelas
	Utility: Guardar Informações
*/
Object.prototype.newTable = function(){
	
	var titles = new Array();
	var elems = new Array();
	var Dad = this;
	
	var table = document.createElement("table");
	table.style.width = "100%";
	table.style.border = "0px solid #2E3D4C";
	table.style.borderCollapse = "collapse";
	
	
	var titleBar = document.createElement("tr");
	table.appendChild(titleBar);
	
	titleBar.style.backgroundColor = "#99CCFF";
	titleBar.style.color = "white";
	
	var add = {
		Element:table,
		Dad:Dad,
		title:function(){
			for(var x = 0; x < arguments.length; x++){
				titles.push(arguments[x]);
				
				var titleTh = document.createElement("th");
				titleTh.innerHTML = titles[x];
				
				titleBar.appendChild(titleTh);
			}
			return this;
		},
		append:function(){
			var elemBar = document.createElement("tr");
			table.appendChild(elemBar);
			
			var bgColorAnt;
			elemBar.addEventListener("mouseover",function(){
				bgColorAnt = this.style.backgroundColor;
				this.style.backgroundColor = "#ADD6FF";
			});
			elemBar.addEventListener("mouseout",function(){
				this.style.backgroundColor = bgColorAnt;
			});
			elemBar.addEventListener("click",function(){
				this.style.backgroundColor = "#6B8FB2";
			});
			
			for(var x = 0; x < arguments.length; x++){
				
				
				var th = document.createElement("th");
				th.id = arguments[x];
				th.style.color = "#0F141A";
				th.innerHTML = arguments[x];
				th.style.borderBottom = "1px solid #D2D4D6";
				elems[x] = th;
				
				if((table.rows.length % 2) == 0){
					elemBar.style.backgroundColor = "#D6EBFF";
				}else{
					elemBar.style.backgroundColor = "#E0F0FF";
				}
				
				elemBar.appendChild(th);
			}
			return this;
		}
	}
	this.appendChild(table);
	return add;
}


//Layoutes

Object.prototype.newContainer = function(options){
	options = (typeof(options) !== "object") ? {} : options;
	
	
	var div = document.createElement("div");
	div.style.border = options.border || "1px solid transparent";
	div.style.width = options.width || "500px";
	div.style.height = options.height || "300px";
	div.style.position = options.position || "relative";
	div.style.top = options.top;
	div.style.left = options.left;
	div.className = "container";
	
	this.appendChild(div);
	
	
	return div;
}

Object.prototype.tableLayout = function(options){
	options = (typeof options !== "object") ? {} : options;
	var elements = this.childNodes;
	
	for(var x = 0; x < elements.length; x++){
		elements[x].style.cssFloat = "left";
		
	}
	
}


/**********************************************************************************************************************************************************************************************/

function getMonthDay(month){
	var d = new Date(2015,month,1);
	var month = new Array();
	month[0] = "Janeiro";
	month[1] = "Fevereiro";
	month[2] = "Março";
	month[3] = "Abril";
	month[4] = "Maio";
	month[5] = "Junho";
	month[6] = "Julho";
	month[7] = "Agosto";
	month[8] = "Setembro";
	month[9] = "Outubro";
	month[10] = "Novembro";
	month[11] = "Dezembro";
	var n = month[d.getMonth()]; 
	
	return n;
}

function getWeekDay(){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Domingo";
	weekday[1] = "Segunda";
	weekday[2] = "Terça";
	weekday[3] = "Quarta";
	weekday[4] = "Quinta";
	weekday[5] = "Sexta";
	weekday[6] = "Sabado";
	
	var n = weekday[d.getDay()];
	return n;
}

Object.prototype.newCalendar = function(mes,ano){
	
	var month = mes;
	var Dad = this;
	
	var table = document.createElement("table");
	table.className = "calendar";
	table.style.color = "#143333";
	
	table.id = "calendar";
	
	var dia1 = new Date(ano,mes,1);
	
	var dias = new Array(42);
	
	for(var x = 0; x < 42; x++){
		dias[x] = "";
	}
	
	var diaN;
	var count = 1;
	for(var x = dia1.getDay(); x < 42; x++){
		diaN = new Date(ano,3,count);
		dias[x] = diaN.getDate();
		count++;
	}
	
	
	var caption = document.createElement("caption");
	caption.innerHTML = getMonthDay(mes)+" "+dia1.getFullYear();
	
	var thead = document.createElement("thead");
	
	var titleTR = document.createElement("tr");
	
	
	var domTD = document.createElement("td");
	var domDIV = document.createElement("div");
	domDIV.className = "diaSemana";
	domDIV.innerHTML = " D";
	domDIV.style.paddingLeft = "5px";
	domTD.appendChild(domDIV);
	titleTR.appendChild(domTD);
	
	var segTD = document.createElement("td");
	var segDIV = document.createElement("div");
	segDIV.className = "diaSemana";
	segDIV.style.paddingLeft = "5px";
	segDIV.innerHTML = " S";
	segTD.appendChild(segDIV);
	titleTR.appendChild(segTD);
	
	var terTD = document.createElement("td");
	var terDIV = document.createElement("div");
	terDIV.className = "diaSemana";
	terDIV.style.paddingLeft = "5px";
	terDIV.innerHTML = " T";
	terTD.appendChild(terDIV);
	titleTR.appendChild(terTD);
	
	var quaTD = document.createElement("td");
	var quaDIV = document.createElement("div");
	quaDIV.className = "diaSemana";
	quaDIV.style.paddingLeft = "5px";
	quaDIV.innerHTML = " Q";
	quaTD.appendChild(quaDIV);
	titleTR.appendChild(quaTD);
	
	var quiTD = document.createElement("td");
	var quiDIV = document.createElement("div");
	quiDIV.className = "diaSemana";
	quiDIV.style.paddingLeft = "5px";
	quiDIV.innerHTML = " Q";
	quiTD.appendChild(quiDIV);
	titleTR.appendChild(quiTD);
	
	var sexTD = document.createElement("td");
	var sexDIV = document.createElement("div");
	sexDIV.className = "diaSemana";
	sexDIV.style.paddingLeft = "5px";
	sexDIV.innerHTML = " S";
	sexTD.appendChild(sexDIV);
	titleTR.appendChild(sexTD);
	
	var sabTD = document.createElement("td");
	var sabDIV = document.createElement("div");
	sabDIV.className = "diaSemana";
	sabDIV.style.paddingLeft = "5px";
	sabDIV.innerHTML = "S";
	sabTD.appendChild(sabDIV);
	titleTR.appendChild(sabTD);
	
	var elements = new Array();
	count = 0;
	for(var x = 1; x <= 6; x++){
	var diaTR = document.createElement("tr");
	for(var y = 0; y <= 6; y++){
		var diaTD = document.createElement("td");
		diaTD.style.border = "1px solid #338080";
		diaTD.style.paddingLeft = "5px";
		diaTD.style.paddingRight = "5px";
		diaTD.style.fontSize = "12px";
		diaTD.style.borderRadius = "5px";
		diaTD.style.cursor = "pointer";
		var diaDIV = document.createElement("div");
		diaDIV.className = "dia";
		
		elements[count] = diaTD;
		count++;
		diaTD.appendChild(diaDIV);
		diaTR.appendChild(diaTD);
	
	}
	table.appendChild(diaTR);
	}
	

	
	for(var x = 0; x < 42; x++){
		elements[x].innerHTML = dias[x];
	}
	
	thead.appendChild(titleTR);
	table.appendChild(thead);
	table.appendChild(caption);
	
	this.appendChild(table);
	
	var add = {
		Dad:Dad,
		month:month,
		elements:elements,
		hoje:function(){
			var d1 = new Date();
			var diaHoje = d1.getDate()-1;
			elements[diaHoje].style.color = "#B2FFFF";
			elements[diaHoje].style.backgroundColor = "#52CCCC";
		},
		hojeMes:function(){
			return dia1.getMonth();
		
		},
		hojeAno:function(){
			return dia1.getFullYear();
		},
		hide:function(){table.style.display = "none"},
		show:function(){table.style.display = "block"},
		remove:function(){Dad.removeChild(table)},
		adiciona:function(){Dad.appendChild(table)}
	};
	
	
	return add;
}

Object.prototype.newSimpleCalendar = function(appendReturn){

var Dad = this;

var div = document.createElement("div");
div.style.height = "200px";
div.style.width = "185px";
div.style.padding = "10px";
div.style.border = "1px solid #52CCCC";
div.style.backgroundColor = "#FFFFFF";
div.style.opacity = "0.97";
div.style.zIndex = "101";
div.style.borderRadius = "5px";
div.style.display = "none";
div.style.position = "absolute";
div.className = "calendar";

var input = document.createElement("input");
input.type = "text";
input.style.backgroundColor = "#F0FFFF";
input.style.color = "#143333";
input.style.border = "1px solid #47B2B2";
input.style.borderRadius = "2pt";
input.style.width = "60px";

input.onmouseover = function(){
	input.style.backgroundColor = "#E0FFFF";
	input.style.border = "1px solid #52CCCC";
}

input.onmouseout = function(){
	input.style.backgroundColor = "#F0FFFF";
	input.style.border = "1px solid #47B2B2";
}

var button = document.createElement("input");
button.type = "button";
button.value = "V";
button.id = "onCalendar";
button.style.backgroundColor = "#5CE6E6";
button.style.border = "1px solid #47B2B2";
button.style.marginLeft = "1px";
button.style.borderRadius = "2pt";
button.style.color = "#E0FFFF";
button.style.cursor = "pointer";


var divFirst = document.createElement("div");
divFirst.style.height = "24px";
divFirst.style.width = "100px";
divFirst.style.border = "1px solid transparent";
divFirst.className = "divFirst";



divFirst.appendChild(input);
divFirst.appendChild(button);
divFirst.appendChild(div);
this.appendChild(divFirst);




var button1 = document.createElement("input");
button1.type = "button";
button1.value = "<-";
button1.style.cssFloat = "left";
button1.id = "backCalendar";
button1.style.backgroundColor = "#5CE6E6";
button1.style.border = "1px solid #47B2B2";
button1.style.marginLeft = "1px";
button1.style.borderRadius = "2pt";
button1.style.color = "#E0FFFF";
button1.style.cursor = "pointer";

var button2 = document.createElement("input");
button2.type = "button";
button2.value = "->";
button2.style.cssFloat = "right";
button2.id = "goCalendar";
button2.style.backgroundColor = "#5CE6E6";
button2.style.border = "1px solid #47B2B2";
button2.style.marginLeft = "1px";
button2.style.borderRadius = "2pt";
button2.style.color = "#E0FFFF";
button2.style.cursor = "pointer";


div.appendChild(button1);
div.appendChild(button2);


var hoje = new Date();


var vlr = hoje.getMonth();

var calendar = div.newCalendar(vlr,hoje.getFullYear());



document.addEventListener("click",function(){
	div.style.display = "block";
});
document.addEventListener("click",function(evt){
	var esteClick = evt.target.id;
	if(esteClick !== "backCalendar" && esteClick !== "goCalendar" && esteClick !== "onCalendar"){
		div.style.display = "none";
	}
	
});









function returnDate(){

	for(var x = 0; x < 42; x++){
		calendar.elements[x].onclick = function(){

			var diaSelect = this.innerHTML;
			var mesSelect = calendar.hojeMes()+1;
			var anoSelect = calendar.hojeAno();
			
			var retornoSelect = diaSelect + "/" + mesSelect + "/" + anoSelect;
			input.value = retornoSelect;
			
		}


		calendar.elements[x].onmouseover = function(){
			this.style.border = "1px solid #66FFFF";
		}
		calendar.elements[x].onmouseout = function(){
			this.style.border = "1px solid #338080";
				
		}
		
	}
}

returnDate();
calendar.hoje();

button1.onclick = function(){
	vlr--;
	calendar.remove();
	calendar = div.newCalendar(vlr,hoje.getFullYear());
	if(hoje.getMonth() == calendar.hojeMes()){
		calendar.hoje();
	}
	returnDate();
}
button2.onclick = function(){
	vlr++;
	calendar.remove();
	calendar = div.newCalendar(vlr,hoje.getFullYear());
	if(hoje.getMonth() == calendar.hojeMes()){
		calendar.hoje();
	}
	returnDate();
}

return button;
}





























