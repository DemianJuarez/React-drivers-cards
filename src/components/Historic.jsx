import { HistoricRows } from "./HistoricRows";

export const Historic = (props) => {
  const { driver } = props;
    return (
    <div className="historicPart"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '10px',
            paddingTop: '10px',
          }}
        >
          <p>Historic</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between', 
              gap: '10px',
            }}
          >
            <HistoricRows title="Wins" content={driver.wins}/>
            <HistoricRows title="Wins" content={driver.poles}/>
            <HistoricRows title="Wins" content={driver.bestPosition}/>
          </div>
        </div>
  )
}
