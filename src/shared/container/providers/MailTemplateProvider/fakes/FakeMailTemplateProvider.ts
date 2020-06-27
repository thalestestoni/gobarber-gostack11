import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProviders from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProviders {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
