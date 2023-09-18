export const HistoricRows = (props) => {
    const { title, content } = props
    return (
        <div className="historicRowsPart">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <p>{title}</p>
                <div style={{alignItems: 'center',}}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
        )
}
