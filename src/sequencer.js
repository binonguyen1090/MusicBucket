document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});
const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
]

synths.forEach(synth => synth.toMaster())

const play = document.body.querySelector('.play');
const pause = document.body.querySelector('.pause');
const rows = document.body.querySelectorAll('.row');

const notes = ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];

let index = 0;


Tone.Transport.scheduleRepeat(repeat, "8n")

play.addEventListener('click', async () => {
    Tone.Transport.start()
})
pause.addEventListener('click', async () => {
    Tone.Transport.stop()
})

function repeat() {
    let step = index % 8;
    for (let i = 0; i < rows.length; i++) {
        let synth = synths[i],
            note = notes[i],
            row = rows[i],
        input = row.querySelector(`label:nth-child(${step + 1})`);
        checkbox = input.querySelector('input');
        if (checkbox.checked) {
            synth.triggerAttackRelease(note, '8n');  
        }
    }
    index++;
}