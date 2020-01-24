const Dev = require('../Dev')
const parseStringAsArray = require('../../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)
        let devs = [];

        if (techsArray[0]) {
            devs = await Dev.find({
                techs: {
                    $in: techsArray
                },
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 10000
                    }
                }
            })
        } else {
            devs = await Dev.find({});
        }

        return response.json({ devs })
    }
}