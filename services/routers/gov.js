const express = require('express')
const router = express.Router()
const employeeModel = require('../model/employee')

router.get('/gov/employee/:nic', async (req, res) => {
    try {
//            console.log("working");
//                const routee = new employeeModel({
//                    firstName:"ankit",
//                    lastName:"mandloi",
//                    nic:"discount",
//                    address:{
//                      type: [
//                            "ankitmandloi12345@gmail.com"
//                    ]
//
//                    }
//                });
//              await routee.save();


        employeeModel.findOne({ nic: req.params.nic }, (err, val) => {
            if (err) {
                console.log(err);
            } else {
                if (val) {
                    res.status(200).json({ validated: true })
                } else {
                    res.status(200).json({ validated: false })
                }
            }
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router