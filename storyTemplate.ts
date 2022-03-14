import { JsonDocsProp } from "@stencil/core/internal"

export default (name: string, tag: string, props: Array<JsonDocsProp>) => {
    return `import readme from './readme.md';
    export default {
        title: 'Uniform/${name.split(' ').join('')}',
        parameters: {
            notes: readme
        },
        argTypes: {
            ${props.map(prop => {
        return prop.name + `: {
            ${prop.type.includes('|') ? 'options: [' + prop.type.split(' | ').join(', ') + '],' : ''}
            control: {
                ${!prop.type.includes(' ') ? 'type: \'' + getControlType(prop.type) + '\',' : 'type: \'select\','}
                defaultValue: ${prop.default},
            },
        }`
    }).join(',\n')}
        }
    }
    const Template = (args) => (\`<${tag} \${Object.entries(args).map(([k,v]) => \`\${k}="\${v}"\`).join(' ')}></${tag}>\`);
    export const Default = Template.bind({})`
}

const getControlType = (dataType: string) => {
    switch (dataType) {
        case 'string':
            return 'text'
        default:
            return dataType;
    }
}