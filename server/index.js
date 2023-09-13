import cors from "cors"
import express from "express"

import { download } from "./download.js"

//initialize application
const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({ result: "Download do vídeo realizado com sucesso" })
})

//boot server
app.listen(3333, () => console.log("Server is running on port 3333"))
