



export const Card = ({name,img,city,country,price}) => {
   
    
    return(
        <>
        <div className="card">
            
                
                <img src={img} alt='#' />
                <div className="card-description">
        <li>{name}</li>
            <span>{city}</span>
            <span>{country}</span>
            <span>{price} / night</span>

        </div>
           
            
           

        </div>
        
        </>

    )
}