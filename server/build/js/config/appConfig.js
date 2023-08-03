"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appConfig(app, mongoose) {
    try {
        mongoose
            .connect(process.env.MONGODB_TOKEN_URL)
            .then(() => {
            app.listen(process.env.PORT, () => {
                console.log("Server is up and ruuning");
            });
        });
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}
exports.default = appConfig;
