import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animal) {
  const Proprietario = await ProprietarioRepository.getProprietario(
    animal.proprietarioId
  );
  if (Proprietario) {
    return AnimalRepository.insertAnimal(animal);
  } else {
    throw new Error(
      "Proprietario não existe! Cadastre o Proprietario antes de cadastrar um animal para ele!"
    );
  }
}

async function getAnimals(proprietarioId) {
  if (proprietarioId) {
    return AnimalRepository.getAnimaisByProprietarioId(proprietarioId);
  }
  return AnimalRepository.getAnimals();
}
async function getAnimal(id) {
  return AnimalRepository.getAnimal(id);
}
async function deleteAnimal(id) {
  return AnimalRepository.deleteAnimal(id);
}
async function updateAnimal(animal) {
  const Proprietario = await ProprietarioRepository.getProprietario(
    animal.proprietarioId
  );
  if (Proprietario) {
    return AnimalRepository.updateAnimal(animal);
  } else {
    throw new Error("Proprietario não existe!");
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
