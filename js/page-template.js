// Template function to generate navigation HTML
function getNavigation(activePage) {
    const pages = [
        { href: '.', text: 'Home', id: 'home' },
        { href: './about.html', text: 'About', id: 'about' },
        { href: './crypto.html', text: 'Crypto', id: 'crypto' },
        { href: './easy.html', text: 'Easy', id: 'easy' },
        { href: './expertwitness.html', text: 'Cybersecurity Expert Witness', id: 'expertwitness' },
        { href: './press-media.html', text: 'Press & Media', id: 'press-media' },
        { href: './speaker.html', text: 'Speaker', id: 'speaker' },
        { href: './tns.html', text: 'TNS', id: 'tns' },
        { href: './unix-vs-windows.html', text: 'Unix vs Windows', id: 'unix-vs-windows' },
        { href: './why-i-like-linux.html', text: 'Why I like Linux', id: 'why-i-like-linux' },
        { href: './contact.html', text: 'Contact', id: 'contact' },
        { href: './expiredrhce.html', text: 'Expired RHCE', id: 'expiredrhce' },
        { href: '/blog.html', text: 'Blog', id: 'blog' }
    ];
    
    let navHtml = '';
    pages.forEach(page => {
        const isActive = page.id === activePage ? 'active' : '';
        const text = page.text === 'Press & Media' ? 'Press <span class="amp">&amp;</span> Media' : 
                     page.text === 'TNS' ? '<span class="caps">TNS</span>' :
                     page.text === 'Expired RHCE' ? 'Expired <span class="caps">RHCE</span>' : page.text;
        navHtml += `<li class="nav-item"><a class="nav-link ${isActive}" href="${page.href}">${text}</a></li>`;
    });
    return navHtml;
}
