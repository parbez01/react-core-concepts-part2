export default function Friend({friend}){
   const {name,email,address} = friend;
    return (
        <div className="box">
           <h4>Name: {name}</h4>
           <p>Email: {email} </p> 
           <p>Geo: {address.geo.lat}</p>
        </div>
    )
}