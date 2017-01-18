/**********************************
* Icon Animation .JS Fragment File
***********************************/
var iconAnimationName = "Devices";
var iconAnimationVersion = 2.1;
var spriteSheetName = "spritesheet_desktop_mobile_tablet.png";
var spriteSheet = new Image();

// For rescaling on other unit sizes
var iconUnitScale = 1.; // Scale = 1 for 300x250
var iconRegistrationX = 0; // Null registration point of animation. Adjust as needed on other unit sizes (728x90, 160x600)
var iconRegistrationY = 0; // 0, 0 is based on the 300x250

// From Dynamic API
var iconAnimationStartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed__US_Sheet1[0].Start_Time_Icon_Animation); //Start_Time_Icon_Animation
var copyBatch2StartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed__US_Sheet1[0].Start_Time_Text_2); //Start_Time_Icon_Animation

var phoneParts = [];
var phonePartCount = 7;
var phonePartStartX = [-15,0,15,15,0,-15,0];
var phonePartStartY = [0,-15,0,15,-15,0,20];
var phonePartDockX =  [0,0,0,0,0,0,0];
var phonePartDockY =  [0,0,0,0,0,0,0];

var phoneParts2 = [];
var phonePartCount2 = 5;
var phonePartStartX2 = [-15,0,15,0,15];
var phonePartStartY2 = [0,-15,0,15,0];
var phonePartDockX2 =  [0, 0, 0, 0, 0];
var phonePartDockY2 =  [0,0,0,0,0];

var iconSVG; // reference to main SVG document. Don't forget to add [id="iconSVG"] to SVG document root
var iconSVGCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" enable-background="new 0 0 300 250" id="iconSVG"><g id="monitor"><g fill-rule="evenodd"><path fill="#4a8bee" d="m-35.15 115.34v78.41l39.2-39.21z" id="monitor0"/><path fill="#649af0" d="m64.63 115.34h-99.78l39.2 39.2h99.78z" id="monitor1"/></g><path id="monitor2" fill="#4a8bee" d="m103.84 154.54v-39.2h-39.21z"/><path fill-rule="evenodd" fill="#427ee1" d="m4.055 154.54l-39.2 39.21h99.78l39.21-39.21z" id="monitor3"/><path id="monitor4" fill="#649af0" d="m103.84 154.54v39.21h-39.21z"/><path id="monitor5" fill="#427ee1" d="m34.34 212.79l-19.04-19.04h38.09l19.05 19.04z"/><path id="monitor6" fill="#649af0" d="m-3.748 212.79l19.05-19.04 19.04 19.04z"/><path id="screen0" fill="#ebebeb" d="m-25.655 154.54v-33.84h33.847z"/><g fill-rule="evenodd"><path fill="#fff" d="m8.192 120.7l-33.847 33.84h86.16l33.84-33.84z" id="screen1"/><path fill="#ebebeb" d="m60.5 154.54l33.84 33.85v-67.69z" id="screen2"/></g><path id="screen3" fill="#fff" d="m-25.655 154.54v33.85h33.847z"/><path fill-rule="evenodd" fill="#e1e1e1" d="m60.5 154.54h-86.16l33.847 33.85h86.15z" id="screen4"/></g><g id="tablet"><path id="tablet0" fill="#649af0" d="m236.07 173.61v39.21h-39.2z"/><g fill-rule="evenodd"><path fill="#427ee1" d="m155.29 173.61l-39.2 39.21h80.78l39.2-39.21z" id="tablet1"/><path fill="#4a8bee" d="m116.09 134.41v78.41l39.2-39.21z" id="tablet2"/><path fill="#649af0" d="m196.87 134.41h-80.78l39.2 39.2h80.78z" id="tablet3"/></g><path id="tablet4" fill="#4a8bee" d="m236.07 173.61v-39.2h-39.2z"/><path id="tablet5" fill="#fff" d="m121.42 173.61v33.85h33.85z"/><g fill-rule="evenodd"><path fill="#e1e1e1" d="m190.15 173.61h-68.73l33.85 33.85h68.73z" id="tablet6"/><path fill="#ebebeb" d="m190.15 173.61l33.85 33.85v-67.69z" id="tablet7"/><path fill="#fff" d="m155.27 139.77l-33.85 33.84h68.73l33.85-33.84z" id="tablet8"/></g><path id="tablet9" fill="#ebebeb" d="m121.42 173.61v-33.84h33.85z"/><path fill-rule="evenodd" fill="#fff" d="m229.88 169.19l-4.42 4.42 4.42 4.43 4.42-4.43z" id="tablet10"/></g><g id="phone"><path id="phone0" fill="#649af0" d="m267.6 212.72h-16.46v-16.47z"/><g fill-rule="evenodd"><path fill="#427ee1" d="m251.14 149.54v46.71l16.46 16.47v-46.77z" id="phone1"/><path fill="#4a8bee" d="m251.14 149.54l16.46 16.47 16.46-16.47z" id="phone2"/><path fill="#649af0" d="m267.6 165.95v46.77l16.46-16.41v-46.77z" id="phone3"/></g><path id="phone4" fill="#4a8bee" d="m267.6 212.72h16.46v-16.41z"/><path id="phone5" fill="#fff" d="m267.6 154.03h-11.97v11.97z"/><g fill-rule="evenodd"><path fill="#e1e1e1" d="m255.63 166v36.01l11.97-11.97v-36.01z" id="phone6"/><path fill="#ebebeb" d="m267.6 190.04l-11.97 11.97h23.94z" id="phone7"/><path fill="#fff" d="m267.6 154.03v36.01l11.97 11.97v-36.01z" id="phone8"/></g><path id="phone9" fill="#ebebeb" d="m267.6 154.03h11.97v11.97z"/><path fill-rule="evenodd" fill="#fff" d="m267.6 204.53l-3 3.02 3 3.02 3-3.02z" id="phone10"/></g></svg>';

function createIconParts()
{
	console.log("TRACE 0");
	var i = 0;
	var tempX = 0;
	var tempY = 0;
	var rndRange = 50;
	var iconHolder = $("#iconHolder");
	var monitorMov = $("#monitor");
	var tabletMov = $("#tablet");

	TweenLite.to(iconHolder, 0, {opacity:0}); // hide icon holder before attaching SVG
	
	iconHolder.innerHTML = "" + iconSVGCode;
	iconSVG = $("#iconSVG");
	TweenLite.to(iconSVG, 0, {x:0, y:0, width:"400px", height:"250px"});

	TweenLite.to(iconHolder, 0, {x:70}); // Move only the blue screen
	TweenLite.to([$("#phone")], 0, {x:155}); // Move only the blue screen
	TweenLite.to([$("#tablet")], 0, {x:75}); // Move only the blue screen

	for (i = 0; i < phonePartCount; i++)
	{
		phoneParts[i] = $("#monitor" + i);
		TweenLite.to(phoneParts[i], 0, {opacity:0, x:(phonePartStartX[i] * iconUnitScale + iconRegistrationX), y:(phonePartStartY[i] * iconUnitScale + iconRegistrationY)});
	}

	for (i = 0; i < phonePartCount2; i++)
	{
		var iconHolder = $("#iconHolder");
		phoneParts2[i] = $("#screen" + i);
		TweenLite.to(phoneParts2[i], 0, {opacity:0, x:(phonePartStartX2[i] * iconUnitScale + iconRegistrationX), y:(phonePartStartY2[i] * iconUnitScale + iconRegistrationY)});
	}
	// TweenLite.to(tabletMov, 0, {x:50}); // Move only the blue screen

	TweenLite.to(iconHolder, 0, {opacity:1}); // show icon holder again after attaching SVG	

}

function initIconAnimations()
{

	// Timeline Markers Definitions
	tlIcon.addLabel("dockPhone", iconAnimationStartTime);
	tlIcon.addLabel("screenTime", iconAnimationStartTime + 0.7);
	tlIcon.addLabel("showDevices", iconAnimationStartTime + 3);
	tlIcon.addLabel("tabletAnim", iconAnimationStartTime + 3.2);
	tlIcon.addLabel("phoneAnim", iconAnimationStartTime + 3.4);

	// Animation Definitions
	dockPhone();
	screenTime();

	tlIcon.to([$("#iconHolder")], 2, {x:-50, ease:Power3.easeInOut}, "showDevices");
	tlIcon.to([$("#tablet")], 2, {x:0, ease:Power3.easeInOut}, "tabletAnim");
	tlIcon.to([$("#phone")], 2, {x:0, ease:Power3.easeInOut}, "phoneAnim");

	// End Animation
}

function dockPhone()
{
	var i = 0;
	for (i = 0; i < phonePartCount; i ++)
	{
		tlIcon.to(phoneParts[i], 0.3, {opacity:1}, "dockPhone");
		tlIcon.to(phoneParts[i], 1, {x:(phonePartDockX[i] * iconUnitScale + iconRegistrationX), y:(phonePartDockY[i] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "dockPhone");
	}
}

function screenTime() 
{
	var i = 0;
	for (i = 0; i < phonePartCount2; i ++)
	{
		tlIcon.to(phoneParts2[i], 0.3, {opacity:1}, "screenTime");
		tlIcon.to(phoneParts2[i], 1, {x:(phonePartDockX2[i] * iconUnitScale + iconRegistrationX), y:(phonePartDockY2[i] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "screenTime");
	}
}

// Create and initialize icon parts + animation
createIconParts();
initIconAnimations();

console.log("Animation: " + iconAnimationName + " ver " + iconAnimationVersion);
console.log("-----");

// play animation once spritesheet is confirmed to have loaded
function onSpriteSheetLoad(e)
{
	// startAnimations is called from main.js
	// it will play the main timeline (tl)
	// + your icon timeline (tlIcon) at the same time
	startAnimations(); // STARTS THE ENTIRE UNIT ANIMATION when SpriteSheet is loaded
}

spriteSheet.addEventListener("load", onSpriteSheetLoad, false);
spriteSheet.src = spriteSheetName;
