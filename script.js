const jsonCall = () => {
	const ulElement = document.querySelector(".content");
	const a = "all_sports"
	const url = "https://www.thesportsdb.com/api/v1/json/2/"+a+".php";

	fetch(url)
		.then((response) => response.json())
		.then((sportsData) => {
			console.log(sportsData["sports"]);
			sportsDataArray = sportsData["sports"];
			displayData(sportsDataArray);
		})
		.catch((error) => {
			console.log(error);
		});

	const displayData = (arrayData) => {
		const htmlString = arrayData
			.map((character) => {
				return `
            <li>
                <h2> Sport Id:- ${character.idSport}</h2>
                <h2>Name: ${character.strSport}</h2>
                <h3>Type: ${character.strFormat}</h3>
                <img style="width:200px;height:200px" src=${character.strSportThumb}></img>
                <p class="para">${character.strSportDescription}</p>
            </li>
        `;
			})
			.join("");
		ulElement.innerHTML = htmlString;
	};
};
jsonCall();
