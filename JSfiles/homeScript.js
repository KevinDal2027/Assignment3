document.addEventListener("DOMContentLoaded", () => {
    const notificationButton = document.getElementById("show");
    const notificationMessage = document.getElementById("notificationMessage");
    notificationMessage.innerHTML = Date();
    notificationMessage.classList.toggle("hidden");
    let isHidden = true;

    notificationButton.addEventListener("click", () => {
        isHidden = !isHidden;
        console.debug();   
        if (isHidden) {
            notificationButton.textContent = "Show Date Notification";
        } 
        else {
            notificationButton.textContent = "Hide Date Notification";
        }
        notificationMessage.classList.toggle("hidden");
    });
});