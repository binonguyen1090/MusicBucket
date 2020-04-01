console.clear()
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});
const noisesynth = new Tone.NoiseSynth().toMaster()
const metalsynth = new Tone.MetalSynth().toMaster()
const membrancesynth = new Tone.PluckSynth().toMaster()


const noises = document.querySelectorAll('.row-noise');
const metals = document.querySelectorAll('.row-metal');
const membrances = document.querySelectorAll('.row-membrance');


for (let i = 0; i < noises.length; i++) {
    noises[i].addEventListener('click', () => {
        noisesynth.triggerAttackRelease('8n');
    });
}

for (let i = 0; i < metals.length; i++) {
    metals[i].addEventListener('click', () => {
        metalsynth.triggerAttackRelease('8n');
    });
}

for (let i = 0; i < membrances.length; i++) {
    membrances[i].addEventListener('click', () => {
        membrancesynth.triggerAttackRelease('C3','8n');
        
    });
}
