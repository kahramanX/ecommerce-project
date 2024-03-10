import express, { Request, Response } from "express";
import dotnev from "dotenv";
import cors from "cors";
import allRoutes from "express-list-endpoints";

const app = express();

dotnev.config();

app.use(cors());

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "UPDATE"],
    allowedHeaders: ["Content-Type"],
};

app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ extended: true }));

// * Routes * //
try {
    const getDurationInMilliseconds = (start: any) => {
        const NS_PER_SEC = 1e9;
        const NS_TO_MS = 1e6;
        const diff = process.hrtime(start);

        return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
    };
    app.use((req, res, next) => {
        if (process.env.NODE_ENV == "dev") {
            const start = process.hrtime();
            res.on("finish", () => {
                const durationInMilliseconds = getDurationInMilliseconds(start);
                console.log(
                    "\x1b[36m%s\x1b[0m",
                    "Responsed :",
                    "\x1b[0m\x1b[2m",
                    req.method,
                    " -> " + req.url,
                    durationInMilliseconds >= 1000
                        ? "\x1b[0m\x1b[31m"
                        : durationInMilliseconds >= 500
                        ? "\x1b[0m\x1b[33m"
                        : "\x1b[0m\x1b[32m",
                    durationInMilliseconds.toLocaleString(),
                    "ms",
                    "\x1b[0m"
                );
            });
        }
        next();
    });

    app.use("/api", (req: Request, res: Response) => {
        res.json({ message: "API ROUTE" });
    });

    app.get("*", function (req, res) {
        res.status(404)
            .json({
                message: "This route is unavailable",
                path: "Visit for more details https://github.com/kahramanX/ecommerce-project",
            })
            .end();
    });
} catch (error) {
    console.log("\x1b[31m%s", "Code Error");
}

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
        "Running On :\x1b",
        "\x1b[33m",
        +`${process.env.APP_PORT}`,
        "\x1b[0m"
    );

    console.log("\x1b[34m%s", "Route Count : ", allRoutes(app).length);

    console.log(
        "-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|"
    );

    console.log(
        "Server -> Server started at : ",
        "\x1b[33m",
        new Date().toLocaleString()
    );
});
