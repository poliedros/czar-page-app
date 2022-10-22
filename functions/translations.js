import translations from "../translations.json";

export default function Translations(word, language, pos=-1){
    if(pos === -1){
        return translations[word][language];
    }
    return translations[word][language][pos];
}