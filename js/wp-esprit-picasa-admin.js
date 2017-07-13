jQuery.noConflict();

// Put all your code in your document ready area
jQuery(document).ready(function($){
	$("#TestButton").click(function(e) {
		e.preventDefault();
		$("input").attr("disabled", "true");
		$("p.submit img.AjaxLoader").show();
		$("#TestResult").css("color","black");
		$("#TestResult").html(
			    "Trying to connect to given Picasa user albums..."
		);

		$.post( pluginDirectoryPath + '/wp-esprit-picasa-test.php', { server: $("#PicasaServer").val(), type: "rpc", username: $("#PicasaUsername").val(), submit: $("#TestButton")}, function(xml) {
			status = $("status",xml).text();
			//alert(xml);
			if (status=='OK') 
			{
				$("#TestResult").css("color","green");
				$("#TestResult").html("Seems OK! Don't forget to save the settings.");
			}
			else 
			{
				$("#TestResult").css("color","red");
				$("#TestResult").html("Error when connecting! Check the settings and try again.");
			} 
			$("p.submit img.AjaxLoader").hide();
			$("input").removeAttr("disabled");
		});
	});
});