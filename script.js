function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    var buttonText = document.getElementById("sidebarButton");
    sidebar.classList.toggle("show");
    if (buttonText.innerHTML === "☰") {
        buttonText.innerHTML = "x";
    }else{
        buttonText.innerHTML = "☰";
    }
}