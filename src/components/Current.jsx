import { CurrentRows } from "./CurrentRows";
export const Current = (props) => {
    const { driver } = props;

console.log(driver)

  return (
    <div className="currentPart"
          style={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            border: '1px solid black',
          }}
        >
          <p>Current</p>
          <div style={{display:'flex', justifyContent: 'space-between', gap: '10px'}} >
            <CurrentRows title="Points:" content={driver.points}/>
            <CurrentRows title="Last race:" content={driver.lastRace}/>
          </div>
        </div>
  )
}
