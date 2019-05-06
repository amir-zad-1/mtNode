import http = require("http");
import log4js = require("log4js");

import appManager = require("./src/AppManager");
import config from "./src/config";

const app = appManager.createApp();

const logger = log4js.getLogger(module.filename);
logger.level = "debug";

app.set("port", config.server.port);
const server = http.createServer(app);
server.on("error", (error) => logger.error("[X] " + error));
server.on("listening", () => logger.info(`BACKEND is listening on port ${config.server.port}`));
server.listen(config.server.port);

process.on("SIGINT", () => {
    logger.info("Stopping BACKEND.");
    server.close(() => {
        logger.info("BACKEND stopped.");
    });
});