function fetchCards() {
	fetch('https://conf.ontico.ru/api/conferences/forCalendar.json')
		.then((response) => response.json())
		.then((data) => {
			data.result.forEach((item) => {
				createCard(item);
			});
		})
		.catch((error) => {
			console.error('Ошибка получения данных:', error);
		});
}

function createCard(cardData) {
	const cardsContainer = document.getElementById('cards-container');

	const card = document.createElement('div');
	card.classList.add('card');

	const dateRange = document.createElement('span');
	dateRange.id = 'date_range';
	dateRange.textContent = cardData.date_range;
	card.appendChild(dateRange);

	const logo = document.createElement('img');
	logo.id = 'logo';
	logo.src = cardData.logo;
	logo.alt = 'logo';
	card.appendChild(logo);

	const name = document.createElement('h3');
	name.id = 'name';
	name.textContent = cardData.name;
	card.appendChild(name);

	const brief = document.createElement('p');
	brief.id = 'brief';
	brief.textContent = cardData.brief;
	card.appendChild(brief);

	const location = document.createElement('span');
	location.id = 'location';
	location.textContent = cardData.location;
	card.appendChild(location);

	const link = document.createElement('a');
	link.classList.add('link');
	link.textContent = 'highload.ru';
	link.target = '_blank';
	card.appendChild(link);

	const linksWrap = document.createElement('div');
	linksWrap.classList.add('links-wrap');
	card.appendChild(linksWrap);

	if (cardData.buy) {
		const buy = document.createElement('a');
		buy.id = 'buy';
		buy.textContent = cardData.buy.action;
		buy.href = cardData.buy.link;
		linksWrap.appendChild(buy);
	}

	const uri = document.createElement('a');
	uri.id = 'uri';
	uri.href = cardData.uri;
	uri.textContent = 'Подробнее';
	uri.target = '_blank';
	linksWrap.appendChild(uri);

	cardsContainer.appendChild(card);
}

fetchCards();
