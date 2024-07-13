const path = require('path');
const templatesPath = path.join(__dirname, '.templates');
const componentsPath = path.join(__dirname, 'src', 'components');

module.exports = function (plop) {
  plop.setHelper('firstUpperCase', (text) => text.charAt(0).toUpperCase() + text.slice(1));

  plop.setGenerator('component', {
    description: 'New UI Component',
    prompts: [
      {
        type: 'list',
        name: 'atomType',
        choices: ['atom', 'molecule', 'organism', 'template', 'page'],
        message: 'Atomic Type',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component Name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: path.join(templatesPath, 'component/fc.hbs'),
        path: path.join(
          componentsPath,
          '{{ atomType }}s',
          '{{ firstUpperCase name }}',
          '{{ firstUpperCase name }}.tsx'
        ),
      },
      {
        type: 'add',
        templateFile: path.join(templatesPath, 'component/index.hbs'),
        path: path.join(componentsPath, '{{ atomType }}s', '{{ firstUpperCase name }}', 'index.ts'),
      },
      {
        type: 'add',
        templateFile: path.join(templatesPath, 'component/fcTypes.hbs'),
        path: path.join(componentsPath, '{{ atomType }}s', '{{ firstUpperCase name }}', 'types.ts'),
      },
      {
        type: 'add',
        templateFile: path.join(templatesPath, 'component/styles.hbs'),
        path: path.join(componentsPath, '{{ atomType }}s', '{{ firstUpperCase name }}', 'styles.ts'),
      },
    ],
  });
};
