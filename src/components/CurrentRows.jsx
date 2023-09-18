export const CurrentRows = (props) => {
  const { title, content } = props;
  
    return (
        <>
            <p><strong>{title}</strong> {content}</p>
        </>
  )
}
