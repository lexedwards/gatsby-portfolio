module.exports = {
  stories: ['../src/stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links',
    '@storybook/addon-events',
    '@storybook/addon-notes',
    '@storybook/addon-options',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y', 
    '@storybook/addon-jest', 
    {
      name: '@storybook/addon-docs',
      options: {configureJSX : true}
    }
  ],
};
