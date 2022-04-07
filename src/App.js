function Food({ name, picture }) {
  //console.log(props);
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.gildedgingerbread.com%2Fwp-content%2Fuploads%2F2017%2F08%2FSamgyeopsal-1.jpg%3Fresize%3D750%252C600%26ssl%3D1&f=1&nofb=1',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdopenkitchen.com%2Fwp-content%2Fuploads%2F2020%2F04%2FUntitled-design-15.png&f=1&nofb=1',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frvdcorp.co.kr%2Fweb%2Fproduct%2Fextra%2Fsmall%2F202011%2F044fa307907af7fb773827bc3c36157c.jpg&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2Fo94pqlhYlIMrT3KFLIPhs09chDo%3D%2F1500x1125%2Ffilters%3Afill(auto%2C1)%2F__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg&f=1&nofb=1',
    rating: 5
  },
];

function App() { 
  return (
    <div>
      {foodILike.map(dish =>
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;
