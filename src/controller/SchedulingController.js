const SchedulingModel = require("../model/Scheduling")

const findAllSchedules = async (req, res) => {

  try {

    const allSchedules = await SchedulingModel.find()

    res.status(200).json(allSchedules)

  } catch (error) {
    console.log(error)
  }

}

const makeScheduling = async (req, res) => {

  try {
    const { clientName, products, day, paymentStatus } = req.body
    const existSchedule = await SchedulingModel.findOne({ clientName, products, paymentStatus })

    if (existSchedule) {
      res.status(422).json({msg: "Esse agendamento já foi feito!"})
      return
    }

    const newScheduling = await SchedulingModel.create({
      clientName, products, day, paymentStatus
    })


    if (!newScheduling) {
      res.status(422).json({msg: "Houve um error, por favor tente novamente"})
      return
    }

    res.status(200).json({ success: true, msg: "Pedido agendado", newScheduling })


  } catch (error) {
    console.log(error)
  }

}

const deleteScheduling = async (req, res) => {

  try {

    const { id } = req.params
    const existSchedule = await SchedulingModel.deleteOne({_id: id})
    
    if(!existSchedule) {
      res.status(404).json({error: "Não foi possível excluir o agendamento"})
    }

    res.status(200).json({msg: "Agendamento excluído com sucesso."})

  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  findAllSchedules,
  makeScheduling,
  deleteScheduling
}