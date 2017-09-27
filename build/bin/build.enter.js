var Components = require("../../components.json");
var fs = require("fs");
var render = require("json-templater/string");
var uppercamelcase = require("uppercamelcase");
var path = require("path");

var OUTPUT_PATH = path.join(__dirname, "../../src/index.js");
var IMPORT_TEMPLATE = "import {{name}} from './components/{{package}}';";
var ISNTALL_COMPONENT_TEMPLATE = "  Vue.component({{name}}.name, {{name}});";
var MAIN_TEMPLATE = `{{include}}
import rem from "./plug-in/rem";

const version = '{{version}}';
const install = function(Vue, config = {}) {
  if (install.installed) return;

{{install}}

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version
};
`;

var ComponentNames = Object.keys(Components);
var includeComponentTemplate = [];
var installTemplate = [];
var templateName = [];

// load include components template
var loadIncludeComponentTemplate = function(name, componentName) {
  componentName = "{ " + componentName + " }";
  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );
};

// load install components template
var loadInstallTemplate = function(name) {
  componentName = uppercamelcase(name);
  installTemplate.push(
    render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    })
  );
};

//forEach
ComponentNames.forEach(name => {
  if (name.indexOf(",") > 0) {
    templateName = name.split(",");
    var strCase = "";
    templateName.forEach(key => {
      strCase += uppercamelcase(key) + ",";
      loadInstallTemplate(key);
    });
    strCase =strCase.substring(0, strCase.length - 1);
    loadIncludeComponentTemplate(templateName[0], strCase);
  } else {
    loadInstallTemplate(name);
    loadIncludeComponentTemplate(name, uppercamelcase(name));
  }
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join("\n"),
  install: installTemplate.join("\n"),
  version: process.env.VERSION || require("../../package.json").version
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log("[build entry] DONE:", OUTPUT_PATH);
