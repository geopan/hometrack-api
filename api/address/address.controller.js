'use strict';

class AddressController {

  constructor() {
    return this;
  }

  async filtered(req, res, next) {

    const {payload} = req.body;

    try {

      let result = payload;

      result = payload.map(function(address) {

        const {unitNumber, buildingNumber, street, suburb, postcode, state} = address.address;
        const {type, workflow} = address;

        let concatAddress = `${unitNumber || ''} ${buildingNumber} ${street} ${suburb} ${postcode} ${state}`;

        return {
          concataddress: concatAddress.trim(),
          type: type,
          workflow: workflow
        }

      });

      return res.json(result);

    } catch (err) {
      return next(err);
    }

  }

}

module.exports = AddressController;