const needle = require('needle')
    , execSync = require('child_process').execSync
    ;

setInterval(async () => {
    const query = await needle('post', process.env.NODE_API_URL, {});
    if (query.body.success) {
        if (query.body.data == 'Sim')
            execSync(`"${process.env.NODE_VLC_PATH}" --qt-start-minimized --play-and-exit "${__dirname}\\test.mp3"`, { windowsHide: true });
    } else {
        console.error(query.body.msg || 'Erro ao Consultar');
    }
}, 15000);