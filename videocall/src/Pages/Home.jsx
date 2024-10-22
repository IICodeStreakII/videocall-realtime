import React,{ useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";



function Home() {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();




    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate(`/room/${roomCode}`);

    };



    return (
        <>

            <div className="Homepage">
                <form onSubmit= {handleFormSubmit} className="form">
                    <div>
                        <label >Enter session code</label>
                   
                        <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)}  type="text" name="roomCode" required placeholder="Enter Your RoomCode" />
                    </div>
                    <button type="submit">Enter the session</button>

                </form>

            </div>
        </>
    );
}

export default Home
