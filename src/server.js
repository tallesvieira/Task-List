import app from "./app";
import connectionServer from "../connection";

app.listen(connectionServer.PORT || 8081);
