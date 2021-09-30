let hoverMe = () => {
    let titleMe = document.querySelector(".heading").innerHTML;
    let textMe = [...titleMe];
    let content = "";
    textMe.map((item) => {
        content += `
            <span>${item}</span>
        `
    })
    document.querySelector(".heading").innerHTML = content;
}

hoverMe();