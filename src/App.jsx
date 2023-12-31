import {Card} from '../src/components/Card';

function App() {


  const DRIVERS = [
    {
      "name": "Webber",
      "surname": "Mark",
      "ranking": 3,
      "points": 258,
      "lastRace": 1,
      "wins": 1,
      "poles": 3,
      "bestPosition": 1,
      "nationality": "Australia",
      "team": "Red Bull",
      "teamPoints": 650
    },
    {
      "name": "Vettel",
      "surname": "Sebastian",
      "ranking": 1,
      "points": 392,
      "lastRace": 2,
      "wins": 11,
      "poles": 15,
      "bestPosition": 1,
      "bestPositionTimes": 11,
      "nationality": "Germany",
      "team": "Red Bull",
      "teamPoints": 650
    },
    {
      "name": "Button",
      "surname": "Jenson",
      "ranking": 2,
      "points": 270,
      "lastRace": 3,
      "wins": 3,
      "poles": 0,
      "bestPosition": 1,
      "bestPositionTimes": 3,
      "nationality": "United Kingdom",
      "team": "McLaren",
      "teamPoints": 497
    },
    {
      "name": "Massa",
      "surname": "Felipe",
      "ranking": 6,
      "points": 118,
      "lastRace": 5,
      "wins": 0,
      "poles": 0,
      "bestPosition": 5,
      "bestPositionTimes": 6,
      "nationality": "Brazil",
      "team": "Ferrari",
      "teamPoints": 375
    },
    {
      "name": "Alonso",
      "surname": "Fernando",
      "ranking": 4,
      "points": 257,
      "lastRace": 4,
      "wins": 1,
      "poles": 0,
      "bestPosition": 1,
      "nationality": "Spain",
      "team": "Ferrari",
      "teamPoints": 375
    },
    {
      "name": "Hamilton",
      "surname": "Lewis",
      "ranking": 5,
      "points": 227,
      "wins": 3,
      "poles": 1,
      "bestPosition": 1,
      "bestPositionTimes": 3,
      "nationality": "United Kingdom",
      "team": "McLaren-Mercedes",
      "teamPoints": 497
    },
    {
      "name": "Schumacher",
      "surname": "Michael",
      "ranking": 8,
      "points": 76,
      "lastRace": 15,
      "wins": 0,
      "poles": 0,
      "bestPosition": 4,
      "nationality": "Germany",
      "team": "Ferrari",
      "teamPoints": 165
    },
    {
      "name": "Rosberg",
      "surname": "Nico",
      "ranking": 7,
      "points": 89,
      "wins": 0,
      "poles": 0,
      "bestPosition": 5,
      "bestPositionTimes": 2,
      "nationality": "Germany",
      "team": "Mercedes GP",
      "teamPoints": 165
    },
  ]

  const DRIVERS_ORDENADOS = [...DRIVERS].sort((a, b) => a.ranking - b.ranking)

  return (
    <>
      <div className='cardsDrivers'
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      }}
      >
      {
        DRIVERS_ORDENADOS && 
        DRIVERS_ORDENADOS.map(driver => {
          return (
          <div className="cardDriver"
            key={driver.ranking}
          >
            <Card
              driver={driver}
            />
          </div>
          )
        })
      }
      </div>
    </>
  )
}

export default App
