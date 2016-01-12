var config = {

    // the remote address where a qstat xml can be returned
    qstatAddress: 'http://dpmaster.deathmask.net/?&xml=1&showplayers=1',

    // local or remote for bspname.jpg
    mapshotDir: 'http://xonotic.co/resources/mapshots/maps/',

    // extension of all the mapshots
    mapshotExtension: '.jpg',

    // theme (can be overriden by user's choice if switcher is enabled)
    theme: 'default',

    // IRC channel
    ircChannel: 'smb',

    // if true, the chat iframe will be loaded only when requested
    enableLoadChatButton: true,

    // this allows users to choose their own theme (uses a cookie)
    enableThemeSwitcher: true,
    
    // allow for devmode
    enableEditor: true,

    // debug options in developer mode
    editorOptions: {

        // used for development / debugging
        useLocalXML: false,

        // where is it located?
        qstatLocalXML: 'resources/data/qstat.xml'

    }

};
