    import express from 'express';
    import cookieParser from 'cookie-parser';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import connectDB from './utils/db.js';
    import userRoute from "./routes/user.route.js";
    import companyRoute from "./routes/company.route.js";
    import jobRoute from "./routes/job.route.js";
    import applicationRoute from "./routes/application.route.js";



    dotenv.config({});
    // instance of express.
    const app = express();



    // Middlewares
    // Data will come in json format when we send a request;
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    const corsOptions = {
        origin:'*',
        credentials:true
    }

    app.use(cors(corsOptions));
    

    const PORT = process.env.PORT || 3000;



    app.use("/api/v1/user", userRoute);
    app.use("/api/v1/company", companyRoute);
    app.use("/api/v1/job", jobRoute);
    app.use("/api/v1/application", applicationRoute);


    app.listen(PORT, () => {
        connectDB();
        console.log(`server is listening at ${PORT}`);
    });
