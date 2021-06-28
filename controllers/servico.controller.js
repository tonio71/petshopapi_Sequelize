import ServicoService from "../services/servico.service.js";

async function createServico(req, res, next) {
  try {
    let servico = req.body;
    if (
      !servico.descricao ||
      !servico.valor ||
      !servico.animalId
    ) {
      throw new Error(
        "Descricao, valor e Id do animal são campos obrigatórios!"
      );
    }
    servico = await ServicoService.createServico(servico);
    res.send(servico);
    logger.info(`Post /servico - ${JSON.stringfy(servico)}`);
  } catch (err) {
    next(err);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.animalId,req.query.proprietarioId));
    logger.info(`Get /servico`);
  } catch (err) {
    next(err);
  }
}

async function getServico(req, res, next) {
  try {
    res.send(await ServicoService.getServico(req.params.id));
    logger.info(`Get /servico`);
  } catch (err) {
    next(err);
  }
}

async function deleteServico(req, res, next) {
  try {
    let retorno = await ServicoService.deleteServico(req.params.id);
    if (retorno === null) {
      res.status(404).send("servico não encontrado!");
    } else {
      res.send("");
    }
    logger.info(`Delete /servico`);
  } catch (err) {
    next(err);
  }
}

async function updateServico(req, res, next) {
  try {
    let servico = req.body;
    if (
      !servico.servicoId ||
      !servico.descricao ||
      !servico.valor ||
      !servico.animalId
    ) {
      throw new Error(
        "Servico_id, descricao, valor e Id do animal são campos obrigatórios!"
      );
    }
    servico = await ServicoService.updateServico(servico);
    res.send(servico);
    logger.info(`Update using PUT /servico - ${JSON.stringfy(servico)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
};
