function applyStyle(styles, text) 
{
    let styleString = styles.map(style => style.join(": ")).join("; ");

    document.write(`<p style="${styleString}">${text}</p>`);
}

let styles = [
    ["color", "green"],
    ["font-size", "5.5em"],
    ["text-align","center"],
    ["font-family", " Arial"],
    ["padding"," 20px"],
    ["border", "8px solid black"]
   
    
];

let text = "Продам  золотой винтик с кареты Наполеона, сам скручивал. Недорого самовывоз с поля боя";
applyStyle(styles, text);