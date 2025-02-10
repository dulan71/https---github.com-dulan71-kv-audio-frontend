import "./productCard.css";
export default function ProductCard(props){

    console.log(props.description)

    return(
        <div>
        <img src ={props.photoUrl} />
            <span>{props.name}</span>
            <span className ="price">LKR {props.price}</span>
            <p>{props.description}</p>
        </div>
    )

}