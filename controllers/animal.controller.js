import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietarioId
    ) {
      throw new Error(
        "Nome, tipo e Id do proprietário são campos obrigatórios!"
      );
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`Post /animal - ${JSON.stringfy(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals());
    logger.info(`Get /animal`);
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info(`Get /animal`);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    let retorno = await AnimalService.deleteAnimal(req.params.id);
    if (retorno === null) {
      res.status(404).send("animal não encontrado!");
    } else {
      res.send("");
    }
    logger.info(`Delete /animal`);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animalId ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietarioId
    ) {
      throw new Error(
        "Animal_id, nome, tipo e Id do proprietário são campos obrigatórios!"
      );
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`Update using PUT /animal - ${JSON.stringfy(animal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
