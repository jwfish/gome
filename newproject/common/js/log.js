let log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null

export default {
    debug() {
        
        if (!log) return
        log.debug.apply(log, arguments)
    },
    info() {
      
        if (!log) return
        log.info.apply(log, arguments)
    },
    warn() {
        if (!log) return
        log.warn.apply(log, arguments)
    },
    error() {
        if (!log) return
        log.error.apply(log, arguments)
    },
    setFilterMsg(msg) { // 从基础库2.7.3开始支持
        if (!log || !log.setFilterMsg) return
        if (typeof msg !== 'string') return
        log.setFilterMsg(msg)
    },
    addFilterMsg(msg) { // 从基础库2.8.1开始支持
        if (!log || !log.addFilterMsg) return
        if (typeof msg !== 'string') return
        log.addFilterMsg(msg)
    }
}

// 使用 在页面引入log.js文件 在
// import log from '@common/js/log' // 引用上面的log.js文件
// log.info('hello test hahaha') // 日志会和当前打开的页面关联，建议在页面的onHide、onShow等生命周期里面打
// log.warn('warn')
// log.error('error')
// log.setFilterMsg('filterkeyword')
// log.setFilterMsg('addfilterkeyword')