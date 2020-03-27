function sequencer() {
    const kick = new Tone.Player('../drums/kick-808.wav').toMaster();
    const snare = new Tone.Player('../drums/snare-808.wav').toMaster();
    let i = 0;

    const kickInputs = document.querySelectorAll('.kick');
    const snareInputs = document.querySelectorAll('.snare');
}
sequencer();