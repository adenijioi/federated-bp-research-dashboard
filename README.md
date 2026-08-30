# Federated Blood Pressure Classification Dashboard

Interactive research dashboard for a two-client, non-IID federated multimodel blood pressure classification project.

The website presents verified thesis results for binary classification (`Normal` and `At-risk`), including local and pooled model comparisons, confusion matrices, and FedAvg communication rounds 0–10.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

The repository includes `render.yaml` for deployment as a Render web service.
