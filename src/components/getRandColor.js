let colors = [ "#0bb7fb","#FBD001","#E62311","#43AF35"]
//FONCTION POUR GENERER LA COULEUR DES TEXTE
let index_test = 0
function randomColor(sentences,tag_sentences){
    for (let index = 0; index < sentences.length; index++) {
        let element = sentences[index];
        let span = document.createElement('span'); 
        // span.textContent = sentences[index]
        // const color = colors[index_test];
        // console.log(color);
        if (element !== ' ' ) {
            span.textContent = sentences[index]
            const color = colors[index_test];
            span.style.color = color; 
        }
        else{
            index--
        }
        console.log(span)
        tag_sentences.appendChild(span)
        // console.log(element);
        if (index_test == 3) {
            index_test = 0
        }
        else{
            index_test++
        }
        
    }
    // return span
}
export default randomColor