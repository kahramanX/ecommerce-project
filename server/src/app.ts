import express, { Request, Response } from "express";
import dotnev from "dotenv";
import cors from "cors";

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
                path: "Visit project's repo for more details https://github.com/kahramanX/ecommerce-project",
            })
            .end();
    });
} catch (error) {
    console.log("\x1b[31m%s", "Code Error");
}

export default app;
