import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

export default getStorybookUI({ port: 7007, onDeviceUI: true });
