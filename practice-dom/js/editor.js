// Bold Button
document.getElementById('bold-btn').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    const classList = textArea.classList;
    if(classList.contains("font-bold"))
    {
        textArea.classList.remove("font-bold");
    }
    else
    {
        textArea.classList.add("font-bold");
    }
})

// Italic Button
document.getElementById('italic-btn').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    const classList = textArea.classList;
    if(classList.contains("italic"))
    {
        textArea.classList.remove("italic");
    }
    else
    {
        textArea.classList.add("italic");
    }
})

// Underline Button
document.getElementById('underline-btn').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    const classList = textArea.classList;
    if(classList.contains("underline"))
    {
        textArea.classList.remove("underline");
    }
    else
    {
        textArea.classList.add("underline");
    }
})

// Font Size Field
document.getElementById('font-size').addEventListener('change', function(){
    const textArea = document.getElementById('text-area');
    const fontSizeField = parseFloat(document.getElementById('font-size').value);
    const size = fontSizeField+'px'
    textArea.style.fontSize = size;
})

// Text Color Field
document.getElementById('color-input').addEventListener('input', function(){
    const colorField = document.getElementById('color-input');
    const value = colorField.value;

    const textArea = document.getElementById('text-area');
    textArea.style.color = value;

})