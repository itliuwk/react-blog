/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-16' 0016
 * Time: 16:41:30
 *
 */


module.exports = {
    apps: [{
        name: 'liuwk',
        script: 'server.js',
        instances: 4,
        max_restarts: 7,
        env: {
            NODE_ENV: 'production',
            NODE_PORT: 8080,
            REACT_APP_ENV: 'test',
        },
        watch: false,
        merge_logs: true,
        exec_mode: 'cluster',
        max_memory_restart: '600M',
        instance_var: 'NODE_APP_INSTANCE',
    }]
}