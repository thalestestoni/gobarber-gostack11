import IMailTemplateProviders from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProviders {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
