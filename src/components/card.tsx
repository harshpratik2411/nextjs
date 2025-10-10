const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
     padding: "100px" ,
        border: "1px solid #ccc",
        margin: "10px",
        boxshadow: "2px 2px 12px rgba(0,0,0,0.1)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    } 
    return <div style={cardStyle}>{children}</div>;
} 
export default Card;