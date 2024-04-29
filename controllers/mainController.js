// Model import
const models = require('../models');
const Main = models.main;

// Add
//http://localhost:5000/api/create
exports.addPID = async function (req, res) {
  try {
    await Main.create()
      .then((main) => {
        //console.log("create");
        res.status(200).json(main);
      })
      .catch((err) => {
        return res.status(500).json('Something error there ' + err);
      });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};

//http://localhost:5000/api/getall
exports.getAll = async function (req, res) {
  try {
    await Main.findAll()
      .then((main) => {
        res.status(200).json(main);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

//http://localhost:5000/api/getbyid
exports.getbyPid = async function (req, res) {
  try {
    let PID = req.body.pid;
    await Main.findOne({
      where: { pid: PID },
    })
      .then((main) => {
        res.status(200).json(main);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

exports.deleteByID = async function (req, res) {
  try {
    let PID = req.body.pid;

    await Main.destroy({
      where: {
        pid: PID,
      },
    })
      .then((main) => {
        res
          .status(200)
          .json(PID + ': The process has been successfully deleted');
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
