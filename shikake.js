window.onload = function(){
	var quary = document.getElementsByClassName("s75CSd");
	var query = document.getElementsByClassName('k8XOCe');
	/*
	quary[0].style.color = "red";
	quary[1].style.color = "green";
	quary[4].style.color = 'orange';

	quary[0].innerHTML = "fashion";
	*/
	//var search_bar = document.getElementsByClassName("gLFyf gsfi").value;
	//var search_bar = document.getElementsByClassName("gLFyf gsfi")
	
	var search_bar = $("input[name='q']").val();

	var space = ' ';
	var ex_search_bar = search_bar.split(space)[0];
	// alert(ex_search_bar);

	// プライムワードを検索ワードとくっつける仕組み
	// prime words from survey (adding some words)
	// 配列の中に単語を入れるとくっつけることが出来ます。それ以外の単語とも連結してしまうので、なんとかそこを修正する必要がある
	const prime_posi_words = ['権利', '賛成', '容認', '自己決定', '自由意志', '難しい', '合法化', '解放'];
	const prime_nega_words = ['殺人', '危険', '日本', '怖い', '無責任', '残された家族'];

	// var random = Math.floor(Math.random()*10) + 1;

	// 2021/02/20修正点
	/*
	var min = 0;
	var max_posi = 7;
	var max_nega = 5;
	var max_qu = 7;

	var r = Math.floor(Math.random()*(max_posi + 1 - min)) + min;
	var rr = Math.floor(Math.random()*(max_nega + 1 - min)) + min;
	var rrr = Math.floor(Math.random()*(max_qu + 1 - min)) + min;

	let num = 0;
	while (num < 8) {
		quary[rrr].innerHTML = search_bar + ' ' + prime_posi_words[r];
		quary[rrr].innerHTML = search_bar + ' ' + prime_nega_words[rr];
		quary[rrr].style.fontWeight = 'bold';

		var name = search_bar + ' ' + prime_posi_words[r];
		name.replace(' ', '+');
		const url = 'https://www.google.com/search?q=' + String(name);
		query[rrr].setAttribute('href', url);

		var name_2 = search_bar + ' ' + prime_nega_words[rr];
		name_2.replace(' ', '+');
		const url_2 = 'https://www.google.com/search?q=' + String(name_2);
		query[rrr].setAttribute('href', url_2);

		num += 1;
	}
	*/

	
	for (let i=0; i<4; i++){
		if (search_bar.indexOf('安楽死') == 0 || search_bar.indexOf('尊厳死') == 0){
			quary[i].innerHTML = ex_search_bar + ' ' + prime_posi_words[i];
			quary[i].style.fontWeight = 'bold';
		} else ;
		var name = ex_search_bar + ' ' + prime_posi_words[i];
		name.replace(' ', '+');
		const url = 'https://www.google.com/search?q=' + String(name);
		// const encodeURL = encodeURI(url);
		query[i].setAttribute('href', url);
				// console.log(encodeURL);
	}

	// quary[random].innerHTML

	for (let j=0; j<4; j++){
		if (search_bar.indexOf('安楽死') == 0 || search_bar.indexOf('尊厳死') == 0){
			var count = j + 4;
			quary[count].innerHTML = ex_search_bar + ' ' + prime_nega_words[j];
			quary[count].style.fontWeight = 'bold';
		} else ;
		var name_2 = ex_search_bar + ' ' + prime_nega_words[j];
		name_2.replace(' ', '+');
		const url_2 = 'https://www.google.com/search?q=' + String(name_2);
		// const encodeURL_2 = encodeURI(url_2);
		query[count].setAttribute('href', url_2);
	}
	

	$(function(){
		$('div.J0Tv0e').insertBefore('div#rcnt.GyAeWb');
	});



	// var suggestion = document.getElementsByClassName("J0Tv0e");
	// suggestion.body.style.margin = '72px';

	// document.getElementsByClassName('V2Zq0e').style.weight = '72px';
	// document.getElementsByClassName('V2Zq0e').style.margin = 72 + 'px';
	// var move_objects = document.getElementsByClassName('J0Tv0e');
	/*
	var $check_size = $("V2Zq0e");
	var w1 = $check_size.outerWidth(true);
	alert(w1);
	*/
	// 上に上げたキーワードを整形	
	$(function(){
		$("div.J0Tv0e").outerWidth(550);
		$("div.J0Tv0e").css('margin-left', 180);
	})
	
	/*
	var suggestion = ex_search_bar + ' ' + prime_posi_words[0];
	quary[5].innerHTML = suggestion;
	quary[5].style.fontWeight = 'bold';
	*/
}