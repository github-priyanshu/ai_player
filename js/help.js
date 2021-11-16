function help(){
	let html=`
	<div class="head center">
		<span col="#e73070" fs="1.4em">Inspect this:</span>
	</div>
	<div class="itemBox">
		<div class="item" onclick="requestMovies()">Request for movies.</div>
		<div class="item">Feedback</div>
		<div class="item">Any complain.</div>
		<div class="item">Contact developer.</div>
		<div class="item" col="#e73070">Help the developer.</div>	
	</div>
	`;
	dialog.inside(html);
	dialog.buttons("Close","Ok");
	dialog.show();
}

function requestMovies(){
	makeDialogForm("Add movies.",["Name of movie"]);
	dialog.show();
	dialog.buttons("Cancel","Send");
	dialog.success=()=>{
		let mv = op("#dialogForm input[name='Name of movie']").value;
		sendProblem(mv);
		dialog.inside(`<div fs="1.3em" col="#e73070">/...ThankYou :)</div><span col="#333" fs=".9em">For your request. It will be added soon. <b>Enjoy Now.</b></span>`);
		dialog.buttons("Close","Okay");
		dialog.show();
	}
}

function makeDialogForm(head,ins){
	let html=`
		<div fs="1.3em" col="#e73070">${head}</div>
		<div id="dialogForm">
		${ins.map((val)=>{
			return `<label><span col="#333" fs=".9em">${val}</span><input name='${val}'></label>`;
		})}
		</div>
	`;
	dialog.inside(html);
}

// requestMovies()