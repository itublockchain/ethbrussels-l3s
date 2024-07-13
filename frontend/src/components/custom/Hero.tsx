import { useDisconnect } from 'wagmi';
function Hero(){
    const { disconnect } = useDisconnect()

    return (
        <button onClick={() => disconnect()}>
            Disconnect
        </button>
    )
}

export default Hero;