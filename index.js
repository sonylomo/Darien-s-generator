var shirts = ['black', 'green', 'blue', 'light-blue', 'red', 'grey'];
var pants = ['black', 'blue', 'grey', 'kaki', 'green'];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//array to be passed as a parameter for shuffling
function shuffleArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(pants);
shuffleArray(shirts);

//for final output
for( x=0; x < days.length; x++)
{
    console.log(days[x]+ ' : ' +pants[x] + ' pants and '+ shirts[x] + ' shirt.');
}