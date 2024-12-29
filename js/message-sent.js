const close = document.getElementById("message-sent").children[0];
close.addEventListener("click", () => {
    document.getElementById("message-sent").remove();
});

const clear = document.getElementById("clear-form");
clear.addEventListener("click", clearForm);

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("messageSent").remove();
}