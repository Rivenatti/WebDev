$(document).ready(function(){

    $('#generate').click(function(){
        
        // Variables
        var characters = $('#characters').val();
        var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var special = ['@', '#', '$', '%', '&'];
        var allCharacters = [];
        var password = [];
        
        if($("#lowercase").is(':checked')){
            for(var i=0; i<lowercase.length; i++){
                allCharacters += lowercase[i];
            }
            var indexLow = Math.floor((Math.random() * lowercase.length));
            password += lowercase[indexLow];
        }
        
        if($("#uppercase").is(':checked')){
            for(var i=0; i<uppercase.length; i++){
                allCharacters += uppercase[i];
            }
            var indexUpp = Math.floor((Math.random() * uppercase.length));
            password += uppercase[indexUpp];
        }
        
        if($("#numbers").is(':checked')){
            for(var i=0; i<numbers.length; i++){
                allCharacters += numbers[i];
            }
            var indexNum = Math.floor((Math.random() * numbers.length));
            password += numbers[indexNum];
        }
        
        if($("#special").is(':checked')){
            for(var i=0; i<special.length; i++){
                allCharacters += special[i];
            }
            var indexSpec = Math.floor((Math.random() * special.length));
            password += special[indexSpec];
        }
        
        while(password.length < characters){
            var indexAllChars = Math.floor((Math.random() * allCharacters.length));
            password += allCharacters[indexAllChars];
        }
        
        $('#password').html(shuffleWord(password));
        
    }); // end #generate


  
    
function shuffleWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}
}); // end document

