//UPDATE: there is a problem in chrome with starting audio context before a user gesture.
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});

// function sequencer() {
//     const kick = new Tone.Player('../drums/kick-cultivator.wav').toMaster();
//     const kick1 = new Tone.Player('../drums/kick-big.wav').toMaster();
//     const kick3 = new Tone.Player('../drums/kick-slapback.wav').toMaster();
//     const kick4 = new Tone.Player('../drums/kick-tron.wav').toMaster();
//     const snare = new Tone.Player('../drums/snare-808.wav').toMaster();
//     const snare1 = new Tone.Player('../drums/snare-analog.wav').toMaster();
//     const snare2 = new Tone.Player('../drums/snare-noise.wav').toMaster();
//     const snare3 = new Tone.Player('../drums/snare-smasher.wav').toMaster();
//     const tom = new Tone.Player('../drums/tom-acoustic01.wav').toMaster();
//     const tom1 = new Tone.Player('../drums/tom-analog.wav').toMaster();
//     const tom2 = new Tone.Player('../drums/tom-chiptune.wav').toMaster();
//     const tom3 = new Tone.Player('../drums/tom-fm.wav').toMaster();
//     let i = 0;
    
//     // Transport => add f pass howmany time loops,(f,  8times)
//     Tone.Transport.scheduleRepeat(repeat, "32n");
//     Tone.Transport.start()

//     //f to repeat , loop8 time  and repeat
//     function repeat() {
//         let step = i % 32;
//         // console.log(step)
//         let kickInputs = document.querySelector(
//           `.kick input:nth-child(${step + 1})`
//         );
//         let kickInputs1 = document.querySelector(
//           `.kick1 input:nth-child(${step + 1})`
//         );
       
//         let kickInputs3 = document.querySelector(
//           `.kick3 input:nth-child(${step + 1})`
//         );
//         let kickInputs4 = document.querySelector(
//           `.kick4 input:nth-child(${step + 1})`
//         );
//         let tomInputs = document.querySelector(
//           `.tom input:nth-child(${step + 1})`
//         );
//         let tomInputs1 = document.querySelector(
//           `.tom1 input:nth-child(${step + 1})`
//         );
//         let tomInputs2 = document.querySelector(
//           `.tom2 input:nth-child(${step + 1})`
//         );
//         let tomInputs3 = document.querySelector(
//           `.tom3 input:nth-child(${step + 1})`
//         );
   
            

//         let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
//         let snareInputs1 = document.querySelector(`.snare1 input:nth-child(${step + 1})`);
//         let snareInputs2 = document.querySelector(`.snare2 input:nth-child(${step + 1})`);
//         let snareInputs3 = document.querySelector(`.snare3 input:nth-child(${step + 1})`);
//         if (kickInputs.checked){
//             // console.log('sound')
//             kick.start();
//         };
//         if (kickInputs1.checked){
//             // console.log('sound')
//             kick1.start();
//         };

//         if (kickInputs3.checked){
//             // console.log('sound')
//             kick3.start();
//         };
//         if (kickInputs4.checked){
//             // console.log('sound')
//             kick4.start();
//         };
    
//         if (snareInputs.checked) {
//           // console.log('sound')
//           snare.start();
//         };
//         if (snareInputs1.checked) {
//           // console.log('sound')
//           snare1.start();
//         };
//         if (snareInputs2.checked) {
//           // console.log('sound')
//           snare2.start();
//         };
//         if (snareInputs3.checked) {
//           // console.log('sound')
//           snare3.start();
//         };
//         if (tomInputs.checked) {
//           // console.log('sound')
//           tom.start();
//         };
//         if (tomInputs1.checked) {
//           // console.log('sound')
//           tom1.start();
//         };
//         if (tomInputs2.checked) {
//           // console.log('sound')
//           tom2.start();
//         };
//         if (tomInputs3.checked) {
//           // console.log('sound')
//           tom3.start();
//         };
       
//         i++;
//     }
    
// }
// sequencer();

