import './Card.css';
function getLevel(user) {
    let level;
    
    if (user.level < 1) {
        level = 'Primary';
    } else if (user.level < 2) {
        level = 'Secondary';
    } else if (user.level < 3) {
        level = 'Bachelor';
    } else if (user.level < 4){
        level = 'University';
    } else{
        level= 'Doctoral'
    }

    return level;
}
function Card({ user }){
    
    return (
        <div id='background'>
            <div id='profileimg'/>
            <div id= 'info'>
                <h2>{user.name}</h2>
                <p>Level: {getLevel(user)}</p>
                <div id='details'>
                    <p className='a'>Speciality: {user.speciality}</p>
                    <p className='a'>Location: {user.location}</p>
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