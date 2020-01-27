export function inputAttr () {
  this.type = 'tel'; // text, email, number, tel, url
  this.name = 'name';
  this.uniqueId = '';
  this.label = this.name; // redeclare for Symantic reasons and ability to overwrite 
  this.autocomplete = 'off'; //auto
  this.autocapitalize = 'off' // auto
  this.list = false; // only for Searches
  this.maxlength = false; // Set for Numbers too
  this.minlength = false; //
  this.pattern = ''; // auto
  this.placeholder = 'Placeholder'; 
  this.isReadonly = false; // Useful for `code` examples
  this.isRequired = false;
  this.hasSpellcheck = false; // auto
  this.hasAutocorrect = false; // auto / Safari Specific for spellCheck
  this.isDisabled = false;

  // React Specifc
  this.isValid = null;
  this.hasVerification = false; // Validity Handling

  // Methods for rewriting the object per 'type'

  // Email Specific
  this.email = function () {
    this.autocomplete = 'email';
    this.name = 'Email Address';
    this.label = this.name;
    delete this.pattern; // For symantic HTML5 reasoning
  }
  // Number Specifc
  this.number = function () {
    this.pattern = '[0-9]*';
    this.min = this.minlength;
    this.max = this.maxlength;
    this.inputMode = 'numeric';
    delete this.size;
    delete this.pattern;
    delete this.maxlength;
    delete this.minlength;
  }
  // Telephone Specifc Pattern
  this.tel = function () {
    this.pattern = "^+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:W*d){0,13}d$";
    this.autocomplete = 'tel';
    this.name = 'Phone Number';
    this.label = this.name
  }
  // Text / Text Field specifc
  this.text = function () {
    this.pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+";
    this.hasSpellcheck = true;
    this.hasAutocorrect = true;
    this.autocapitalize = true;
    this.label = this.name;
  }
  this.textarea = function () {
    this.label = this.name;
    this.autocapitalize = "sentence";
    delete this.type;
  }
  // URL Specific
  this.url = function () {
    this.pattern = "[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";
    this.autocomplete = 'url';
    this.name = "Website URL";
    this.label = this.name;
  }
};