import fs from "fs"
import wav from "node-wav"
import ffmpeg from "fluent-ffmpeg"
import ffmegStatic from "ffmpeg-static"
import { rejects } from "assert"

const filePath = "./tmp/audio.mp4"
const outputPath = filePath.replace(".mp4", ".wav")

export const convert = () =>
  new Promise((resolve, reject) => {
    console.log("Convertendo o vídeo...")

    ffmpeg.setFfmpegPath(ffmegStatic)
    ffmpeg()
      .input(filePath)
      .audioFrequency(16000)
      .audioChannels(1)
      .format("wav")
      .on("end", () => {
        const file = fs.readFileSync(outputPath)
        const fileDecoded = wav.decode(file)

        const audioData = fileDecoded.channelData[0]
        const floatArray = new Float32Array(audioData)

        console.log("Video convertido com sucesso")
        resolve(floatArray)
        fs.unlinkSync(outputPath)
      })
      .on("error", (erro) => {
        console.log("Erro ao converter o video", error)
        reject(error)
      })
      .save(outputPath)
  })
