var lanSelected;

function getColor(value){
    //value from 0 to 1
    //var hue = (value*1.2).toString(10);
	var hue = (value/1.4).toString(10);
    return  ["hsl(",hue,",100%,50%)"].join("");
}

function setTrasnlationColor( param_this ) {
	var txt = param_this.text,
		$this = $(param_this),
		regExp = /\(([^%]+)\%/, 	//find %
		matches = regExp.exec(txt),
		value = matches[1];

	//$('this option:selected').remove();
	//console.log("value = "+ value +" color : " + getColor(value))

	if ( value != 100 ) { $this.css("background-color", "#" + getColor(value) ); };

	if ( value < 60 ) { $this.css("color", "#fff" ); };
};

function colorTraslations() {

	lanSelected = $('select[name=language] option:selected').val();
	console.log("lanSelected = " + lanSelected );


	$("select[name=moduleId] > option").each(function() {

		setTrasnlationColor( this );

	});


	$("select[name=file] > option").each(function() {

		setTrasnlationColor( this );

	});

};

/////////////////////////////////////////////////////////
$(document).ready(function() {

	colorTraslations();
	//alert("ready");

});//$(document).ready(function() {

/////////////////////////////////////////////////////////
$(document).on('pjax:complete', function () {

	colorTraslations();
	//alert("pjax");

});//$(document).on('pjax:complete', function () {