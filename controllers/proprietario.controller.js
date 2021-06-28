import ProprietarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (
      !proprietario.nome ||
      !proprietario.telefone
    ) {
      throw new Error(
        "Nome e telefone são campos obrigatórios!"
      );
    }
    proprietario = await ProprietarioService.createProprietario(proprietario);
    res.send(proprietario);
    logger.info(`Post /proprietario - ${JSON.stringfy(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietarios());
    logger.info(`Get /proprietario`);
  } catch (err) {
    next(err);
  }
}

async function getProprietario(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietario(req.params.id));
    logger.info(`Get /proprietario`);
  } catch (err) {
    next(err);
  }
}

async function deleteProprietario(req, res, next) {
  try {
    let retorno = await ProprietarioService.deleteProprietario(req.params.id);
    if (retorno === null) {
      res.status(404).send("proprietario não encontrado!");
    } else {
      res.send("");
    }
    logger.info(`Delete /proprietario`);
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (
      !proprietario.proprietarioId ||
      !proprietario.nome ||
      !proprietario.telefone
    ) {
      throw new Error(
        "Proprietario_id, Name, CPF, Phone, Email e Address são campos obrigatórios!"
      );
    }
    proprietario = await ProprietarioService.updateProprietario(proprietario);
    res.send(proprietario);
    logger.info(`Update using PUT /proprietario - ${JSON.stringfy(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
