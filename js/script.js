let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.toggle('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
    
});

    // Get all the "fa-image" elements
    const imageIcons = document.querySelectorAll('.fas.fa-image');

    // Get all the modal elements
    const modals = document.querySelectorAll('.modal');

    // Get all the close buttons
    const closeButtons = document.querySelectorAll('.close');

    // Loop through each image icon
    imageIcons.forEach((icon, index) => {
        // Add click event listener to open modal
        icon.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default action of the link
            modals[index].style.display = 'block';
        });

        // Add click event listener to close modal
        closeButtons[index].addEventListener('click', () => {
            modals[index].style.display = 'none';
        });

        // Add click event listener to close modal when clicking outside modal content
        window.addEventListener('click', (event) => {
            if (event.target === modals[index]) {
                modals[index].style.display = 'none';
            }
        });
    });


