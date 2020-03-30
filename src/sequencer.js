console.clear()
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
const allInput = document.body.querySelectorAll('input')

const play = document.body.querySelector('.play');
const pause = document.body.querySelector('.pause');
const rows = document.body.querySelectorAll('.row');
const refresh = document.body.querySelector('.refresh');
const reset = document.body.querySelector('.reset');
const spans = document.body.querySelectorAll('span');



const notes = ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];

let index = 0;


Tone.Transport.scheduleRepeat(repeat, "8n")
// Tone.Transport.bpm.value = 20
play.addEventListener('click', () => {
    Tone.Transport.start()
})
pause.addEventListener('click', () => {
    Tone.Transport.stop()
})
refresh.addEventListener('click', e => {
    for (let i = 0; i < allInput.length; i++) {
        if (allInput[i].checked === true) {
            allInput[i].checked = false
        }
    }
})
reset.addEventListener('click', e => {
    index = 0;
    Tone.Transport.stop();
    spans.forEach(span => span.classList.remove('highlight'))
})

function repeat() {
    let step = index % 16;
    for (let i = 0; i < rows.length; i++) {
        let synth = synths[i],
            note = notes[i],
            row = rows[i],
        input = row.querySelector(`label:nth-child(${step + 1})`);
        span = input.querySelector(`span`);
        checkbox = input.querySelector('input');
        if (checkbox.checked) {
            synth.triggerAttackRelease(note, '8n');  
        }
        span.classList.toggle('highlight')

    }
    index++;
}