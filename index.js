
function count(){
    let text = document.getElementById("userinput").value;
    let vowel_count = 0;
    

    const vowelsList = "aeiouAEIOU";

    for (const vowel of text){
        if((vowel >='a' && vowel<='z') || (vowel >='A' && vowel<='Z') ){
            if(vowelsList.includes(vowel)){
                vowel_count++;
            }
        }
    }
    document.getElementById('showresult').innerHTML = `Vowels Count : ${vowel_count}`
    
}

function reset()
{
    let vowel_count = 0;   
    document.getElementById('showresult').innerHTML = `Vowels Count : ${vowel_count}`
}