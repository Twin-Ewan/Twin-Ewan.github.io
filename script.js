function Load()
{
    GenerateSidebar();
}

class Section {
    constructor(header, entries) {
        this.header = header;
        this.entries = entries;
    }
}

class entry {    
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

    const GenLinks = [new entry("Home", "/"), new entry("Highlights"), new entry("About Me")];
    const General = new Section("General", GenLinks);

    const EduLinks = [new entry("Year 4"), new entry("Year 3"), new entry("HND"), new entry("HNC"), new entry("Highschool")]
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