const withPWA = require('next-pwa')

const pwa = {
    dest: 'public'
}

const images = {
    domains: ['media-exp1.licdn.com']
}

module.exports = process.env.NODE_ENV === 'development' ? { images } : withPWA({...pwa, ...images})