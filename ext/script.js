// document.getElementById("autofill").addEventListener("click", () =>{
//     chrome.tabs.sendMessage(tabs[0].id,{
//         name: document.getElementById('name').value,
//         fullNameKana: document.getElementById('fullNameKana').value,
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         firstNameKana: document.getElementById('firstNameKana').value,
//         lastNameKana: document.getElementById('lastNameKana').value,
//         email: document.getElementById('email').value,
//         number: document.getElementById('number').value,
//         company: document.getElementById('company').value,
//         firstNdepartmentame: document.getElementById('department').value,
//         template: document.getElementById('template').value,

//     })
// })

document.getElementById("autofill").addEventListener("click", () => {
    /* Auto fill form */

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            number: document.getElementById('number').value,
            company: document.getElementById('company').value,
            department: document.getElementById('department').value,
            template: document.getElementById('template').value,
        }, function(response) {
            console.log(response.status);
        });
    });
});

document.getElementById("save").addEventListener("click", () =>{
    chrome.storage.sync.set({
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        company: document.getElementById('company').value,
        department: document.getElementById('department').value,
        template: document.getElementById('template').value,
    }, function(){
        console.log("Saved!")
    })
})

document.getElementById("load").addEventListener("click", () =>{
    chrome.storage.sync.get([
        'fullName',
        'email',
        'number',
        'company',
        'department',
        'template',
    ],function(result){
        document.getElementById("fullName").value = result.fullName;
        document.getElementById("email").value = result.email;
        document.getElementById('number').value = result.number;
        document.getElementById('company').value = result.company;
        document.getElementById('department').value = result.department;
        document.getElementById('template').value = result.template;
    })
})

