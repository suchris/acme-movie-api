const app = require("./app");
const port = process.env.PORT || 3000;
const { syncAndSeed } = require("./db");

const init = async () => {
  await syncAndSeed();
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
};

init();
