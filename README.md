# MusicBucket

[`Live site here `](https://binonguyen1090.github.io/MusicBucket/)
### Background
##### Music bucket is a 16 step sequencer with an 8 track,tone selection grid and a 3 track sound machine with which users can create and manipulate original and groovy loops.


<img width="1667" alt="Screen Shot 2020-05-22 at 12 53 54 AM" src="https://user-images.githubusercontent.com/38637651/82635815-bde5b800-9bc6-11ea-8425-748dd0308e24.png">



### Technologies 
##### The app created using JavaScript, jQuery, HTML/CSS, and Tone.js.
##### Music bucket was constructed utilizing a combination of JavaScript, Tone.js, HTML and CSS. JavaScript was used for the main logic along with Tone.js to generate the various sound samples. HTML was used to structure the application and CSS was used for styling.

### Implementation
##### Music bucket uses JavaScript and jQuery to create a soundboard that loops through playing different beats.

```function repeat() {
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
```
##### The slider sets the tempo with setTimeout based on the selected tempo.
<img width="610" alt="Screen Shot 2020-04-23 at 7 06 25 AM" src="https://user-images.githubusercontent.com/38637651/80108289-fabf8000-8530-11ea-8dc6-da331600cfba.png">


```
Tone.Transport.bpm.value = 200;
tempo.addEventListener("change", e => {
    Tone.Transport.bpm.rampTo(e.target.value, 0.1);

});

```
##### User can listen to the music on the app and be albe to download the song.
<img width="604" alt="Screen Shot 2020-04-23 at 7 09 10 AM" src="https://user-images.githubusercontent.com/38637651/80108643-5ee24400-8531-11ea-997b-5c5b4b7c0ab8.png">

```
<div class='audio-design'>
    <div id='audio-out'>
        <img id='music-icon' src="dist/images/music-icon.png" alt="music-icon">
        <strong id='title'>Perfect - Ed Sheeran</strong>
        <img id='forward' onclick='myFunction()' src="dist/images/forward.png" alt="forward">
    </div>
    <audio id='m0' class='controls' controls preload="auto" loop
        src="dist/images/Ed Sheeran - Perfect (Lyrics).mp3"></audio>
    <audio id='m1' class='controls' controls preload="auto" loop
        src="dist/images/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3"></audio>
    <audio id='m2' class='controls' controls preload="auto" loop src="dist/images/God's Plan.mp3"></audio>
            
</div>


```
### Feature

##### Each cell has the ability to toggle play on or off. When toggled on, the beat will play at tempo as the slider loops through the board. User can increase and decrease tempo, pause, clear and reset the board.
