!function(m,n){for(var e in n)m[e]=n[e]}(exports,function(m){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return m[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=m,e.c=n,e.d=function(m,n,o){e.o(m,n)||Object.defineProperty(m,n,{enumerable:!0,get:o})},e.r=function(m){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})},e.t=function(m,n){if(1&n&&(m=e(m)),8&n)return m;if(4&n&&"object"==typeof m&&m&&m.__esModule)return m;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:m}),2&n&&"string"!=typeof m)for(var i in m)e.d(o,i,function(n){return m[n]}.bind(null,i));return o},e.n=function(m){var n=m&&m.__esModule?function(){return m.default}:function(){return m};return e.d(n,"a",n),n},e.o=function(m,n){return Object.prototype.hasOwnProperty.call(m,n)},e.p="",e(e.s=26)}({26:function(m,n){function e(){var m=P(),n=a(m);return[m,d[m][n]]}function o(m,n){var e=t(m[0],n[0]);e.push(e[0]);var o=[],i=2,P=0,a="";return e.forEach(m=>{Object.keys(d).indexOf(m)<Object.keys(d).indexOf(a)&&i++,o.push([d[m][i],P,P+1]),P+=1,a=m}),o}function i(m){var n=m[Math.floor(Math.random()*m.length)],e=a(n);return d[n][e]}function P(){var m=Object.keys(d);return m[Math.floor(Math.random()*m.length)]}function a(m){var n=d[m];return Math.floor(Math.random()*n.length)}function r(m){const n=Object.keys(d),e=n.indexOf(m),o=n.slice(e),i=n.slice(0,e);return o.concat(i)}function t(m,n){const e=r(m),o=M(n);return console.log({tonic:m,scaleIntervalArray:o,orderedNotes:e}),o.map(m=>e[l.indexOf(m)])}function M(m){return scaleIntervalArray=m.split(" "),scaleIntervalArray}m.exports={pickNote:e,createMelody:function(){var m=e(),n=function(){const m=Math.floor(Math.random()*c.length);return c[m]}(),P=n.slice(1),a=t(m[0],n[0]),r=[];const M=[.25,.5];for(var d=0;d<10;){var l=M[Math.floor(Math.random()*M.length)];r.push([i(a),d,d+l]),d+=l}return{melody:r,key:m[0],scale:P,scaleNotes:o(m,n)}},pickRandomKey:P,pickRandomOctave:a,orderNotesTonicFirst:r,getValidNotes:t};const d={C:[130.81,261.63,523.25,1046.5],"C#/Db":[138.59,277.18,554.37,1108.73],D:[146.83,293.66,587.33,1174.66],"D#/Eb":[155.56,311.13,622.25,1244.51],E:[164.81,329.63,659.25,1318.51],F:[174.61,349.23,698.46,1396.91],"F#/Gb":[185,369.99,739.99,1479.98],G:[196,392,783.99,1567.98],"G#/Ab":[207.65,415.3,830.61,1661.22],A:[220,440,880,1760],"A#/Bb":[233.08,466.16,932.33,1864.66],B:[246.94,493.88,987.77,1975.53]},l=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"],c=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 5d 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 5d 6m 7M","lydian #5P pentatonic"],["1P 3M 5d 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 3m 3M 5P 6m 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 5d 6M 7m","prometheus neopolitan"],["1P 2M 3M 5d 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 6m 6M","six tone symmetric"],["1P 2M 3M 5d 6m 7m","whole tone","messiaen's mode #1"],["1P 2m 4P 5d 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 5d 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 3m 4d 5d 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 5d 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 5d 5P 6M 7M","lydian"],["1P 2M 3M 5d 6m 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","·superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 3m 3M 4P 5P 6m 7M","augmented heptatonic"],["1P 2M 3m 5d 5P 6M 7m","romanian minor"],["1P 2M 3m 5d 5P 6M 7m","dorian #4"],["1P 2M 3m 5d 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 5d 6m 7m 7M","leading whole tone"],["1P 2M 3M 5d 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 5d 5P 6m 7M","hungarian minor"],["1P 3m 3M 5d 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 5d 5P 7m","flamenco"],["1P 2m 3m 5d 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 6m 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 3m 3M 5d 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 5d 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 5d 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 6m 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 5d 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 5d 6m 7m 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 5d 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 5d 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]]}}));