function addCopySuggested(){

	$("button.btn_copy_suggested").on("click", function(e){

		var $this = $(this),
			ref_translation = $this.attr('data-translation'),
			ref_suggested = $this.attr('data-suggested'),
			$translation = $('textarea[name="'+ref_translation+'"]'),
			$suggested = $('textarea[name="'+ref_suggested+'"]'),
			suggested_text = $suggested.val();

		//debug
		/*
		console.log (	'ref_translation = '+ ref_translation + 
						"\n ref_suggested = "+ ref_suggested +
						"\n suggested_text = "+ suggested_text
					);
		*/
		//copy suggested
		$translation.val( suggested_text );

	});//$("button.btn_copy_suggested").on("click", function(e){





	//$("button.btn_copy_suggested").on("click", function(e){
	$("button.btn_copy_suggested_2_empty").on("click", function(e){

		
		//$("div[class*='apple-']")
		//textarea[name="
		$("textarea[name^='tid_']").each(function( index ) {

			var $translation = $(this),
				translation_text = $translation.val(),
				ref_translation = $translation.attr('name'),
				ref = ref_translation.substr(4), //remove 'tid_'
				$suggested = $('textarea[name="suggested_'+ref+'"]');	

			//debug
			/*
			console.log (	'ref_translation = '+ ref_translation +
							"\n ref = "+ ref 
						);
			*/

			//if $translation is empty
			if( translation_text == '')
			{
				//debug
				/*
				console.log (	'translation_text = '+ translation_text +
								"\n IS EMPTY!!!!!!"
						);
				*/
				//copy sugguested
				$translation.val( $suggested.val() );

			
			};//if( translation_text == '')


		});//$("textarea[name^='tid_']")..each(function( index ) {

	 
	});//$("button.btn_copy_suggested_2_empty").on("click", function(e){







};//function addCopySuggested(){


/////////////////////////////////////////////////////////
$(document).ready(function() {

	addCopySuggested();
	//alert("ready");

});//$(document).ready(function() {

/////////////////////////////////////////////////////////
$(document).on('pjax:complete', function () {

	addCopySuggested();
	//alert("pjax");

});//$(document).on('pjax:complete', function () {