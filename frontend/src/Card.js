import './Card.css';
function Card({ user }){
    console.log(user.level);
    return (
        <div id='background'>
            <div id='profileimg'/>
            <div id= 'info'>
                <h2>{user.name}</h2>
                <p>Level: {user.lvl}</p>
                <div id='details'>
                    <p className='a'>Speciality: {user.speciality}</p>
                    <p className='a'>Location: {user.city} , {user.country}</p>
                    <p className='a'>Remote: {user.remote ? 'Yes' : 'No'}</p>
                </div>
            </div>
            <div id='score'>
                <p>Puntuation:</p>
                <p id='points'>{user.puntuation}</p>
            </div>
        </div>
    );
}

export default Card;