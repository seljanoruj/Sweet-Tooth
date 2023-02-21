import React, { useEffect, useState } from 'react'

const Mode = () => {

    const [darkMode, setDarkMode] = useState(false);
    const ActiveMode =  () => {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            localStorage.setItem('Mode', 'light');
        }
        if (darkMode === false) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem('Mode', 'dark');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('Mode') === 'light') {
            document.body.classList.add("light");
        }
        else if (localStorage.getItem("Mode") === "dark") {
            document.body.classList.add("dark");
            setDarkMode(!darkMode);
        }
    }, []);

    return (
        <button onClick={ActiveMode} className='mode' >
            {!darkMode
                ?
                <i class="fa-solid fa-moon"></i>
                :
                <i class="fa-solid fa-sun"></i>
            }
        </button>
    )
}

export default Mode