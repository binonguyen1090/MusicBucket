console.clear()
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});
const synth = new Tone.Synth().toMaster();

const c5 = document.querySelectorAll('.row-1');

for (let i = 0; i < c5.length; i++) {
    c5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('C5', '8n');
    });
}

