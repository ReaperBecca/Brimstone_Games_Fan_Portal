const { BrowserWindow, Notification, Menu } = require('electron');

class WindowManager {
    constructor() {
        this.windows = new Map();
        this.setupMainMenu();
    }

    setupMainMenu() {
        const template = [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Settings',
                        accelerator: 'CmdOrCtrl+,',
                        click: () => this.openSettings()
                    },
                    { type: 'separator' },
                    {
                        label: 'Exit',
                        accelerator: 'CmdOrCtrl+Q',
                        click: () => this.closeWindow('main')
                    }
                ]
            },
            {
                label: 'View',
                submenu: [
                    { role: 'reload' },
                    { role: 'forceReload' },
                    { role: 'toggleDevTools' },
                    { type: 'separator' },
                    { role: 'resetZoom' },
                    { role: 'zoomIn' },
                    { role: 'zoomOut' },
                    { type: 'separator' },
                    { role: 'togglefullscreen' }
                ]
            },
            {
                label: 'Community',
                submenu: [
                    {
                        label: 'Website',
                        click: () => this.openWebsite()
                    },
                    {
                        label: 'Discord',
                        click: () => this.openDiscord()
                    },
                    {
                        label: 'News Feed',
                        click: () => this.openNewsFeed()
                    }
                ]
            },
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'About',
                        click: () => this.openAbout()
                    },
                    {
                        label: 'Documentation',
                        click: () => this.openDocs()
                    },
                    {
                        label: 'Report Bug',
                        click: () => this.reportBug()
                    }
                ]
            }
        ];

        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }

    openSettings() {
        this.createPopupWindow('settings', {
            width: 500,
            height: 600,
            title: 'Settings'
        }).loadFile('pages/settings.html');
    }

    openWebsite() {
        this.getWindow('main').loadURL('https://brimstone.games');
    }

    openDiscord() {
        this.createPopupWindow('discord', {
            width: 1000,
            height: 800,
            title: 'Discord Community'
        }).loadURL('https://discord.gg/brimstone');
    }

    openNewsFeed() {
        this.getWindow('main').loadFile('pages/news.html');
    }

    openAbout() {
        this.createPopupWindow('about', {
            width: 400,
            height: 300,
            title: 'About Brimstone Games'
        }).loadFile('pages/about.html');
    }

    openDocs() {
        this.createPopupWindow('docs', {
            width: 800,
            height: 600,
            title: 'Documentation'
        }).loadFile('pages/documentation.html');
    }

    reportBug() {
        this.createPopupWindow('bug-report', {
            width: 600,
            height: 500,
            title: 'Report a Bug'
        }).loadFile('pages/bug-report.html');
    }

    // ... (keeping previous methods from the original WindowManager)
}

module.exports = new WindowManager();
