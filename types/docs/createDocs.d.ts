import { JsonDocsComponent } from '../stencil-public-runtime';
export default class Documentation {
  private components;
  constructor(components: Array<JsonDocsComponent>);
  private getDocTags;
  private formatCode;
  private createExample;
  private createSidebar;
  private updatePackageJson;
  createReadme(): void;
  createStories(): void;
  createDocs(): void;
}
