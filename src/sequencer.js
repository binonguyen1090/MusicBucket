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
    new Tone.Synth(),
    new Tone.NoiseSynth(),
    new Tone.MetalSynth(),
    new Tone.PluckSynth()
]


synths.forEach(synth => {
    const gain = new Tone.Gain(0.4);
    gain.toMaster()
synth.connect(gain)
}    )
const allInput = document.body.querySelectorAll('input')

const play = document.body.querySelector('.play');
const pause = document.body.querySelector('.pause');
const rows = document.body.querySelectorAll('.row');
const clear = document.body.querySelector('.clear');
const reset = document.body.querySelector('.reset');
const spans = document.body.querySelectorAll('span');


const notes = ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];
const plucknote = 'C3'
let index = 0;


Tone.Transport.scheduleRepeat(repeat, "8n")
play.addEventListener('click', () => {
    Tone.Transport.start()
})
pause.addEventListener('click', () => {
    Tone.Transport.stop()
})

clear.addEventListener('click', e => {
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
            if (i <= 7) {
                synth.triggerAttackRelease(note, '8n');  
            } else if (i === 10) {
                synth.triggerAttackRelease(plucknote, '8n');  

            }else {
                synth.triggerAttackRelease('8n');
            }
           
        }
        span.classList.toggle('highlight')

    }
    index++;
} 