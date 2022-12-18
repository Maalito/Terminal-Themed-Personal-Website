const bio = document.querySelector('#bio')
const reach = document.querySelector('#reach')
const bioContent = document.querySelector('#bio-content')
const reachContent = document.querySelector('#reach-content')

bio.addEventListener('click', () => {
    const bioBox = new WinBox({
        title: 'whoami',
        // modal: true,
        width: '50vh',
        heigt: '50vh',
        top: 25,
        bottom: 25,
        right: 25,
        left: 25,
        mount: bioContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

reach.addEventListener('click', () => {
    const reachBox = new WinBox({
        title: 'reach-me.txt',
        // modal: true,
        background: '#00aa00',
        width: '500px',
        heigt: '500px',
        top: 25,
        bottom: 25,
        right: 25,
        left: 25,
        mount: reachContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

