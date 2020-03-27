//UPDATE: there is a problem in chrome with starting audio context before a user gesture.
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});

function sequencer() {
    const kick = new Tone.Player('../drums/kick-electro01.wav').toMaster();
    const snare = new Tone.Player('../drums/snare-808.wav').toMaster();
    let i = 0;
    
    // Transport => add f pass howmany time loops,(f,  8times)
    Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.Transport.start()

    //f to repeat , loop8 time  and repeat
    function repeat() {
        let step = i % 8;
        // console.log(step)
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        if (kickInputs.checked){
            kick.start();
        };
        i++;
    }
    
}
sequencer();
