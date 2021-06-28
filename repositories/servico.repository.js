import Servico from "../models/servico.model.js";
import Animal from "../models/animal.model.js";

async function insertServico(servico) {
  try{
    return await Servico.create(servico);
  }  catch(err){
    throw err;
  }
}

async function getServico(id) {
  try{
    return await Servico.findByPk(id);
  } catch(err){
    throw err;
  }
}

async function getServicos() {
  try{
    return await Servico.findAll(
      {include:[
        {model: Animal}
      ]
        
      }
    );
  }catch(err){
    throw err;
  }
}

async function getServicosByAnimalId(id){
  console.log("id do animal ", id);
  try{
    return await Servico.findAll({
      include:[ { model: Animal } ], 
      where:  { animalId: id }
    });
  }catch(err){
    throw err;
  }
}

async function getServicosByProprietarioId(id){
  try{
    return await Servico.findAll({
      include:[ {
        model: Animal,
        where: { proprietarioId: id }
      }]
    });
  }catch(err){
    throw err;
  }
}

async function deleteServico(id) {
  try{
     await Servico.destroy({
      where:{ servicoId:id }
    });
  }catch(err){
    throw err;
  }
}

async function updateServico(servico) {
  try{
     await Servico.update(servico, {
      where:{ servicoId: servico.servicoId }
    });
    return getServico(servico.ServicoId)

  }
  catch(err){
    throw err;
  }
}

export default {
  insertServico,
  getServico,
  getServicos,
  getServicosByAnimalId,
  getServicosByProprietarioId,
  updateServico,
  deleteServico,
};
