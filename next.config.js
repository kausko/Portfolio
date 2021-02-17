const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    images: {
        domains: ['media-exp1.licdn.com', 'avatars.githubusercontent.com']
    }
})