//your JS code here. If required.
let f_var = document.querySelector('#f');
let txt_var = document.querySelector('#text');
let delay_var = document.querySelector('#delay');
let btn_var = document.querySelector('#btn');
let output_var = document.querySelector('#output');

btn_var.addEventListener('click',(e)=>{
    e.preventDefault();
    if (txt_var.value == ""|| delay_var.value == "") {
        alert('they are emptuy');
        return;
    }
    delayedMessageFn(txt_var.value,delay_var.value).then(()=>{
        console.log("okok");
        
    });
});

async function delayedMessageFn(txt_v,delay_v) {
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(output_var.textContent = txt_v);
        },delay_v);
    });
}