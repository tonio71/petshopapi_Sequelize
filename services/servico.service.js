import ServicoRepository from "../repositories/servico.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createServico(servico) {
  const animal = await AnimalRepository.getAnimal(
    servico.animalId
  );
  if (animal) {
    return ServicoRepository.insertServico(servico);
  } else {
    throw new Error(
      "Animal não existe! Cadastre o animal antes de cadastrar um servico para ele!"
    );
  }
}

async function getServicos(animalId, proprietarioId) {
  if (animalId) {
    return ServicoRepository.getServicosByAnimalId(animalId);
  }
  if (proprietarioId) {
    return ServicoRepository.getServicosByProprietarioId(proprietarioId);
  }
  return ServicoRepository.getServicos();
}

async function getServico(id) {
  return ServicoRepository.getServico(id);
}

async function deleteServico(id) {
  return ServicoRepository.deleteServico(id);
}

async function updateServico(servico) {
  const animal = await AnimalRepository.getAnimal(
    servico.animalId
  );
  if (animal) {
    return ServicoRepository.updateServico(servico);
  } else {
    throw new Error("Animal não existe!");
  }
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
};
