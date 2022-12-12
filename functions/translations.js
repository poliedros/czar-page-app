import translations from "../translations.json";

export default function Translations(sentence, language/* , pos=-1 */){
    /* if(pos === -1){
        return translations[word][language];
    } */
    return translations[sentence][language]/* [pos] */;
}