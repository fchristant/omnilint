/* eslint-disable */
const stylelint = require("stylelint");

const ruleName = "plugin/no-tailwind";
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    "Usage of Tailwind CSS is not allowed. Points will be deducted from your social credit score.",
});

// Our custom rule function
const pluginRule = (primaryOption, secondaryOptions, context) => {
  return (root, result) => {
    // Check for Tailwind specific at-rules (like @tailwind base, @tailwind components, @tailwind utilities)
    root.walkAtRules((atRule) => {
      if (atRule.name === "tailwind") {
        stylelint.utils.report({
          message: messages.rejected,
          node: atRule,
          result,
          ruleName,
        });
      }
    });

    // Optionally, block selectors that match common Tailwind naming conventions.
    // For example, you might block classes that include '-500' or '-600' which are common in Tailwind color utilities.
    root.walkRules((rule) => {
      rule.selectors.forEach((selector) => {
        // Adjust this regex based on your specific needs.
        // This example targets selectors containing classes like ".bg-red-500" or ".text-blue-600".
        if (/\.([a-z]+-(red|blue|green|yellow)-\d{3,4})/.test(selector)) {
          stylelint.utils.report({
            message: messages.rejected,
            node: rule,
            result,
            ruleName,
          });
        }
      });
    });
  };
};

module.exports = stylelint.createPlugin(ruleName, pluginRule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
