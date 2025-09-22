const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-docs'],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  webpackFinal: (config: { resolve: { modules: string[] } }) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}

export default config
