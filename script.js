function Load()
{
    CreateHeader();
    GenerateSidebar();
}

function CreateHeader()
{
    const Header = document.getElementsByTagName("head")[0];

    Header.innerHTML += '<link rel="icon" type="image/x-icon" href="icon.ico"></link>';
    Header.innerHTML += '<link rel="stylesheet" type="text/css" href="styles.css">';

    console.log(window.location.pathname);
}

class Section {
    constructor(header, entries) {
        this.header = header;
        this.entries = entries;
    }
}

class Entry {    
    // My beautiful son overloading, dead
    constructor(display, link) {
        if(!link)
        {
            this.display = display;
            this.link = display;
        }
        else
        {
            this.display = display;
            this.link = link;
        }
    }
}

function GenerateSidebar()
{
    const Sidebar = document.getElementById("contents");

    const GenLinks = [new Entry("Home", "/"), new Entry("Highlights"), new Entry("About Me")];
    const General = new Section("General", GenLinks);

    const EduLinks = [new Entry("Year 4"), new Entry("Year 3"), new Entry("HND"), new Entry("HNC"), new Entry("Highschool")]
    const Education = new Section("Education", EduLinks);

    const Contents = [General, Education];
    Contents.forEach(section => {
        
        Sidebar.innerHTML += `<h5>${section.header}</h5>`;

        section.entries.forEach(entry => {
            Sidebar.innerHTML += `<a href="${entry.link}/">${entry.display}</a>`; 
        });
    });
}

Load(); 