document.getElementById('btn-more').addEventListener('mouseover', function(){
    console.log('Event Triggered')
})

// Focus in Text Input
document.getElementById('text-field').addEventListener('focus', function(){
    console.log('Event triggered in Focus')
})

// Blur in Text Input
document.getElementById('text-field').addEventListener('blur', function(){
    console.log('Event triggered in Blur')
})

// Keydown in Text Input
// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value)
// })

// Keypress in Text Input
// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value)
// })

// Keyup in Text Input
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value)
})