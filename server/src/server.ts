import express from "express";
import dotnev from "dotenv";

const app = express();

dotnev.config();

app.listen(process.env.APP_PORT, () => {
    console.log(
        "\x1b[31m%s",
        "-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|",
        "\x1b[0m"
    );

    console.log(
        "\x1b[34m%s",
        "Using environment :\x1b",
        "\x1b[33m",
        process.env.NODE_ENV,
        "\x1b[0m"
    );

    console.log(
        "\x1b[34m%s",
        process.env.APP_NAME + " Running On :\x1b",
        "\x1b[33m",
        +`${process.env.APP_PORT}`,
        "\x1b[0m"
    );

    console.log(
        "-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|"
    );

    console.log(
        "Server -> Server started at : ",
        "\x1b[33m",
        new Date().toLocaleString()
    );
});
