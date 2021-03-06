/// <reference path="../../index.d.ts" />

// spell-checker:disable

const DEFAULT_TELEPHONE_TEMPLATE = '+1 (XxX) XxX-XxxX';

const FormFillerDefaultOptions = (): IFormFillerOptions => {
  const options: IFormFillerOptions = {
    agreeTermsFields: ['agree', 'terms', 'conditions'],
    confirmFields: ['confirm', 'reenter', 'retype', 'repeat'],
    defaultMaxLength: 2000,
    emailSettings: {
      username: 'random',
      usernameList: ['jack', 'sparrow', 'frodo', 'baggins'],
      usernameRegEx: '',
      hostname: 'list',
      hostnameList: ['pipers.com', 'pipelineinprogress.com', 'luigi.net'],
    },
    enableContextMenu: true,
    fieldMatchSettings: {
      matchLabel: true,
      matchId: true,
      matchName: true,
      matchClass: true,
      matchPlaceholder: false,
      matchiGoAltId: true,
      matchiGoMaxLength: true,
      matchiGoRegexpPattern: true,
      matchiGoRadioButtonsLogic: true,
    },
    fields: [],
    ignoreFieldsWithContent: false,
    ignoreHiddenFields: true,
    ignoredFields: ['captcha', 'hipinputtext', 'ddlCaseAction'],
    passwordSettings: {
      mode: 'defined',
      password: 'Pa$$w0rd!',
    },
    triggerClickEvents: true,
  };

  // iGo
  options.fields.push({
    type: 'alphanumeric',
    name: 'Business Type',
    match: ['businesstype'],
    template: '[C]orporation',
  });

  // iGo
  options.fields.push({
    type: 'alphanumeric',
    name: 'Province (Canada)',
    match: ['province'],
    template: 'A[l]berta]',
  });

  // iGo
  options.fields.push({
    type: 'alphanumeric',
    name: 'Social Security Number / SIN',
    match: ['ssn'],
    template: '230-692-544',
  });

  options.fields.push({
    type: 'username',
    name: 'Username',
    match: ['userid', 'username'],
  });

  options.fields.push({
    type: 'first-name',
    name: 'First Name',
    match: ['firstname'],
  });

  options.fields.push({
    type: 'last-name',
    name: 'Last Name',
    match: ['lastname', 'surname', 'secondname'],
  });

  options.fields.push({
    type: 'email',
    name: 'Email Address',
    match: ['email'],
  });

  options.fields.push({
    type: 'organization',
    name: 'Organization or Company Name',
    match: ['organization', 'organisation', 'company'],
  });

  options.fields.push({
    type: 'full-name',
    name: 'Full Name',
    match: ['fullname', 'name'],
  });

  // iGo
  options.fields.push({
    type: 'telephone',
    name: 'Telephone Number',
    match: ['phone', 'fax'],
    template: '(XxX) XxX - XxxX',
  });

  // iGo
  options.fields.push({
    type: 'number',
    name: 'Amount / face amount',
    match: ['amount'],
    min: 15000,
    max: 50000,
    decimalPlaces: 0,
  });

  // iGo
  options.fields.push({
    type: 'alphanumeric',
    name: 'EFT Routing Number',
    match: ['RoutingNumber'],
    template: 'Xxxxxxxxx',
  });
  
  // iGo
  options.fields.push({
    type: 'number',
    name: 'A Random Number',
    match: ['integer', 'number', 'numeric', 'income', 'price', 'qty', 'quantity', 'code', 'value', 'asset', 'liabilit', 'income', 'revenue', 'field-numberedit'],
    min: 100000,
    max: 999999,
    decimalPlaces: 0,
  });

  // iGo
  options.fields.push({
    type: 'number',
    name: 'Percentage',
    match: ['percent', 'pecent'],
    min: 1,
    max: 100,
    decimalPlaces: 0,
  });

  // iGo
  options.fields.push({
    type: 'alphanumeric',
    name: 'Zip Code US',
    match: ['zip'],
    template: 'Xxxxxx',
  });

  // iGo
  options.fields.push({
    type: 'alphanumeric',
    name: 'Zip Code Canada (re-enable if needed)',
    match: ['zipCANADA_DontMatch'],
    template: 'LXL-XLX',
  });

  // iGo
  options.fields.push({
    type: 'regex',
    name: 'Address Line 1',
    match: ['address1', 'addressline1', 'line1', 'address', 'street'],
    template:
      // tslint:disable-next-line:max-line-length
      '([1-9][0-9][0-9]?) (North |East |West |South |||||)(Green |White |Rocky ||||||||)(Nobel|Fabien|Hague|Oak|Second|First|Cowley|Clarendon|New|Old|Milton) (Avenue|Boulevard|Court|Drive|Extension|Freeway|Lane|Parkway|Road|Street) XXXXXXXXXX XXXXXXXXXX XXXXXXXXXX XXXXXXXXXX XXXXXXXXXX XXXXXXXXXX',
  });

  options.fields.push({
    type: 'number',
    name: 'Day',
    match: ['day'],
    min: 1,
    max: 28,
    decimalPlaces: 0,
  });

  options.fields.push({
    type: 'number',
    name: 'Month',
    match: ['month'],
    min: 1,
    max: 12,
    decimalPlaces: 0,
  });

  options.fields.push({
    type: 'number',
    name: 'Year',
    match: ['year'],
    min: 1970,
    max: 2019,
    decimalPlaces: 0,
  });

  options.fields.push({
    type: 'date',
    name: 'Date',
    match: ['date'],
    minDate: '1970-01-01',
    max: 0,
    template: 'DD-MMM-YYYY',
  });

  options.fields.push({
    type: 'url',
    name: 'Website Address',
    match: ['website'],
  });

  options.fields.push({
    type: 'regex',
    name: 'P.O. Box',
    match: ['pobox', 'postbox'],
    template: '((P\\.O\\.)|(PO)) Box [1-9][0-9]{0,4}',
  });

  return options;
};

const GetFormFillerOptions = (): Promise<IFormFillerOptions> => {
  const promise = new Promise<IFormFillerOptions>(resolve => {
    chrome.storage.local.get('options', result => {
      let options: IFormFillerOptions;
      if (result && Object.keys(result).length > 0) {
        options = result.options;
      } else {
        options = FormFillerDefaultOptions();
      }
      resolve(options);
    });
  });

  return promise;
};

const CreateContextMenus = (enableContextMenu: boolean): void => {
  chrome.contextMenus.removeAll();

  if (enableContextMenu) {
    chrome.contextMenus.create({
      id: 'form-filler-all',
      title: 'Fill all inputs',
      contexts: ['page', 'editable'],
    });

    chrome.contextMenus.create({
      id: 'form-filler-form',
      title: 'Fill this form',
      contexts: ['editable'],
    });

    chrome.contextMenus.create({
      id: 'form-filler-input',
      title: 'Fill this input',
      contexts: ['editable'],
    });
  }
};

const SaveFormFillerOptions = (options: IFormFillerOptions): void => {
  chrome.storage.local.set({
    options,
  });

  CreateContextMenus(options.enableContextMenu);
};

const CsvToArray = (csvString: string): string[] => {
  const splitValues = csvString && csvString.length > 0 ? csvString.split(',') : [];
  const arrayData: string[] = [];

  for (let i = 0; i < splitValues.length; i += 1) {
    splitValues[i] = splitValues[i].replace(/^\s*/, '').replace(/\s*$/, '');
    if (splitValues[i].length > 0) {
      arrayData.push(splitValues[i]);
    }
  }

  return arrayData;
};

const MultipleLinesToArray = (text: string): string[] => {
  const splitValues = text && text.length > 0 ? text.split('\n') : [];
  const arrayData: string[] = [];

  for (let i = 0; i < splitValues.length; i += 1) {
    splitValues[i] = splitValues[i].replace(/^\s*/, '').replace(/\s*$/, '');
    if (splitValues[i].length > 0) {
      arrayData.push(splitValues[i]);
    }
  }

  return arrayData;
};

const GetKeyboardShortcuts = (): Promise<chrome.commands.Command[]> => {
  const promise = new Promise<chrome.commands.Command[]>(resolve => {
    chrome.commands.getAll(result => {
      resolve(result);
    });
  });

  return promise;
};

// tslint:disable-next-line:no-any
const GetMessage = (key: string, parameters?: any) => {
  return chrome.i18n.getMessage(key, parameters);
};

const GetHtmlMarkup = (text: string): { __html: string } => {
  return { __html: text };
};

const SanitizeText = (text: string): string => {
  return text.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
};

export {
  DEFAULT_TELEPHONE_TEMPLATE,
  CreateContextMenus,
  CsvToArray,
  FormFillerDefaultOptions,
  GetFormFillerOptions,
  GetHtmlMarkup,
  GetKeyboardShortcuts,
  GetMessage,
  MultipleLinesToArray,
  SanitizeText,
  SaveFormFillerOptions,
};
