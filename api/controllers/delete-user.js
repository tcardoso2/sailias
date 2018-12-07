module.exports = {


  friendlyName: 'Delete User',


  description: 'Remove a user from the user store',


  inputs: {

    id: {
      type: 'string'
    },

  },


  exits: {

    userAlreadyDeleted: {
      statusCode: 409,
      description: 'The provided user is already deleted.',
    },

  },


  fn: async function (inputs) {

    // Save to the db
    sails.log(`Removing user with id ${inputs.id}... `);
    await User.updateOne({ id: inputs.id })
    .set({
      deleted: true
    });
  }


};
