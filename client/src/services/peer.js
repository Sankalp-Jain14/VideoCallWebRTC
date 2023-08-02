class PeerService {
    constructor(){
        if(!this.peer){
            this.peer = new RTCPeerConnection({
                iceServer: [
                    {
                        urls: [
                            "stun:stun.l.google.com:19302",
                            "stun:global.stun.twilio.com.3478",
                        ],
                    },
                ],
            });
        }
    }
    async getOffer(){
        if(this.peer){
            const offer = await this.peer.createOffer();
            await this.peer.setLocalDescription(new RTCSessionDescription(offer))
            return offer;
            
        }
    }//offer banaya aur use local me set kiya
}
export default new PeerService();