const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
      const r = await axios.put("https://api.chatengine.io/users/",
        {username: username , secret: username , first_name : username},
        {headers: {"private-key": "273ba699-a1b7-4a9c-9e4e-4da45de83158"}}
      );
      return res.status(r.status).json(r.data);
  } 
  catch (e) {
    return res.status(e.response.status).json(e.response.data);

  }
});

app.listen(3001);
