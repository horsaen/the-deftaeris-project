export default function Hello (): JSX.Element {
    // Sample array of language objects
    const languageList = [
        {"language": "English", "hello": "hello"},
        {"language": "Spanish", "hello": "hola"},
        {"language": "French", "hello": "bonjour"},
        {"language": "German", "hello": "hallo"},
        {"language": "Italian", "hello": "ciao"},
        {"language": "Portuguese", "hello": "olá"},
        {"language": "Dutch", "hello": "hallo"},
        {"language": "Swedish", "hello": "hej"},
        {"language": "Norwegian", "hello": "hei"},
        {"language": "Danish", "hello": "hej"},
        {"language": "Finnish", "hello": "hei"},
        {"language": "Russian", "hello": "привет"},
        {"language": "Polish", "hello": "cześć"},
        {"language": "Czech", "hello": "ahoj"},
        {"language": "Slovak", "hello": "ahoj"},
        {"language": "Hungarian", "hello": "szia"},
        {"language": "Romanian", "hello": "salut"},
        {"language": "Bulgarian", "hello": "здравейте"},
        {"language": "Greek", "hello": "γεια σου"},
        {"language": "Turkish", "hello": "merhaba"},
        {"language": "Arabic", "hello": "مرحبا"},
        {"language": "Hebrew", "hello": "שלום"},
        {"language": "Persian", "hello": "سلام"},
        {"language": "Hindi", "hello": "नमस्ते"},
        {"language": "Bengali", "hello": "হ্যালো"},
        {"language": "Thai", "hello": "สวัสดี"},
        {"language": "Vietnamese", "hello": "xin chào"},
        {"language": "Mandarin", "hello": "你好"},
        {"language": "Cantonese", "hello": "你好"},
        {"language": "Japanese", "hello": "こんにちは"},
        {"language": "Korean", "hello": "안녕하세요"},
        {"language": "Indonesian", "hello": "halo"},
        {"language": "Malay", "hello": "hello"},
        {"language": "Tagalog", "hello": "kamusta"},
        {"language": "Swahili", "hello": "jambo"},
        {"language": "Zulu", "hello": "sawubona"},
        {"language": "Xhosa", "hello": "molo"},
        {"language": "Afrikaans", "hello": "hallo"}
    ]
    // Shuffle the array using Fisher-Yates shuffle algorithm
    for (let i = languageList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [languageList[i], languageList[j]] = [languageList[j], languageList[i]];
    }

// Iterate over shuffled array to print out language names
    // const usedNames = new Set();
    // for (let i = 0; i < 10; i++) {
    //     if (!usedNames.has(languageList[i].hello)) {
    //         console.log(languageList[i].hello);
    //         usedNames.add(languageList[i].hello);
    //     }
    // }
    return (
        languageList.map((languageList, i) => (
            <span key={i}>{languageList.hello}</span>
        ))
    )
}