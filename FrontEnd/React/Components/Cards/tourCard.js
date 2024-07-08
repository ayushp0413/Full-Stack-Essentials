import {useState } from "react";

// Tour Card Component ----> Plan with Ayush
function Cards({id,name,info,price,image,removeTour})
{
    // readMore is a boolean flag
    // agr uski value true hai to full info show krdo
    // nito adhura info show krdo
    const [readmore,setReadmore] = useState(false); //initially adhura text show hoga
    const description = readmore ? info :`${info.substring(0,200)}....`;

    function readMoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">

            <img src={image} className="image"></img>
           
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>   
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? `Show Less` :`Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={()=>{removeTour(id)}}>Not Interested</button>

        </div>
    );
}

export default Cards;