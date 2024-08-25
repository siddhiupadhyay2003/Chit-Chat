import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';


const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('48d079ba-116e-49ee-b87f-df80078de26b' , 
        props.user.username ,
        props.user.secret);
    return <div style = {{height: '100vh'}}>  
     <MultiChatSocket {...chatProps}/>
     <MultiChatWindow {...chatProps} style = {{height : '100%'}}/>
    </div>
}

export default ChatsPage