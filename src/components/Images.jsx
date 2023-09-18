export const Images = (props) => {
    const { driver, countries, logos } = props;
    return (
        <div
        className="images"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={countries[driver.nationality].flag}
          style={{
            width: 100,
            height: 75,
            paddingBottom: '10px',
          }}
        />
        <img 
          src={logos[driver.team]}
          style={{
            width: 75,
            height: 50,
            paddingBottom: '10px',
          }}
        />
        <p>Team Points: {driver.teamPoints}</p> 
      </div>
  )
}
