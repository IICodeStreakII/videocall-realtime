import React from "react"
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function Room() {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 161545089;
        const serverSecret = "40e931280c33a43165383f310455856b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(),"enter your name"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            
            scenario: {
             mode: ZegoUIKitPrebuilt.VideoConference,
            },
       });
        
    };
    


    return (
        <>

            <div className="room">
                <div ref={myMeeting} />

            </div>
        </>
    )
}

export default Room
