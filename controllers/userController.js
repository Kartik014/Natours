const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`));

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        result: users.length,
        data: {
            users
        }
    })
}

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Not defined'
    })
}

exports.createUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Not defined'
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Not defined'
    })
}

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Not defined'
    })
}