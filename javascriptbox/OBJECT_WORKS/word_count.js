var text="hello hai hello hai"
var wc={}  
text.split(" ").map(word=>word in wc?wc[word]+=1 :wc[word]=1)
console.log(wc);                          //using array in single step for finding the word count


//split ;"hello","hai","hello","hai"
var words=text.split(" ")
//console.log(word);
 
for( let word of words){
    if( word in wc){
    wc[word]+=1
    }

else {
    wc[word]=1
}
}
//console.log(wc);

    
