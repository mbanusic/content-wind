export default defineAppConfig({
  // Configure Content Wind here
  cover: '/github-banner.png',

  socials: {
    twitter: 'mbanusic',
    github: 'mbanusic/content-wind'
  },

  prose: {
    h1: {
      icon: 'carbon:sailboat-coastal'
    }
  },

  nuxtIcon: {
    aliases: {
      'dark-mode': 'fa6-solid:moon',
      'light-mode': 'fa6-solid:sun'
    }
  }
})