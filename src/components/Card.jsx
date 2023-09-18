import '../app.css'
import { Current } from './Current';
import { Historic } from './Historic';
import { Images } from './Images';

export const Card = (props) => {
    const { driver } = props;

    const COUNTRIES = {
      Australia: {
        backgroundColor: 'yellow',
        color: 'black',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'
      },
      Brazil: {
        backgroundColor: 'green',
        color: 'black',
        flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png'},
      Germany: {
        backgroundColor: 'black',
        color: 'white',
        flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
      },
      Spain: {
        backgroundColor: 'red',
        color: 'black',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png'
      },
      'United Kingdom': {
        backgroundColor: 'blue',
        color: 'white',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'
      }
    }
    
    const TEAM_LOGOS = {
      Ferrari: 'https://e7.pngegg.com/pngimages/202/123/png-clipart-ferrari-laferrari-car-ferrari-458-scuderia-ferrari-ferrari-logo-car.png',
      McLaren: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/2560px-McLaren_Racing_logo.svg.png',
      'Mercedes GP': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png',
      'McLaren-Mercedes': 'https://ih1.redbubble.net/image.2257949995.5265/st,small,507x507-pad,600x600,f8f8f8.jpg',
      'Red Bull': 'https://cdn-7.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg'
    }

  return (
    <div
        key={driver.ranking}
        style={{
          backgroundColor: COUNTRIES[driver.nationality].backgroundColor,
          color: COUNTRIES[driver.nationality].color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: 200,
          height: 300,
          borderRadius: '10px'     
        }}
    >
    <p><strong>{`${driver.ranking}- ${driver.name} ${driver.surname}`}</strong></p>
    <Current driver={driver} />
    <Historic driver={driver}/>
    <Images driver={driver} countries={COUNTRIES} logos={TEAM_LOGOS} />
    </div>
  )
}
