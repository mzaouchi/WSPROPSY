import PropTypes from 'prop-types'; 
// const Child=(props)=>{
//     console.log("Props",props)
const Child=({name,mahmoud,pays,product,track,SayHello,hello,show,children})=>{
    return(
        <div>
            {/* <h2>Child Component</h2>
            <h3>{props.name}</h3>
            <h4>{props.mahmoud}</h4>           

            <ul>
                {
                    props.pays.map((el,i,t)=> <li>{el}</li> )
                }
            </ul>

            <h2>{props.product.productName}</h2>
            <h2>{props.product.size}</h2>
            <h2>{props.product.town.city}</h2> */}

             <h2>Child Component</h2>
             {children}
            <h3>{name}</h3>
            <h4>{mahmoud}</h4>           

            <ul>
                {
                    pays.map((el,i,t)=> <li>{el}</li> )
                }
            </ul>

            <h2>{product.productName}</h2>
            <h2>{product.size}</h2>
            <h2>{product.town.city}</h2>

            <h2>{track}</h2>

             {
                show === true ?
                <button onClick={SayHello}>Hello</button>
                :
                <button onClick={()=>hello("Oussema")}>Hello Name</button>
             }   
            
            
        </div>
    )
}

Child.defaultProps = {
    name : "DJEJA",
    mahmoud : 100
}

Child.propTypes = {

    name : PropTypes.string
}

export default Child