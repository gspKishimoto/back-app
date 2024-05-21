const templateModel = require('../model/templateModel');

module.exports = {
  template: async (data) => {
    try {
      const result = await templateModel.template(data);
      return result;
    } catch (err) {
      throw new Error('Error occurred in templateService.template: ' + err.message);
    }
  },
};
