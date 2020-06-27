import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProviders from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProviders {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
