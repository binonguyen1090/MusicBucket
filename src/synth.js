console.clear()
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});
const synth = new Tone.Synth()
const gain = new Tone.Gain(0.2);
gain.toMaster()
synth.connect(gain);

const c5 = document.querySelectorAll('.row-1-sound');
const d5 = document.querySelectorAll('.row-2-sound');
const e5 = document.querySelectorAll('.row-3-sound');
const f5 = document.querySelectorAll('.row-4-sound');
const g5 = document.querySelectorAll('.row-5-sound');
const a5 = document.querySelectorAll('.row-6-sound');
const b5 = document.querySelectorAll('.row-7-sound');
const c6 = document.querySelectorAll('.row-8-sound');

for (let i = 0; i < c5.length; i++) {
    c5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('C5', '8n');
    });
}
for (let i = 0; i < d5.length; i++) {
    d5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('D5', '8n');
    });
}
for (let i = 0; i < e5.length; i++) {
    e5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('E5', '8n');
    });
}
for (let i = 0; i < f5.length; i++) {
    f5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('F5', '8n');
    });
}
for (let i = 0; i < g5.length; i++) {
    g5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('G5', '8n');
    });
}
for (let i = 0; i < a5.length; i++) {
    a5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('A5', '8n');
    });
}
for (let i = 0; i < b5.length; i++) {
    b5[i].addEventListener('click', () => {
        synth.triggerAttackRelease('B5', '8n');
    });
}
for (let i = 0; i < c6.length; i++) {
    c6[i].addEventListener('click', () => {
        synth.triggerAttackRelease('C6', '8n');
    });
}

