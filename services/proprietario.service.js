import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createProprietario(proprietario) {
  return ProprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios() {
  return ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
  return ProprietarioRepository.getProprietario(id);
}

async function deleteProprietario(id) {
  const animal = await AnimalRepository.getAnimaisByProprietarioId(id);
  if (animal.length === 0) {
    return ProprietarioRepository.deleteProprietario(id);
  }
  throw new Error("Exclusão negada! Proprietário possui animal(is).");
}

async function updateProprietario(proprietario) {
  const old = await getProprietario(proprietario.proprietarioId);
  if (old) {
    return ProprietarioRepository.updateProprietario(proprietario);
  }else{
  throw new Error("Proprietario não encontrado!");
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
