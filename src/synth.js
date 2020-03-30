console.clear()
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});
const synth = new Tone.Synth().toMaster();

const c5 = document.querySelectorAll('.row-1');
const d5 = document.querySelectorAll('.row-2');
const e5 = document.querySelectorAll('.row-3');
const f5 = document.querySelectorAll('.row-4');
const g5 = document.querySelectorAll('.row-5');
const a5 = document.querySelectorAll('.row-6');
const b5 = document.querySelectorAll('.row-7');
const c6 = document.querySelectorAll('.row-8');

for (let i = 0; i < c5.length; i++) {
    c5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('C5', '8n');
    });
}
for (let i = 0; i < d5.length; i++) {
    d5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('D5', '8n');
    });
}
for (let i = 0; i < e5.length; i++) {
    e5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('E5', '8n');
    });
}
for (let i = 0; i < f5.length; i++) {
    f5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('F5', '8n');
    });
}
for (let i = 0; i < g5.length; i++) {
    g5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('G5', '8n');
    });
}
for (let i = 0; i < a5.length; i++) {
    a5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('A5', '8n');
    });
}
for (let i = 0; i < b5.length; i++) {
    b5[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('B5', '8n');
    });
}
for (let i = 0; i < c6.length; i++) {
    c6[i].addEventListener('click', () => {
        Tone.start();
        synth.triggerAttackRelease('C6', '8n');
    });
}

